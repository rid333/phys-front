<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet";
    import { Menu, ChevronDown } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button";
    import * as Collapsible from "./collapsible";
    import logo from "$lib/images/logo.png"

    import {onMount, onDestroy} from 'svelte'
	const scrollNavBar = 60
	let show = false
	onMount(() => {
		window.onscroll = () => {
			if (window.scrollY > scrollNavBar) {
				show = true
			} else {
				show = false
			}
		}
	})
	
	onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {}
        }
	})

    const menus = [
        {
            id: '1', 
            menu: 'Profile', 
            items: [
                {id: '1', item: 'History', href: '/history'},
                {id: '2', item: 'Vision and Mission', href: '/vision-and-mission'},
                {id: '3', item: 'Curriculum Structure', href: '/curriculum-structure'}
            ]
        },
        {
            id: '2', 
            menu: 'Study Programs', 
            items: [
                {id: '1', item: 'Undergraduate Program', href: '/undergraduate-program'},
                {id: '2', item: 'Graduate Program', href: 'https://doctorphys.sci.unhas.ac.id/'}
            ]
        },
        {
            id: '3', 
            menu: 'Research Group', 
            items: [
                {id: '1', item: 'Theoretical and Computation', href: '/theoretical-and-computation'},
                {id: '2', item: 'Material and Energy', href: '/material-and-energy'},
                {id: '3', item: 'Electronics and Instrumentation', href: '/electronics-and-instrumentation'},
                {id: '4', item: 'Optics and Spectroscopy', href: '/optics-and-spectroscopy'}
            ]
        },
        {
            id: '4', 
            menu: 'Learning Resources', 
            items: [
                {id: '1', item: 'Module Handbook', href: '/module-handbook'},
                // {id: '2', item: 'Libraries', href: '/libraries'},
                // {id: '3', item: 'Portfolio', href: '/portfolio'}
            ]
        }
    ]
</script>

<div class={`${show ? 'opacity-75 blur-[0.5px]' : ''} text-slate-800 transition duration-400 flex items-center px-5 py-4 lg:py-5 w-screen rounded-none fixed z-50 shadow-md bg-white`}>
    <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
            <Button builders={[builder]} variant='ghost' class="rounded-none">
                <Menu class="scale-90 lg:scale-100" />
            </Button>
        </Sheet.Trigger>
        <Sheet.Content side="left">
            <div class="grid gap-8 py-8 text-base lg:text-xl text-slate-800">
                {#each menus as menu (menu.id)}
                    <Collapsible.Root class="hover:bg-slate-50 transition px-3 py-2">
                        <Collapsible.Trigger class="font-semibold flex items-center">{menu.menu} <ChevronDown class='ml-2 h-4 w-4 left-3' /></Collapsible.Trigger>
                        <div class="mt-2 space-y-3 font-medium">
                        {#each menu.items as item}
                            <Collapsible.Content>
                                <a class="hover:underline" href={item.href}>{item.item}</a>
                            </Collapsible.Content>
                        {/each}
                        </div>
                    </Collapsible.Root>
                {/each}
                <a class="font-semibold text-base lg:text-xl hover:bg-slate-50 hover:underline transition px-3 py-2" href="/people">People</a>
                <a class="font-semibold text-base lg:text-xl hover:bg-slate-50 hover:underline transition px-3 py-2" href="/news">News</a>
                <a class="font-semibold text-base lg:text-xl hover:bg-slate-50 hover:underline transition px-3 py-2" href="/activities">Events</a>
            </div>
        </Sheet.Content>
    </Sheet.Root>
    <Button  href="/" variant='ghost' class='flex gap-3 font-semibold text-xl lg:text-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-white'>
        <img src={logo} alt="Logo Unhas" class="h-10 lg:h-14">
        Department of Physics
    </Button>
</div>