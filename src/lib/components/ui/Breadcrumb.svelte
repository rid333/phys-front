<script lang="ts">
    import { ChevronRight } from "lucide-svelte";
    export let firstMenu: string;
    export let firstMenuLink: string = "javascript:void(0);";
    export let colorFirstMenu: string;
    export let secondMenu: string;
    export let secondMenuLink: string = "javascript:void(0);";
    export let colorSecondMenu: string;
    export let thirdMenu: string;
    export let thirdMenuLink: string = "javascript:void(0);";
    export let colorThirdMenu: string = "javascript:void(0);";
</script>

<div class="text-sm lg:text-base font-semibold gap-x-5 max-w-6xl flex m-auto items-center">
    <a href="/">Home</a>
    <ChevronRight class="w-5 h-5"/>
    <a href={firstMenuLink} class={`text-${colorFirstMenu}`}>{firstMenu}</a>
    {#if secondMenu !== ""}
        <ChevronRight class="w-5 h-5"/>
        <a href={secondMenuLink} class={`text-${colorSecondMenu}`}>{secondMenu}</a>
    {/if}
    {#if thirdMenu !== ""}
        <ChevronRight class="w-5 h-5"/>
        <a href={thirdMenuLink} class={`text-${colorThirdMenu}`}>{thirdMenu}</a>
    {/if}
</div>