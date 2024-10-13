<script lang="ts">
    export let colorAllStaff: string = "black";
    export let bgAllStaff: string = "white";
    export let colorAcademicStaffs: string = "black";
    export let bgAcademicStaffs: string = "white";
    export let colorNonAcademicStaffs: string = "black";
    export let bgNonAcademicStaffs: string = "white";
    import { GraduationCap, UsersRound, User } from "lucide-svelte";
</script>

<div
    class="sticky top-20 text-xs lg:text-lg font-semibold gap-y-5 flex flex-col bg-white p-5 lg:p-10 shadow-lg h-fit"
>
    <a
        class={`${colorAllStaff} ${bgAllStaff} flex lg:gap-x-2 items-center p-2`}
        href="/people"
    >
        <UsersRound size="20px" strokeWidth="2px" />
        <p class="hidden lg:block">All Staffs</p>
    </a>
    <a
        class={`${colorAcademicStaffs} ${bgAcademicStaffs} flex lg:gap-x-2 items-center p-2`}
        href="/people/academic-staffs"
    >
        <GraduationCap size="20px" strokeWidth="2px" />
        <p class="hidden lg:block">Academic Staffs</p>
    </a>
    <a
        class={`${colorNonAcademicStaffs} ${bgNonAcademicStaffs} flex lg:gap-x-2 items-center p-2`}
        href="/people/non-academic-staffs"
    >
        <User size="20px" strokeWidth="2px" />
        <p class="hidden lg:block">Non Academic Staffs</p>
    </a>
</div>

