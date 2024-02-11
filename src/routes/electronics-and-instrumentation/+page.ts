let API_URL = import.meta.env.VITE_API_URL;

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
        `${API_URL}/api/globals/elektronika-dan-instrumentasi`,
        `${API_URL}/api/people?limit=30&sort=id&[where][researchInterest][equals]=Electronics and Instrumentation`,
    ];
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(res => res.json()));
    const content: any[] = data[0].content;
    const thesis: string[] = data[0].thesis.map((thesis: any) => thesis.thesis_title);

    const dosen: Dosen = data[1].docs;

    return { content, thesis, dosen };
}