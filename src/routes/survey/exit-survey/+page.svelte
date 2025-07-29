<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    const pageName = "Exit Survey";
</script>

<svelte:head>
    <meta name="title" content={pageName} />
    <meta
        name="description"
        content="Exit Survey, Department of Physics Hasanuddin University"
    />
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1
        class="text-center text-4xl lg:text-7xl absolute text-white font-bold z-10"
    >
        {pageName}
    </h1>
    <img
        class={`w-full h-[500px] object-cover brightness-50`}
        src={`${PUBLIC_API_URL}/media/DeptFisika4.jpg`}
        alt={pageName}
    />
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 -mb-5 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="mb-10">
            <Breadcrumb
                firstMenu="Survey"
                colorFirstMenu="black"
                secondMenu={pageName}
                colorSecondMenu="redUH-600"
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="max-w-full text-black text-base lg:text-lg font-medium leading-relaxed text-justify">
            <img
                class={`object-cover`}
                src="https://18.136.124.23.nip.io/media/Screenshot%202024-02-27%20at%2008-42-59%20Exit%20Survey.pdf-1024x712.png"
                alt="Survey"
            />
        </div>
    </div>
</div>
