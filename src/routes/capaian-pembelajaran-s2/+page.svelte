<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    const pageName = "Capaian Pembelajaran";
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
                href="https://docs.google.com/document/d/15k9F_U0FKQYqtZzvT6hbFesBFPVEGM-g14L0_CDTVvA/edit?usp=sharing"
                >Capaian Pembelajaran S2</a
            >
            <div class="block mt-5">
                <iframe
                    title="Capaian Pembelajaran"
                    class="w-full aspect-square"
                    src="https://docs.google.com/document/d/e/2PACX-1vTy3Srb5fCqrsr2hHQnCtnZC89yrhtViZvpKD2ooO38B93uMRfegcUjN4qkQQpdg6csJsHdFlygV29y/pub?embedded=true"
                ></iframe>
            </div>
        </div>
    </div>
</div>
