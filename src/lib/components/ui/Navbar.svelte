<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet";
    import { Menu, ChevronDown } from "lucide-svelte";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Button } from "$lib/components/ui/button";
    import * as Accordion from "$lib/components/ui/accordion";
    import logo from "$lib/images/logo.png";

    import { onMount, onDestroy } from "svelte";
    const scrollNavBar = 60;
    let show = false;
    onMount(() => {
        window.onscroll = () => {
            if (window.scrollY > scrollNavBar) {
                show = true;
            } else {
                show = false;
            }
        };
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {};
        }
    });

    const menus = [
        {
            id: "1",
            menu: "Profile",
            items: [
                { id: "1", item: "History", href: "/history" },
                {
                    id: "2",
                    item: "Vision and Mission",
                    children: "true",
                    items: [
                        {
                            id: "1",
                            item: "Undergraduate Program",
                            href: "/vision-and-mission",
                        },
                        {
                            id: "2",
                            item: "Doctoral Program",
                            href: "/vision-and-mission-doctor",
                        },
                    ],
                },
                {
                    id: "3",
                    item: "Curriculum Structure",
                    href: "/curriculum-structure",
                },
            ],
        },

        {
            id: "2",
            menu: "Study Programs",
            items: [
                {
                    id: "1",
                    item: "Undergraduate Program",
                    href: "/undergraduate-program",
                },
                // {
                //     id: "2",
                //     item: "Master Program",
                //     href: "/master-program",
                // },
                {
                    id: "2",
                    item: "Doctoral Program",
                    href: "https://doctorphys.sci.unhas.ac.id/",
                },
            ],
        },

        {
            id: "3",
            menu: "Master Program",
            items: [
                {
                    id: "1",
                    item: "Profil Lulusan",
                    href: "/profile-lulusan-s2",
                },
                {
                    id: "2",
                    item: "Visi dan Misi",
                    href: "/vision-and-mission-master",
                },
                {
                    id: "3",
                    item: "Capaian Pembelajaran",
                    href: "/capaian-pembelajaran-s2",
                },
                {
                    id: "4",
                    item: "Tujuan dan Manfaat Prodi",
                    href: "/tujuan-manfaat-s2",
                },
                {
                    id: "5",
                    item: "Struktur Kurikulum",
                    href: "/curriculum-structure-master",
                },
            ],
        },

        {
            id: "4",
            menu: "Research Group",
            items: [
                {
                    id: "1",
                    item: "Theoretical and Computation",
                    href: "/theoretical-and-computation",
                },
                {
                    id: "2",
                    item: "Material and Energy",
                    href: "/material-and-energy",
                },
                {
                    id: "3",
                    item: "Electronics and Instrumentation",
                    href: "/electronics-and-instrumentation",
                },
                {
                    id: "4",
                    item: "Optics and Spectroscopy",
                    href: "/optics-and-spectroscopy",
                },
            ],
        },
        {
            id: "5",
            menu: "Learning Resources",
            items: [
                { id: "1", item: "Module Handbook", href: "/module-handbook" },
                { id: "2", item: "Libraries", href: "/library" },
                { id: "3", item: "Portfolio", href: "/portfolio" },
            ],
        },
    ];
</script>

<div
    class={`${show ? "opacity-75 blur-[0.5px]" : ""} text-slate-800 transition duration-400 flex items-center px-5 py-4 lg:py-5 w-screen rounded-none fixed z-50 shadow-md bg-white`}
>
    <Sheet.Root preventScroll={true}>
        <Sheet.Trigger asChild let:builder>
            <Button builders={[builder]} variant="ghost" class="rounded-none">
                <Menu class="scale-90 lg:scale-100" />
            </Button>
        </Sheet.Trigger>
        <Sheet.Content class="overflow-auto" side="left">
            <div class="grid py-10 px-5 text-base text-slate-800">
                <Accordion.Root>
                    {#each menus as menu, i}
                        <Accordion.Item
                            value={`item-${i}`}
                            class="hover:bg-slate-50 transition"
                        >
                            <Accordion.Trigger
                                class="font-semibold hover:no-underline"
                                >{menu.menu}</Accordion.Trigger
                            >
                            <div class=" font-medium">
                                {#each menu.items as item}
                                    <Accordion.Content>
                                        {#if item.children}
                                            <DropdownMenu.Root>
                                                <DropdownMenu.Trigger
                                                    class="flex items-center text-base"
                                                    >{item.item}
                                                    <ChevronDown
                                                        class="ml-2 h-4 w-4 left-3"
                                                    /></DropdownMenu.Trigger
                                                >
                                                <DropdownMenu.Content
                                                    class="rounded-none px-3 py-2 ml-10"
                                                >
                                                    <DropdownMenu.Group>
                                                        {#each item.items as itemChild}
                                                            <DropdownMenu.Item>
                                                                <a
                                                                    class="hover:underline"
                                                                    href={itemChild.href}
                                                                    >{itemChild.item}</a
                                                                >
                                                            </DropdownMenu.Item>
                                                        {/each}
                                                    </DropdownMenu.Group>
                                                </DropdownMenu.Content>
                                            </DropdownMenu.Root>
                                        {:else}
                                            <a
                                                class="hover:underline text-base font-medium"
                                                href={item.href}>{item.item}</a
                                            >
                                        {/if}
                                    </Accordion.Content>
                                {/each}
                            </div>
                        </Accordion.Item>
                    {/each}
                </Accordion.Root>
                <a
                    class="font-semibold text-base hover:bg-slate-50 hover:underline transition py-4"
                    href="/people">People</a
                >
                <a
                    class="font-semibold text-base hover:bg-slate-50 hover:underline transition py-4"
                    href="/news">News</a
                >
                <a
                    class="font-semibold text-base hover:bg-slate-50 hover:underline transition py-4"
                    href="/activities">Events</a
                >
                <a
                    class="font-semibold text-base hover:bg-slate-50 hover:underline transition py-4"
                    href="/survey">Survey</a
                >
                <a
                    class="font-semibold text-base hover:bg-slate-50 hover:underline transition py-4"
                    href="/academic-sop">Academic SOP</a
                >
                <a
                    class="font-semibold text-base hover:bg-slate-50 hover:underline transition py-4"
                    href="/appendix">Appendix</a
                >
            </div>
        </Sheet.Content>
    </Sheet.Root>
    <Button
        href="/"
        variant="ghost"
        class="flex gap-3 font-semibold text-xl lg:text-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-white"
    >
        <img src={logo} alt="Logo Unhas" class="h-10 lg:h-14" />
        Department of Physics
    </Button>
</div>
