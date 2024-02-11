import type { PageLoad } from "./$types";

import { API_URL } from '$env/static/private';

type imageType = {
    id: number;
    carouselImage: {
        url: string;
    }
}

type NewsItem = {
    id: number;
    title: string;
    image: {
        url: string;
    };
    excerpt: string;
    createdAt: string;
}

type ActivityItem = {
    id: number;
    title: string;
    image: {
        url: string;
    };
    date: string;
    time: string;
    location: string;
}

const urls = [
    `${API_URL}/api/carousel`,
    `${API_URL}/api/news?limit=3`,
    `${API_URL}/api/activities?limit=3`,
    `${API_URL}/api/globals/elektronika-dan-instrumentasi`,
    `${API_URL}/api/globals/material-dan-energi`,
    `${API_URL}/api/globals/optik-dan-spektroskopi`,
    `${API_URL}/api/globals/teori-dan-komputasi`,
]

export const load: PageLoad = async ( { fetch } ) => {
    const res = await Promise.all(urls.map(url => fetch(url)));
    const items = await Promise.all(res.map(res => res.json()));

    const images: string[] =  items[0].docs.map((
        image: imageType
    ) => {
        return `${API_URL}${image.carouselImage.url}`
    });

    const news: {
        id: number;
        judul: string;
        excerpt: string;
        thumbnail: string;
        date: string;
    } [] = items[1].docs.map((newsItem: NewsItem) => ({
        id: newsItem.id,
        judul: newsItem.title,
        excerpt: newsItem.excerpt,
        thumbnail: `${API_URL}${newsItem.image.url}`,
        date: newsItem.createdAt,
    }))

    const activities: {
        id: number;
        judul: string;
        thumbnail: string;
        date: string;
        time: string;
        location: string;
    } [] = items[2].docs.map((activityItem: ActivityItem) => ({
        id: activityItem.id,
        judul: activityItem.title,
        thumbnail: `${API_URL}${activityItem.image.url}`,
        date: activityItem.date,
        time: activityItem.time,
        location: activityItem.location
    }))

    const excerptElins: string = items[3].excerpt;
    const excerptMaterial: string = items[4].excerpt;
    const excerptOptik: string = items[5].excerpt;
    const excerptTeori: string = items[6].excerpt;

    return { images, news, activities, excerptElins, excerptMaterial, excerptOptik, excerptTeori}
}