<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import type {PageData} from "./$types";
    export let data: PageData;
    $: ({ UndergraduateProgram } = data);
    const pageName = "Undergraduate Program";
    import { PUBLIC_API_URL } from "$env/static/public";
</script>

<Profile imageSource={`${PUBLIC_API_URL}/media/mews3.jpg`} headMenu="Study Programs" colorHeadMenu="black" pageName={pageName} pageDescription={UndergraduateProgram} />
```