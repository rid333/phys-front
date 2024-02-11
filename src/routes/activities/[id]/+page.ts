import type { PageLoad } from "./$types";

import { PUBLIC_API_URL } from "$env/static/public";

export const load: PageLoad = async ( { fetch, params } ) => {
    const res = await fetch (`${PUBLIC_API_URL}/api/activities/${params.id}`);
    const item = await res.json();

    const id: number = item.id;
    const judul: string = item.title;
    const thumbnail: string = `${PUBLIC_API_URL}${item.image.url}`;
    const date: string = item.date;
    const time: string = item.time;
    const location: string = item.location;
    const description: any[]= item.description;
    return { id, judul, thumbnail, date, time, location, description };
}