import type { PageLoad } from "./$types";

let API_URL = import.meta.env.VITE_API_URL;

export const load: PageLoad = async ( { fetch, params } ) => {
    const res = await fetch( `${API_URL}/api/news/${params.id}` )
    const item = await res.json();
    const judul: string = item.title;
    const content: any[] = item.content;
    const thumbnail: string = `${API_URL}${item.image.url}`;
    const date: string = item.createdAt;
    const captionGambar: string = item.image.alt;
    return { judul, content, thumbnail, date, captionGambar};
}
    