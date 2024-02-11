<script lang="ts">
    import ResearchGroup from "$lib/components/ResearchGroup.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    $: ({ content, thesis, dosen } = data);
    import { PUBLIC_API_URL } from "$env/static/public";
</script>

<ResearchGroup {content} {thesis} {dosen} topImage={`${PUBLIC_API_URL}/media/optik.jpg`} pageName="Optics and Spectroscopy" color="yellowUH-900"/>
```