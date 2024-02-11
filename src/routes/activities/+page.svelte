<script lang="ts">
    import { Calendar, MapPin, MoveLeft, MoveRight } from "lucide-svelte";
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    const pageName = "Events";
    import {PUBLIC_API_URL} from "$env/static/public";

    let pageSize = 2;
    $: currentPage = Number(data.page);
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-7xl absolute text-white font-bold">{pageName}</h1>
    <div class="w-full h-[500px] object-cover bg-darkgreenUH-500"></div>
</div>

<div class="relative mb-20 -mt-20 z-10 flex flex-col gap-y-7 lg:gap-y-14 max-w-5xl m-auto bg-slate-50 p-10 lg:p-20 shadow-xl">
    <div>
        <Breadcrumb 
            firstMenu={pageName}
            colorFirstMenu="darkgreenUH-500"
            secondMenu="" 
            colorSecondMenu=""
            thirdMenu=""
            colorThirdMenu=""
        />
    </div>
    {#each data.docs as event}
        <div class="flex items-center text-darkgreenUH-500">
            <img src={`${PUBLIC_API_URL}${event.image.sizes.thumbnail.url}`} alt={event.title} class="shadow-lg w-36 lg:w-64 h-fit">
            <div class="flex flex-col p-10 gap-1 lg:gap-3">
                <a href={`/activities/${event.id}`} class="font-bold text-lg lg:text-2xl">{event.title}</a>
                <div class="inline-flex items-center gap-x-1 lg:gap-x-2">
                    <Calendar size=18px strokeWidth=1.3px />
                    <span class="italic text-sm lg:text-xl">This will be held on {event.createdAt.slice(0,10).replaceAll("-", "/")} at {data.time}</span>
                </div>
                <div class="inline-flex items-center gap-x-1 lg:gap-x-2">
                    <MapPin size=18px strokeWidth=1.3px />
                    <span class="italic text-sm lg:text-lg">Location: {data.Location}</span>
                </div>
            </div>
        </div>
    {/each}

    <div class="flex justify-center text-white text-sm lg:text-base font-semibold">
        <a class={`flex items-center gap-x-2 justify-end pr-6 bg-darkgreenUH-500 w-36 p-2 lg:p-3 ${!data.hasPrevPage ? 'opacity-80 pointer-events-none' : ''}`} href={`/activities?limit=${pageSize}&page=${currentPage - 1}`}>
            <MoveLeft class="scale-75 lg:scale-100" size=24px strokeWidth=2.25px  />
            Previous
        </a>
        <a class={`flex items-center gap-x-2 justify-start pl-6 bg-darkgreenUH-500 w-36 p-2 lg:p-3 ${!data.hasNextPage ? 'opacity-80 pointer-events-none' : ''}`} href={`/activities?limit=${pageSize}&page=${currentPage + 1}`}>
            Next
            <MoveRight class="scale-75 lg:scale-100" size=24px strokeWidth=2.25px />
        </a>
    </div>
</div>