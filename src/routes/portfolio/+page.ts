import type { PageLoad } from "./$types";
import {PUBLIC_API_URL} from '$env/static/public';''

type Portfolio = {
    id: string
    semester: string
    portfolio: {
        id: number
        title: string
        link: string
    }[]
}

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/portfolio`);
    const item = await res.json();
    const portfolio: Portfolio[] = item.docs;
    return { portfolio }
}