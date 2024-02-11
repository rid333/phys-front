<script lang="ts">
    import ResearchGroup from "$lib/components/ResearchGroup.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    $: ({ content, thesis, dosen } = data);

    const API_URL = import.meta.env.VITE_API_URL;
</script>

<ResearchGroup {content} {thesis} {dosen} topImage={`${API_URL}/media/elins-1024x682.jpg`}  pageName="Electronics and Instrumentation" color="blueUH-500"/>