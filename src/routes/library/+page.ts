import type { PageLoad } from "./$types";

import { PUBLIC_API_URL } from "$env/static/public";

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/globals/library`);
    const item = await res.json();
    const library: any[] = item.content;

    return { library }
}