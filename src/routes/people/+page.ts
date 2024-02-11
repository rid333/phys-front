import type { PageLoad } from "./$types";

import { PUBLIC_API_URL } from "$env/static/public";

type PeopleItem = {
    id: number;
    name: string;
    position: string;
    photo: {
        url: string;
    };
    researchInterest: string;
    email: string;
}

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/people?limit=30&sort=id`);
    const items = await res.json();

    const PeopleItems: {
        id: number;
        name: string;
        position: string;
        photo: string;
        researchAreas: string;
        email: string;
    }[] = items.docs.map(( PeopleItem: PeopleItem ) => {
        return {
            id: PeopleItem.id,
            name: PeopleItem.name,
            position: PeopleItem.position,
            photo: `${PUBLIC_API_URL}${PeopleItem.photo.url}`,
            researchAreas: PeopleItem.researchInterest,
            email: PeopleItem.email,
        }
    });

    return { PeopleItems };
}