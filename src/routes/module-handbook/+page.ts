import type { PageLoad } from "./$types";
import {PUBLIC_API_URL} from '$env/static/public';''

type ModuleHandbook = {
    id: string
    semester: string
    module: {
        id: number
        title: string
        link: string
    }[]
}

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/module-handbook`);
    const item = await res.json();
    const Modules: ModuleHandbook[] = item.docs;
    return { Modules }
}