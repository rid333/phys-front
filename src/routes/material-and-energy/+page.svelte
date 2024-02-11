<script lang="ts">
    import ResearchGroup from "$lib/components/ResearchGroup.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    $: ({ content, thesis, dosen } = data);
</script>

<ResearchGroup {content} {thesis} {dosen} topImage="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" pageName="Material and Energy" color="darkgreenUH-500"/>