import type { PageLoad } from "./$types";
import {PUBLIC_API_URL} from '$env/static/public';

type AcademicSop = {
    id: string;
    title: string;
    url: string;
    directDownloadURL: string;
}

export const load: PageLoad = async ( { fetch } ) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/academic-sop?limit=30`);
    const item = await res.json();
    const academicSop: AcademicSop[] = item.docs;

    return { academicSop }
}