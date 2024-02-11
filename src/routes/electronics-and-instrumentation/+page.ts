import {PUBLIC_API_URL} from '$env/static/public';
type Dosen = {
    id: number;
    name: string;
    position: string;
    photo: {
        sizes: {
            thumbnail: {
                url: string;
            }
        }
    };
    email: string;
}[]

import type { PageLoad } from "./$types";

export const load: PageLoad = async ( { fetch } ) => {
    const urls = [
        `${PUBLIC_API_URL}/api/globals/elektronika-dan-instrumentasi`,
        `${PUBLIC_API_URL}/api/people?limit=30&sort=id&[where][researchInterest][equals]=Electronics and Instrumentation`,
    ];
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(res => res.json()));
    const content: any[] = data[0].content;
    const thesis: string[] = data[0].thesis.map((thesis: any) => thesis.thesis_title);

    const dosen: Dosen = data[1].docs;

    return { content, thesis, dosen };
}