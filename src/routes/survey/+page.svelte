<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import type {PageData} from "./$types";
    export let data: PageData;
    $: ({ survey } = data);
    import {PUBLIC_API_URL} from "$env/static/public";
</script>

<Profile imageSource={`${PUBLIC_API_URL}/media/DeptFisika4.jpg`} colorHeadMenu="black" imageClass="object-cover object-top" pageName="Survey" pageDescription={survey} />
