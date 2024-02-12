<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";
    import { Send } from "lucide-svelte";
    import Breadcrumb from "./ui/Breadcrumb.svelte";
    import Serializer from "./Serializer.svelte";
    export let content: any[];
    export let thesis: string[];
    export let dosen: any[];
    export let pageName: string;
    export let color: string;
    export let topImage: string;
    import { PUBLIC_API_URL } from "$env/static/public";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-5xl lg:text-7xl absolute text-white font-bold z-10 text-center">{pageName}</h1>
    <img class="w-full h-[500px] object-cover brightness-50" src={topImage} alt="History">
</div>

<div class="max-w-5xl m-auto relative">
    <div class="-mt-20 bg-white mb-10 shadow-lg p-8 lg:p-16">
        <div class="mb-10 text-sm lg:text-base">
            <Breadcrumb
                firstMenu="Research Areas"
                colorFirstMenu="black"
                secondMenu={pageName}
                colorSecondMenu={color}
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <p class="max-w-full text-black text-base lg:text-xl font-medium lg:leading-relaxed prose prose-p:mb-0 prose-li:mb-1 prose-headings:mb-1 prose-headings:mt-5">
            <Serializer richText={content} />
        </p>
        <Accordion.Root class={`mt-10 p-2.5 lg:p-5 text-white bg-${color}`}>
            <Accordion.Item value="item-1">
            <Accordion.Trigger class="text-sm lg:text-xl font-bold">The thesis titles of students in the Theoretical and Computational Physics</Accordion.Trigger>
            {#each thesis as judul}
                <Accordion.Content>
                    <p class="text-sm lg:text-lg font-medium text-justify">
                        {@html judul}
                    </p>
                </Accordion.Content>
            {/each}
            </Accordion.Item>
        </Accordion.Root>
    </div>
    <div class="bg-white p-8 lg:p-16 mb-20 shadow-xl">
        <h1 class={`text-${color} text-3xl font-bold mb-10`}>Academic Staff</h1>
        <div class="grid lg:grid-cols-2 gap-10">
            {#each dosen as item}
                <a href={`/people/${item.id}`} class="flex gap-8">
                    <img class="w-28 h-28 lg:w-32 lg:h-32 aspect-square rounded-none" src={`${PUBLIC_API_URL}${item.photo.url}`} alt={item.name}/>
                    <div class="flex flex-col">
                        <div class={`font-semibold text-lg text-white bg-${color} p-2 mb-2 w-fit`}>{item.name}</div>
                        <div class="text-base font-medium">{item.position}</div>
                        <div class="text-base font-medium flex items-center gap-x-0.5"><Send size=16px strokeWidth=1px/>{item.email}</div>
                    </div>
                </a> 
            {/each}
        </div>
    </div>
</div>