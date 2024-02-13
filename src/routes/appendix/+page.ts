import type { PageLoad } from "./$types";
import {PUBLIC_API_URL} from '$env/static/public';

type Document = {
    id: string;
    category: string;
    title: string;
    url: string;
    directDownloadURL: string;
}

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/appendix?limit=50`);
    const item = await res.json();
    const Documents: Document[] = item.docs;

    return { Documents }
}