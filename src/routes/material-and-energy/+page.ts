let API_URL = import.meta.env.VITE_API_URL;

type Dosen = {
    id: number;
    attributes: {
        nama: string;
        jabatan: string;
        email: string;
        foto: {
            data: {
                attributes: {
                    url: string;
                };
            }
        }
    }
}[];

import type { PageLoad } from "./$types";

export const load: PageLoad = async ( { fetch } ) => {
    const urls = [
        `${API_URL}/api/globals/material-dan-energi`,
        `${API_URL}/api/people?limit=30&sort=id&[where][researchInterest][equals]=Material and Energy`,
    ];
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(res => res.json()));
    const content: any[] = data[0].content;
    const thesis: string[] = data[0].thesis.map((thesis: any) => thesis.thesis_title);

    const dosen: Dosen = data[1].docs;

    return { content, thesis, dosen };
}