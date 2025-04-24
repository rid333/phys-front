<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    const pageName = "Curriculum Structure | Department of Physics";
</script>

<svelte:head>
    <meta name="title" content={pageName} />
    <meta
        name="description"
        content="Curriculum Structure of BPP, Department of Physics Hasanuddin University"
    />
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-center text-4xl lg:text-7xl absolute text-white font-bold z-10">{pageName}</h1>
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 -mb-5 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="mb-10">
            <Breadcrumb
                firstMenu="Profile"
                colorFirstMenu="black"
                secondMenu={pageName}
                colorSecondMenu="redUH-600"
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="max-w-full text-black text-base lg:text-2xl font-medium leading-relaxed text-justify">
            <a target="_blank" class="font-semibold text-redUH-600 hover:underline" href="https://docs.google.com/document/d/1PqlbepVSDw_xqmC8LtC_8658O5auSL2O/edit?usp=sharing&ouid=107716363586028152757&rtpof=true&sd=true">Curriculum Structure of BPP</a>
            <div class="block mt-5">
                <iframe title="Curriculum Structure of BPP" class="w-full aspect-square" src="https://docs.google.com/document/d/1PqlbepVSDw_xqmC8LtC_8658O5auSL2O/preview?usp=embed_googleplus"></iframe>
            </div>
        </div>
    </div>
</div>
