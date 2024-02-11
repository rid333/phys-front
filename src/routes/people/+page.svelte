<script lang="ts">
    import PeopleList from "$lib/components/PeopleList.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    $: ({ PeopleItems } = data);
    const pageName = "People";
</script>

<PeopleList {PeopleItems} pageName={pageName} />