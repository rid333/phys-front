<script lang="ts">
    import { ChevronRight } from "lucide-svelte";
    export let firstMenu: string;
    export let colorFirstMenu: string;
    export let secondMenu: string;
    export let colorSecondMenu: string;
    export let thirdMenu: string;
    export let colorThirdMenu: string;
</script>

<div class="text-sm lg:text-base font-semibold gap-x-5 max-w-6xl flex m-auto items-center">
    <a href="/">Home</a>
    <ChevronRight class="w-5 h-5"/>
    <p class={`text-${colorFirstMenu}`}>{firstMenu}</p>
    {#if secondMenu !== ""}
        <ChevronRight class="w-5 h-5"/>
        <p class={`text-${colorSecondMenu}`}>{secondMenu}</p>
    {/if}
    {#if thirdMenu !== ""}
        <ChevronRight class="w-5 h-5"/>
        <p class={`text-${colorThirdMenu}`}>{thirdMenu}</p>
    {/if}
</div>