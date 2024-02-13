<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    const pageName = "Curriculum Structure";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1 class="text-center text-4xl lg:text-7xl absolute text-white font-bold z-10">{pageName}</h1>
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 -mb-5 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="mb-10">
            <Breadcrumb
                firstMenu="Profile"
                colorFirstMenu="black"
                secondMenu={pageName}
                colorSecondMenu="redUH-600"
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div class="max-w-full text-black text-base lg:text-2xl font-medium leading-relaxed text-justify">
            <a target="_blank" class="font-semibold text-redUH-600 hover:underline" href="https://docs.google.com/document/d/1pz46XkLDcUDawD-ER4mGcYytv7rmtVJc/edit?usp=drive_link&ouid=107716363586028152757&rtpof=true&sd=true">Curriculum Structures of BPP</a>
            <div class="block mt-5">
                <iframe title="Curriculum Structure of BPP" class="w-full aspect-square" src="https://docs.google.com/document/d/e/2PACX-1vSK31x0pJZeZBeOwXMiZpldQVUaHJhDtBJzlTwQn90AXMv0aP3TBk5gvqvKEJh1mg/pub?embedded=true"></iframe>
            </div>
        </div>
    </div>
</div>
