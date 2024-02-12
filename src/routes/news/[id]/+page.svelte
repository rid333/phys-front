<script lang="ts">
    import { Clock } from "lucide-svelte";
    import type { PageData } from "./$types";
    import Serializer from "$lib/components/Serializer.svelte";
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    export let data: PageData;
    $: ({ judul, content, thumbnail, date, captionGambar } = data )
</script>

<svelte:head>
    <title>{judul}</title>
</svelte:head>

<div class="flex gap-x-5 lg:p-10 lg:pt-28 lg:mb-10">
    <div class="lg:w-3/4 m-auto shadow-xl text-xl pb-20 pt-28 lg:pt-20 bg-white max-w-7xl px-8 lg:px-16">
        <div class="text-xs lg:text-base mb-5">
            <Breadcrumb
                firstMenu="News"
                colorFirstMenu="redUH-600"
                secondMenu=""
                colorSecondMenu=""
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="flex flex-col mb-5 gap-y-1">
            <p class="text-2xl lg:text-4xl font-semibold">{judul}</p>
            <p class="inline-flex items-center gap-x-2 text-xs lg:text-base italic">
                <Clock size=18px strokeWidth=1.5px /> This was published on {date.slice(0,10).replaceAll("-", "/")}
            </p>
        </div>
        <div>
            <img src={thumbnail} alt={judul}>
            <p class="italic text-sm lg:text-base font-medium">{captionGambar}</p>
        </div>
        <p class="max-w-full lg:text-lg font-medium text-black space-y-1 leading-relaxed mt-5 prose prose-p:-mb-2 prose-img:my-5 prose-li:mb-1 prose-headings:mb-1 prose-headings:mt-5">
            <Serializer richText={content} />
        </p>
    </div>
    <div class="hidden lg:block lg:w-1/4 space-y-5 text-white">
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