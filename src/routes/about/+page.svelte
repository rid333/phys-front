<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    import image1 from "$lib/images/DEPT FISIKA UNHAS-2_page-0001.jpg";
    import image2 from "$lib/images/DEPT FISIKA UNHAS-2_page-0002.jpg";
    import image3 from "$lib/images/DEPT FISIKA UNHAS-2_page-0003.jpg";
    const pageName = "About";
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
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 -mb-5 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="mb-10">
            <Breadcrumb
                firstMenu={pageName}
                colorFirstMenu="redUH-600"
                secondMenu=""
                colorSecondMenu=""
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div
            class="max-w-full text-black text-base lg:text-2xl font-medium leading-relaxed text-justify space-y-16"
        >
            <img src={image1} alt="About 1" />
            <img src={image2} alt="Abbut 2" />
            <img src={image3} alt="About 3" />
        </div>
    </div>
</div>
