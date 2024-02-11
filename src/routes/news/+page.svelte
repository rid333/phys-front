<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import { Clock, MoveRight, MoveLeft } from "lucide-svelte";
    import type { PageData } from "./$types";
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte" ;
    export let data: PageData;
    const API_URL = import.meta.env.VITE_API_URL;
    let pageSize = 10;
    $: currentPage = Number(data.page);
</script>

<svelte:head>
    <title>News</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-5xl lg:text-7xl absolute text-white font-bold">News List</h1>
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>

<div class="relative mb-20 -mt-20 z-10 flex flex-col gap-y-14 max-w-5xl m-auto bg-slate-50 p-10 lg:p-20 shadow-xl">
    <div>
        <Breadcrumb
            firstMenu="News"
            colorFirstMenu="redUH-600"
            secondMenu=""
            colorSecondMenu=""
            thirdMenu=""
            colorThirdMenu=""
        />
    </div>
    {#each data.docs as news}
        <div class="flex items-start">
            <img src={`${API_URL}${news.image.sizes.thumbnail.url}`} alt={news.title} class="shadow-lg w-36 lg:w-64 h-auto"/>
            <div class="ml-5 lg:ml-10 flex flex-col gap-y-2">
                <div class="flex flex-col">
                    <a href={`/news/${news.id}`} class="font-semibold lg:font-bold text-base lg:text-2xl">{news.title}</a>
                    <div class="text-xs lg:text-base inline-flex items-center gap-x-1 lg:gap-x-2">
                        <Clock size=18px strokeWidth=1.3px />
                        <span class="italic">This was published on {news.createdAt.slice(0,10).replaceAll("-", "/")}</span>
                    </div>
                </div>       
                <p class="text-sm lg:text-lg font-medium">{news.excerpt}</p>
                <a href={`/news/${news.id}`} class="text-sm lg:text-lg font-semibold hover:underline text-redUH-600">Read</a>
            </div>
        </div>
        <Separator class="bg-redUH-600" />
    {/each}

    <div class="flex justify-center text-white text-sm lg:text-base font-semibold">
        <a class={`flex items-center gap-x-2 justify-end pr-6 bg-redUH-600 w-36 p-2 lg:p-3 ${!data.hasPrevPage ? 'opacity-80 pointer-events-none' : ''}`} href={`/news?limit=${pageSize}&page=${currentPage - 1}`}>
            <MoveLeft class="scale-75 lg:scale-100" size=24px strokeWidth=2.25px  />
            Previous
        </a>
        <a class={`flex items-center gap-x-2 justify-start pl-6 bg-redUH-600 w-36 p-2 lg:p-3 ${!data.hasNextPage ? 'opacity-80 pointer-events-none' : ''}`} href={`/news?limit=${pageSize}&page=${currentPage + 1}`}>
            Next
            <MoveRight class="scale-75 lg:scale-100" size=24px strokeWidth=2.25px />
        </a>
    </div>
</div>
