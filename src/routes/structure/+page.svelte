<script lang="ts">
    import Breadcrumb from "$lib/components/ui/Breadcrumb.svelte";
    import daftarStaff from "$lib/images/daftar_staff.png";
    import daftarStaffNonAkademik from "$lib/images/daftar_staff_nonakademik.jpg";
    import structureStaff from "$lib/images/struktur_organisasi.jpg";
    const pageName = "Department Structure";
</script>

<svelte:head>
    <title>{pageName}</title>
</svelte:head>

<div class="relative flex items-center justify-center">
    <h1
        class="text-center text-4xl lg:text-7xl absolute text-white font-bold z-10"
    >
        {pageName}
    </h1>
    <div class="w-full h-[500px] object-cover bg-red-700"></div>
</div>

<div class="relative max-w-5xl m-auto">
    <div class="bg-white -mt-20 -mb-5 z-30 lg:mb-20 shadow-lg p-8 lg:p-16">
        <div class="mb-10">
            <Breadcrumb
                firstMenu={pageName}
                colorFirstMenu="redUH-600"
                secondMenu=""
                colorSecondMenu=""
                thirdMenu=""
                colorThirdMenu=""
            />
        </div>
        <div
            class="max-w-full text-black text-base lg:text-2xl font-medium leading-relaxed text-justify space-y-16"
        >
            <div class="space-y-4">
                <h1 class="font-bold text-redUH-600 lg:text-4xl">Structure</h1>
                <img src={structureStaff} alt="Structure" />
            </div>
            <div class="space-y-4">
                <h1 class="font-bold text-redUH-600 lg:text-4xl">Staff List</h1>
                <img src={daftarStaff} alt="Daftar Staff" />
            </div>
            <div class="space-y-4">
                <h1 class="font-bold text-redUH-600 lg:text-4xl">Staff List</h1>
                <img src={daftarStaff} alt="Daftar Staff Non-akademik" />
            </div>
        </div>
    </div>
</div>
