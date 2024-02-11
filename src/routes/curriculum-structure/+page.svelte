<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    const pageName = "Curriculum Structure";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-7xl absolute text-white font-bold">{pageName}</h1>
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 z-30 mb-20 shadow-lg p-16">
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
        <div class="max-w-full text-black text-xl font-medium leading-relaxed text-justify prose">
            <p>Curriculum Structure</p>
        </div>
    </div>
</div>
