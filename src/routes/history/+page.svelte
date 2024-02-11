<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import type {PageData} from "./$types";
    export let data: PageData;
    $: ({ history } = data);
    const API_URL = import.meta.env.VITE_API_URL;
</script>

<Profile imageSource={`${API_URL}/media/DeptFisika4.jpg`} pageName="History" pageDescription={history} />
```