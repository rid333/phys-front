<script lang="ts">
    export let pageName: string;
    export let pageDescription: any[];
    export let imageSource: string;
    import Serializer from "./Serializer.svelte";
  import Breadcrumb from "./ui/Breadcrumb.svelte";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-center text-4xl lg:text-7xl absolute text-white font-bold z-10">{pageName}</h1>
    {#if imageSource==""}
        <div class="w-full h-[500px] object-cover bg-red-700"></div>
    {:else}
        <img class="w-full h-[500px] object-cover brightness-50" src={imageSource} alt={pageName}>
    {/if}
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 -mb-5 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="text-sm lg:text-base mb-10">
            <Breadcrumb
                firstMenu="Profile"
                colorFirstMenu="black"
                secondMenu={pageName}
                colorSecondMenu="redUH-600"
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="max-w-full text-black text-base lg:text-xl font-medium lg:leading-relaxed prose prose-p:mb-0 prose-li:mb-1 prose-headings:mb-1 prose-headings:mt-5">
            <Serializer richText={pageDescription} />
        </div>
    </div>
</div>