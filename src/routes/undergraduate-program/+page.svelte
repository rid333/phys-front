<script lang="ts">
    import Profile from "$lib/components/Profile.svelte";
    import type {PageData} from "./$types";
    export let data: PageData;
    $: ({ UndergraduateProgram } = data);
    const pageName = "Undergraduate Program";
</script>

<Profile imageSource="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" pageName={pageName} pageDescription={UndergraduateProgram} />
```