<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";
    import type { PageData } from './$types';
    import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
    export let data: PageData;

    $: ({semester1, semester2, semester3, semester4, semester5, semester6} = data);

    const pageName = "Module Handbook";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-4xl lg:text-7xl absolute text-white font-bold text-center">Module Handbook</h1>
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="mb-12 text-sm lg:text-base">
            <Breadcrumb
                firstMenu="Profile"
                colorFirstMenu="black"
                secondMenu={pageName}
                colorSecondMenu="redUH-600"
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="max-w-full text-black leading-relaxed text-justify">
            <Accordion.Root class="space-y-5">
                <Accordion.Item value="item-1">
                    <Accordion.Trigger class="text-2xl lg:text-3xl font-semibold text-redUH-600">Semester 1</Accordion.Trigger>
                    {#each semester1 as item1}
                        <Accordion.Content>
                            <a href={item1.link} class="font-medium text-lg hover:underline">{item1.module}</a>
                        </Accordion.Content>
                    {/each}
                </Accordion.Item>
                <Accordion.Item value="item-2">
                    <Accordion.Trigger class="text-2xl lg:text-3xl font-semibold text-redUH-600">Semester 2</Accordion.Trigger>
                    {#each semester2 as item1}
                        <Accordion.Content>
                            <a href={item1.link} class="font-medium text-lg hover:underline">{item1.module}</a>
                        </Accordion.Content>
                    {/each}
                </Accordion.Item>
                <Accordion.Item value="item-3">
                    <Accordion.Trigger class="text-2xl lg:text-3xl font-semibold text-redUH-600">Semester 3</Accordion.Trigger>
                    {#each semester3 as item1}
                        <Accordion.Content>
                            <a href={item1.link} class="font-medium text-lg hover:underline">{item1.module}</a>
                        </Accordion.Content>
                    {/each}
                </Accordion.Item>
                <Accordion.Item value="item-4">
                    <Accordion.Trigger class="text-2xl lg:text-3xl font-semibold text-redUH-600">Semester 4</Accordion.Trigger>
                    {#each semester4 as item1}
                        <Accordion.Content>
                            <a href={item1.link} class="font-medium text-lg hover:underline">{item1.module}</a>
                        </Accordion.Content>
                    {/each}
                </Accordion.Item>
                <Accordion.Item value="item-5">
                    <Accordion.Trigger class="text-2xl lg:text-3xl font-semibold text-redUH-600">Semester 5</Accordion.Trigger>
                    {#each semester5 as item1}
                        <Accordion.Content>
                            <a href={item1.link} class="font-medium text-lg hover:underline">{item1.module}</a>
                        </Accordion.Content>
                    {/each}
                </Accordion.Item>
                <Accordion.Item value="item-6">
                    <Accordion.Trigger class="text-2xl lg:text-3xl font-semibold text-redUH-600">Semester 6</Accordion.Trigger>
                    {#each semester6 as item1}
                        <Accordion.Content>
                            <a href={item1.link} class="font-medium text-lg hover:underline">{item1.module}</a>
                        </Accordion.Content>
                    {/each}
                </Accordion.Item>
            </Accordion.Root>
        </div>
    </div>
</div>