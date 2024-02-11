<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import type {PageData} from "./$types";
    export let data: PageData;
    $: ({ visiMisi } = data);
</script>

<Profile imageSource="" pageName="Vision and Mission" pageDescription={visiMisi} />