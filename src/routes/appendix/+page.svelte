<script lang="ts">
    import type { PageData } from './$types';
    import type { Writable, Readable } from 'svelte/store';
    import {writable, derived} from 'svelte/store';
    import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
    import {Search} from 'lucide-svelte';

    let searchTerm: Writable<string> = writable('');
    export let data: PageData; 
    const documents = data.Documents;
    import * as Table from "$lib/components/ui/table";

    let filteredData: Readable<any[]> = derived(
        [searchTerm],
        ([$searchTerm]) => documents.filter(item => 
            item.title.toLowerCase().includes($searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes($searchTerm.toLowerCase())
        )
    );
    const pageName = "Appendix";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-4xl lg:text-7xl absolute text-white font-bold text-center">{pageName}</h1>
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="mb-12 text-sm lg:text-base">
            <Breadcrumb
                firstMenu={pageName}
                colorFirstMenu="redUH-600"
                secondMenu=""
                colorSecondMenu=""
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="relative flex items-center">
            <input type="text" bind:value={$searchTerm} class="pl-6 p-1 placeholder-black border-2 border-slate-100 border-solid" placeholder="Search here...">
            <Search class="pl-1 w-5 h-5 p-0.5 absolute" />
        </div>
        <Table.Root class="font-medium text-sm lg:text-base">
            <Table.Caption>List of Appendix</Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.Head class="w-10">No.</Table.Head>
                <Table.Head>Category</Table.Head>
                <Table.Head>Title</Table.Head>
                <Table.Head>Read Link</Table.Head>
                <Table.Head>Direct Download Link</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {#each [...$filteredData].sort((a, b) => a.category.localeCompare(b.category)) as item, i}
                <Table.Row>
                  <Table.Cell class="font-semibold">{i + 1}</Table.Cell>
                  <Table.Cell>{item.category}</Table.Cell>
                  <Table.Cell>{item.title}</Table.Cell>
                  <Table.Cell class="underline"><a target="_blank" href={item.url}>Read</a></Table.Cell>
                  <Table.Cell class="underline"><a target="_blank" href={item.directDownloadURL}>Download</a></Table.Cell>
                </Table.Row>
              {/each}
            </Table.Body>
          </Table.Root>
    </div>
</div>