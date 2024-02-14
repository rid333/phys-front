<script lang="ts">
    import type {PageData} from "./$types";
    export let data: PageData;
    $: ({ portfolio } = data);
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    const pageName = "Portfolio";
    import * as Accordion from "$lib/components/ui/accordion";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-center text-4xl lg:text-7xl absolute text-white font-bold z-10">{pageName}</h1>
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>


<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 -mb-5 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="text-sm lg:text-base mb-10">
            <Breadcrumb
                firstMenu={pageName}
                colorFirstMenu="redUH-600"
                secondMenu=""
                colorSecondMenu=""
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="max-w-full text-black text-base lg:text-xl font-medium lg:leading-relaxed">
            <Accordion.Root>
                {#each portfolio.sort((a, b) => a.semester.localeCompare(b.semester, undefined, {numeric: true})) as portfolios}
                    <Accordion.Item value={`item-${portfolios.id}`}>
                        <Accordion.Trigger class="font-semibold text-xl lg:text-2xl text-redUH-600">{portfolios.semester}</Accordion.Trigger>
                        {#each portfolios.portfolio as portfolio}
                            <Accordion.Content>
                                <a target="_blank" class="hover:underline text-base" href={portfolio.link}>{portfolio.title}</a>
                            </Accordion.Content>
                        {/each}
                    </Accordion.Item>
                {/each}
            </Accordion.Root>
        </div>
    </div>
</div>