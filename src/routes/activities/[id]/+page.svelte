<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    import { Calendar, MapPin, BookOpen } from "lucide-svelte";
    import type { PageData } from "./$types";
    import Serializer from "$lib/components/Serializer.svelte";
    export let data: PageData;
    $: ({ id, judul, thumbnail, date, time, location, description } = data )
</script>

<svelte:head>
    <title>{judul}</title>
</svelte:head>

<div class="flex gap-x-5 lg:pt-28 lg:p-10 lg:mb-10">
    <div class="lg:w-3/4 m-auto shadow-xl text-xl pb-20 pt-28 lg:pt-20 bg-white max-w-7xl px-10 lg:px-20">
        <div class="text-xs lg:text-base mb-5">
            <Breadcrumb
                firstMenu="Events"
                firstMenuLink="/activities"
                colorFirstMenu="darkgreenUH-500"
                secondMenu=""
                colorSecondMenu=""
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="flex flex-col gap-10">
            <p class="text-2xl lg:text-4xl font-bold">{judul}</p>
            <img src={thumbnail} alt={judul}>
             <div class="flex flex-col gap-y-2">
                <p class="text-xl lg:text-3xl font-semibold flex items-center gap-x-1 lg:gap-x-2">
                    <Calendar class="scale-75 lg:scale-100" size=25px strokeWidth=1.8px />
                    Date and Time
                </p>
                <p class="font-medium">{date.slice(0,10).replaceAll("-", "/")} {time}</p>
            </div>
            <div class="flex flex-col gap-y-2">
                <p class="text-xl lg:text-3xl font-semibold flex items-center gap-x-1 lg:gap-x-2">
                    <MapPin class="scale-75 lg:scale-100" size=25px strokeWidth=1.8px />
                    Location
                </p>
                <p class="font-medium">{location}</p>
            </div>
            <div class="flex flex-col gap-y-2">
                <p class="text-xl lg:text-3xl font-semibold flex items-center gap-x-1 lg:gap-x-2">
                    <BookOpen class="scale-75 lg:scale-100" size=25px strokeWidth=1.8px />
                    Description
                </p>
                <Serializer  richText={description} />
            </div>

        </div>
    </div>
    <div class="hidden lg:block w-1/4 space-y-5 text-white">
        <div class="bg-blueUH-400 shadow-xl p-6">
            <h1 class="text-2xl font-semibold mb-2">Alumni</h1>
            <div class="flex flex-col font-medium">
                <a href="/">Tracer Study Alumni</a>
                <a href="/">Survey Pengguna</a>
                <a href="/">Survey Kepuasan Mahasiswa</a>
                <a href="/">Kuesioner Pemahaman VMST Prodi</a>
                <a href="/">Survey Pengguna Alumni S2 Fisika Unhas</a>
            </div>
        </div>
        <div class="bg-blueUH-400 shadow-lg p-6">
            <h1 class="text-2xl font-semibold mb-2">Link</h1>
            <div class="flex flex-col font-medium">
                <a href="/">LMS Unhas</a>
                <a href="/">SIM Unhas</a>
                <a href="/">Login BKD Unhas</a>
                <a href="/">Login Penelitian Unhas</a>
                <a href="/">FMIPA Unhas</a>
                <a href="/">SIMLITABMAS</a>
                <a href="/">KEMERISTEKDIKTI</a>
            </div>
        </div>
        <div class="bg-blueUH-400 shadow-lg p-6">
            <h1 class="text-2xl font-semibold">Journals</h1>
            <div class="flex flex-col font-medium mb-2">
                <a href="/">Unhas E-Journals: Fusi, Jurnal MIPA, Etc.</a>
                <a href="/">APS Journals: Letter A, B, C, D, E, X</a>
                <a href="/">IOP Journals, Journal of Physics A</a>
                <a href="/">Nature Journal: Nature Physics, Science</a>
                <a href="/">Elsevier Journals</a>
            </div>
        </div>
    </div>
</div>