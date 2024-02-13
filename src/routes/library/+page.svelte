<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import type {PageData} from "./$types";
    export let data: PageData;
    $: ({ library } = data);
    const pageName = "Libraries";
    import { PUBLIC_API_URL } from "$env/static/public";
</script>

<Profile imageSource={`${PUBLIC_API_URL}/media/pintuperpus.jpg`} imageClass="object-cover object-top" pageName={pageName} pageDescription={library} />