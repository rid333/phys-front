<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    const pageName = "Struktur Kurikulum";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1
        class="text-center text-4xl lg:text-7xl absolute text-white font-bold z-10"
    >
        {pageName}
    </h1>
    <div class="w-full h-[500px] object-cover bg-blueUH-500"></div>
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 -mb-5 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="mb-10">
            <Breadcrumb
                firstMenu="Master Program"
                colorFirstMenu="black"
                secondMenu={pageName}
                colorSecondMenu="blueUH-500"
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div
            class="max-w-full text-black text-base lg:text-2xl font-medium leading-relaxed text-justify"
        >
            <a
                target="_blank"
                class="font-semibold text-blueUH-500 hover:underline"
                href="https://docs.google.com/document/d/1GmZTDZ8RxCAS3VFeqDDJdsXQl_7FnCua8pmx6vcoKqI/edit?usp=sharing"
                >Struktur Kurikulum Program Master</a
            >
            <div class="block mt-5">
                <iframe
                    title="Struktur Kurikulum"
                    class="w-full aspect-square"
                    src="https://docs.google.com/document/d/e/2PACX-1vSLpLuq-4EY2xz7ZVL0Vef-8QeJfjb1qcCU3hiN599E75jWNl4Os4faeWVSbu4jVyG-ilKHCYIJj_fc/pub?embedded=true"
                ></iframe>
            </div>
        </div>
    </div>
</div>
