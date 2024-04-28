<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    $: ({ visiMisi } = data);
    import { PUBLIC_API_URL } from "$env/static/public";
</script>

<Profile
    imageSource={`${PUBLIC_API_URL}/media/mews3.jpg`}
    colorHeadMenu="black"
    headMenu="Master Program"
    colorSecondMenu="blueUH-500"
    pageName="Profil Lulusan"
    pageDescription={visiMisi}
/>
