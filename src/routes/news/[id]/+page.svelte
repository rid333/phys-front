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
                firstMenuLink="/news"
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
                <a target="_blank" href="https://forms.gle/Shez1mXV3V9cQA6g7">Tracer Study Alumni</a>
                <a target="_blank" href="https://forms.gle/Qm48tcG7mbb9cvrk6">Survey Pengguna</a>
                <a target="_blank" href="https://forms.gle/7u3njyzhf1HrrHei9">Survey Kepuasan Mahasiswa</a>
                <a target="_blank" href="https://forms.gle/6bFtuEu4yAwrJKWt8">Kuesioner Pemahaman VMST Prodi</a>
                <a target="_blank" href="https://forms.gle/AKSCPLo83tdYt9Lp6">Survey Pengguna Alumni S2 Fisika Unhas</a>
            </div>
        </div>
        <div class="bg-blueUH-400 shadow-lg p-6">
            <h1 class="text-2xl font-semibold mb-2">Link</h1>
            <div class="flex flex-col font-medium">
                <a target="_blank" href="http://lms.unhas.ac.id/">LMS Unhas</a>
                <a target="_blank" href="http://sim.unhas.ac.id/">SIM Unhas</a>
                <a target="_blank" href="https://apps.unhas.ac.id/dashboard/index.php/login">Login BKD Unhas</a>
                <a target="_blank" href="https://app.pdlp2m.unhas.ac.id/login">Login Penelitian Internal</a>
                <a target="_blank" href="http://www.unhas.ac.id/mipa/">FMIPA Unhas</a>
                <a target="_blank" href="http://www.unhas.ac.id/">Unhas</a>
                <a target="_blank" href="http://simlitabmas.ristekdikti.go.id/">SIMLITABMAS</a>
                <a target="_blank" href="http://www.ristekdikti.go.id/">KEMERISTEKDIKTI</a> 
            </div>
        </div>
        <div class="bg-blueUH-400 shadow-lg p-6">
            <h1 class="text-2xl font-semibold">Journals</h1>
            <div class="flex flex-col font-medium mb-2">
                <p>Unhas E-Journals: 
                    <a target="_blank" href="http://journal.unhas.ac.id/">Fusi</a>, 
                    <a target="_blank" href="http://journal.unhas.ac.id/index.php/fmipa/">Jurnal MIPA</a>, 
                    Etc.
                </p>
                <p>APS Journals: 
                    <a target="_blank" href="http://prl.aps.org/">Letter</a>,
                    <a target="_blank" href="http://pra.aps.org/">A</a>,
                    <a target="_blank" href="http://prb.aps.org/">B</a>, 
                    <a target="_blank" href="http://prc.aps.org/">C</a>, 
                    <a target="_blank" href="http://prd.aps.org/">D</a>, 
                    <a target="_blank" href="http://pre.aps.org/">E</a>, 
                    <a target="_blank" href="http://prx.aps.org/">X</a>
                </p>
                <p>
                    <a target="_blank" href="http://www.iop.org/">IOP Journals</a>, 
                    <a target="_blank" href="http://www.iop.org/">Journal of Physics A</a>
                </p>
                <p>
                    <a target="_blank" href="http://nature.com/">Nature Journal:</a> 
                    <a target="_blank" href="http://nature.com/nphys/">Nature Physicsa</a>, 
                    <a target="_blank" href="http://www.science.com/">Sciencea</a>,
                </p>
                <a target="_blank" href="http://www.elsevier.com/">Elsevier Journals</a>
            </div>
        </div>
    </div>
</div>