import type { PageLoad } from "./$types";

import { PUBLIC_API_URL } from "$env/static/public";
export const load: PageLoad = async ({ fetch, params }) => {
    const res = await fetch(`${PUBLIC_API_URL}/api/news/${params.id}`)
    const item = await res.json();
    const judul: string = item.title;
    const content: any[] = item.content;
    const thumbnail: string = `${PUBLIC_API_URL}${item.image.url}`;
    const date: string = item.createdAt;
    const captionGambar: string = item.image.alt;
    const excerpt: string = item.excerpt;
    return { judul, content, thumbnail, date, captionGambar, excerpt };
}

