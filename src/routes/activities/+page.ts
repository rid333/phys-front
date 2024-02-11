const API_URL = import.meta.env.VITE_API_URL;

export async function load({url, fetch}){
    const limit = Number(url.searchParams.get('limit')) || 2;
    const page = Number(url.searchParams.get('page')) || 1;
    const res = await fetch( `${API_URL}/api/activities?limit=${limit}&page=${page}` );
    const data = await res.json();
    return data;
}