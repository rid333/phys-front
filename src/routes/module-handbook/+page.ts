import type { PageLoad } from "./$types";
import {PUBLIC_API_URL} from '$env/static/public';

type HanbookType = {
    semester1: {
        module: string;
        link: string;
    }[];
    semester2: {
        module: string;
        link: string;
    }[];
    semester3: {
        module: string;
        link: string;
    }[];
    semester4: {
        module: string;
        link: string;
    }[];
    semester5: {
        module: string;
        link: string;
    }[];
    semester6: {
        module: string;
        link: string;
    }[];
};

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/globals/module-handbook`);
    const items = await res.json();
    return items as HanbookType;
}