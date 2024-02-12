<script lang="ts">
    import { Phone, ChevronRight, Send, GraduationCap, Library, BookUser, MapPin, Link } from "lucide-svelte"
    import logo from '$lib/images/logo.png';
    import type { PageData } from "./$types";
    export let data: PageData;
    $: ({PeopleItem} = data);
    import {PUBLIC_API_URL} from "$env/static/public";

</script>

<svelte:head>
    <title>{PeopleItem.name} | Department of Physics</title>
</svelte:head>

<div class="pt-24">
    <div class="text-sm lg:text-base px-10 lg:px-0 font-semibold gap-x-5 max-w-6xl flex m-auto items-center mb-5">
        <a href="/">Home</a>
        <ChevronRight class="w-5 h-5"/>
        <a href="/people">People</a>
        <ChevronRight class="w-5 h-5"/> 
        <a class="text-redUH-500" href="/">{PeopleItem.name}</a>
    </div>
    <div class="relative flex flex-col gap-y-10 bg-white m-auto max-w-6xl lg:mb-20 p-5 lg:p-20 shadow-lg">
        <img class="absolute top-28 right-32 opacity-[0.03] w-[600px] h-auto grayscale" src={logo} alt="Logo">
        <div class="relative flex gap-x-8 lg:gap-x-16">
            <img class="z-10 w-[150px] h-[150px] lg:w-[300px] lg:h-[350px] object-cover shadow-lg" src={`${PUBLIC_API_URL}${PeopleItem.photo.url}`} alt="Gambar">
            <div class="flex flex-col gap-y-2 z-10">
                <p class="text-xl lg:text-4xl font-bold text-redUH-600">{PeopleItem.name}</p>
                {#if PeopleItem.researchInterest !== null && PeopleItem.researchInterest !== "tidak-ada"}
                    <p class="text-lg lg:text-2xl font-bold text-redUH-600"><a class="hover:underline transition" href={`/${PeopleItem.researchInterest.toLowerCase().replace(/\s+/g, '-')}`}>{PeopleItem.researchInterest}</p>
                {/if}
                <div class="flex flex-col">
                    <p class="text-lg lg:text-2xl font-semibold">{PeopleItem.position}</p>
                </div>
                <div class="bg-redUH-600 text-white p-2.5 lg:p-5 font-medium">
                    <p class="text-base lg:text-xl font-semibold">Contact:</p>
                    <div class="flex items-center gap-x-3 text-sm lg:text-lg">
                        <Phone class="w-5 h-5 scale-75 lg:scale-100"/>
                        <p>{PeopleItem.phone}</p>
                    </div>
                    <div class="flex items-center gap-x-3 text-sm lg:text-lg">
                        <Send class="w-5 h-5 scale-75 lg:scale-100" />
                        <p>{PeopleItem.email}</p>
                    </div>
                    {#if PeopleItem.address !== null && PeopleItem.address !== ""}
                        <div class="flex items-center gap-x-3 text-sm lg:text-lg">
                            <MapPin class="w-5 h-5 scale-75 lg:sclae-100" />
                            <p>{PeopleItem.address}</p>
                        </div>
                    {/if}
                </div>
                {#if PeopleItem.cvLink !== null && PeopleItem.cvLink !== ""}
                    <a target="_blank" class="flex gap-x-1 lg:gap-x-2 items-center underline italic font-medium text-sm lg:text-lg w-fit hover:bg-slate-100 transition" href={PeopleItem.cvLink}>
                        <Link class="scale-75 lg:scale-100" size=18px strokeWidth=2.2px/>
                        Curriculum Vitae
                    </a>
                {/if}
                {#if PeopleItem.staffHandbookLink !== null && PeopleItem.staffHandbookLink !== ""}
                    <a target="_blank" class="flex gap-x-1 lg:gap-x-2 items-center underline italic font-medium text-sm lg:text-lg w-fit hover:bg-slate-100 transition" href={PeopleItem.staffHandbookLink}>
                        <Link class="scale-75 lg:scale-100" size=18px strokeWidth=2.2px/>
                        Staff Handbook
                    </a>
                {/if}
            </div>
        </div>
        {#if PeopleItem.biography !== null && PeopleItem.biography !== ""}
            <div class="z-10">
                <p class="flex items-center gap-x-2 text-xl lg:text-2xl font-semibold text-redUH-600 mb-2">
                    <BookUser size=32px strokeWidth=2.2px/>Biography
                </p>
                <div class="text-base lg:text-xl font-medium">
                    <p>{PeopleItem.biography}</p>
                </div>
            </div>
        {/if}
        {#if PeopleItem.education && PeopleItem.education.length > 0}
            <div class="z-10">
                <p class="flex items-center gap-x-2 text-xl lg:text-2xl font-semibold text-redUH-600 mb-2">
                    <GraduationCap size=32px strokeWidth=2.2px/>Education
                </p>
                <div class="text-base lg:text-xl font-medium">
                    {#each PeopleItem.education as {degree, institution, year}}
                        <p><span class="font-semibold">{degree}</span>, {institution}, {year}</p>
                    {/each}
                </div>
            </div>
        {/if}
        {#if PeopleItem.publication && PeopleItem.publication.length > 0}
            <div class="z-10">
                <p class="flex items-center gap-x-2 text-xl  lg:text-2xl font-semibold text-redUH-600 mb-2">
                    <Library size=32px strokeWidth=2.2px />Relevant Publications
                </p>
                <div class="text-base lg:text-xl font-medium">
                    <ul class="space-y-1 list-disc list-inside">
                        {#each PeopleItem.publication as {title}}
                            <li>{title}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/if} 
    </div>
</div>