import type { PageLoad } from "./$types";

import { PUBLIC_API_URL } from "$env/static/public";

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/globals/undergraduate-program`);
    const item = await res.json();
    const UndergraduateProgram: any[] = item.content;

    return { UndergraduateProgram }
}