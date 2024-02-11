import type { PageLoad } from "./$types";

const API_URL = import.meta.env.VITE_API_URL;

export const load: PageLoad = async ( { fetch, params } ) => {
    const res = await fetch(`${API_URL}/api/people/${params.id}`);
    const item = await res.json();

    const PeopleItem: {
        id: number;
        name: string;
        position: string;
        photo: {
            url: string;
        },
        biography: string;
        education: {
            degree: string;
            institution: string;
            year: string;
        }[],
        researchInterest: string;
        email: string;
        phone: string;
        address: string;
        cvLink: string;
        staffHandbookLink: string;
        publication: {
            id: string;
            title: string;
        }[]
    } = item;
    return { PeopleItem };
}