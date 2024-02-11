import type { PageLoad } from "./$types";

let API_URL = import.meta.env.VITE_API_URL;

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${API_URL}/api/globals/visi-misi`);
    const item = await res.json();
    const visiMisi: any[] = item.content;

    return { visiMisi }
}