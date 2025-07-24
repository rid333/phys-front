<script lang="ts">
    import {Send} from "lucide-svelte";
    export let PeopleItems: any[];
    export let pageName: string;
    import Breadcrumb from "./ui/Breadcrumb.svelte";
    import PeopleSidebar from "./ui/PeopleSidebar.svelte";
</script>

<svelte:head>
    <title>{pageName} | Physics</title>
</svelte:head>

<div class="pl-10 lg:pl-0 pt-24">
    <div class="mb-5 lg:-mb-5">
        <Breadcrumb
            firstMenu="People"
            colorFirstMenu="redUH-600"
            secondMenu=""
            colorSecondMenu=""
            thirdMenu=""
            colorThirdMenu=""
        />
    </div>
</div>

<div class="lg:p-10 flex gap-x-1 lg:gap-x-5 lg:gap-10 justify-center m-auto text-black mb-20">
    <div class="lg:w-1/4">
        {#if pageName === "People"}
            <PeopleSidebar colorAllStaff="text-white" bgAllStaff="bg-redUH-600"/>
        {:else if pageName === "Academic Staffs"}
            <PeopleSidebar colorAcademicStaffs="text-white" bgAcademicStaffs="bg-redUH-600"/>
        {:else if pageName === "Non-Academic Staffs"}
            <PeopleSidebar colorNonAcademicStaffs="text-white" bgNonAcademicStaffs="bg-redUH-600"/>
        {/if}
    </div>
    <div class="w-3/4 bg-white shadow-lg">
        <div class="grid lg:grid-cols-2 p-5 lg:p-10 gap-12 lg:gap-16">
            {#each PeopleItems as {name, position, photo, researchAreas, email, id}}
                <a href={`/people/${id}`} class="flex gap-x-5">
                    <img class="aspect-square w-20 h-24 lg:w-28 lg:h-32 rounded-none" src={photo} alt={name}/>
                    <div class="flex flex-col">
                        <div class="font-semibold text-xs lg:text-base text-white bg-redUH-600 p-2 mb-2 w-fit">{name}</div>
                        {#if researchAreas !== null && researchAreas !== "tidak-ada"}
                            <div class="text-xs lg:text-base font-semibold">{researchAreas}</div>
                        {/if}
                        {#if researchAreas !== "tidak-ada"}
                            <div class="text-xs lg:text-base font-medium truncate">{position}</div>
                        {:else}
                            <div class="text-xs lg:text-base font-semibold truncate">{position}</div>
                        {/if}
                        <div class="text-xs lg:text-base font-medium flex items-center gap-x-0.5"><Send size=16px strokeWidth=1px/>{email}</div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>
