<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Menu, ChevronDown } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';
	import logo from '$lib/images/logo.png';

	import { onMount, onDestroy } from 'svelte';
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
		if (typeof window !== 'undefined') {
			window.onscroll = () => {};
		}
	});

	const menus = [
		{
			id: '1',
			menu: 'Profile',
			items: [
				{ id: '1', item: 'History', href: '/history' },
				{
					id: '2',
					item: 'Vision and Mission',
					children: 'true',
					items: [
						{
							id: '1',
							item: 'Undergraduate Program',
							href: '/vision-and-mission'
						},
						{
							id: '2',
							item: 'Doctoral Program',
							href: '/vision-and-mission-doctor'
						}
					]
				},
				{
					id: '3',
					item: 'Curriculum Structure',
					href: '/curriculum-structure'
				},
				{
					id: '4',
					item: 'Department Structure',
					href: '/structure'
				}
			]
		},

		{
			id: '2',
			menu: 'Study Programs',
			items: [
				{
					id: '1',
					item: 'Undergraduate Program',
					href: '/undergraduate-program'
				},
				{
					id: '2',
					item: 'Master Program',
					children: 'true',
					items: [
						{
							id: '1',
							item: 'Profil Lulusan S2 Fisika',
							href: '/profile-lulusan-s2'
						},
						{
							id: '2',
							item: 'Visi dan Misi S2 Fisika',
							href: '/vision-and-mission-master'
						},
						{
							id: '3',
							item: 'Capaian Pembelajaran S2 Fisika',
							href: '/capaian-pembelajaran-s2'
						},
						{
							id: '4',
							item: 'Tujuan dan Manfaat Prodi S2 Fisika',
							href: '/tujuan-manfaat-s2'
						},
						{
							id: '5',
							item: 'Struktur Kurikulum S2 Fisika',
							href: '/curriculum-structure-master'
						}
					]
				},
				{
					id: '3',
					item: 'Doctoral Program',
					href: 'https://doctorphys.sci.unhas.ac.id/'
				}
			]
		},
		{
			id: '4',
			menu: 'Research Group',
			items: [
				{
					id: '1',
					item: 'Theoretical and Computation',
					href: '/theoretical-and-computation'
				},
				{
					id: '2',
					item: 'Material and Energy',
					href: '/material-and-energy'
				},
				{
					id: '3',
					item: 'Electronics and Instrumentation',
					href: '/electronics-and-instrumentation'
				},
				{
					id: '4',
					item: 'Optics Spectroscopy and Medical Physics',
					href: '/optics-and-spectroscopy'
				}
			]
		},
		{
			id: '5',
			menu: 'Learning Resources',
			items: [
				{ id: '1', item: 'Module Handbook', href: '/module-handbook' },
				{ id: '2', item: 'Libraries', href: '/library' },
				{ id: '3', item: 'Portfolio', href: '/portfolio' }
			]
		}
	];
</script>

<div
	class={`${show ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'} text-slate-800 transition-colors duration-300 flex items-center justify-between px-5 py-3 w-full fixed z-50 shadow-md`}
>
	<a href="/" class="flex shrink-0 items-center gap-4">
		<img src={logo} alt="Logo Unhas" class="h-12" />
		<div class="flex flex-col">
			<span class="font-semibold text-base leading-tight md:text-lg"
				>Physics | Hasanuddin University</span
			>
			<span class="font-medium text-xs leading-tight text-slate-600 md:text-base"
				>Faculty of Mathematics and Natural Sciences</span
			>
		</div>
	</a>

	<nav class="hidden lg:flex items-center gap-1">
		{#each menus as menu}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="ghost" class="flex items-center gap-1">
                        <span class="font-semibold">
                            {menu.menu}
                        </span>
						<ChevronDown class="h-4 w-4" />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					{#each menu.items as item}
						{#if item.children}
							<DropdownMenu.Sub>
								<DropdownMenu.SubTrigger>{item.item}</DropdownMenu.SubTrigger>
								<DropdownMenu.SubContent>
									{#each item.items as subItem}
										<DropdownMenu.Item href={subItem.href}>{subItem.item}</DropdownMenu.Item>
									{/each}
								</DropdownMenu.SubContent>
							</DropdownMenu.Sub>
						{:else}
							<DropdownMenu.Item href={item.href}>{item.item}</DropdownMenu.Item>
						{/if}
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/each}

		<Button variant="ghost" href="/people" class="font-semibold">People</Button>
		<Button variant="ghost" href="/news" class="font-semibold">News</Button>
		<Button variant="ghost" href="/activities" class="font-semibold">Events</Button>
		<Button variant="ghost" href="/survey" class="font-semibold">Survey</Button>
		<Button variant="ghost" href="/academic-sop" class="font-semibold">Academic SOP</Button>
		<Button variant="ghost" href="/appendix" class="font-semibold">Appendix</Button>
		<Button variant="ghost" href="/about" class="font-semibold">About</Button>
	</nav>

	<div class="lg:hidden">
		<Sheet.Root preventScroll={true}>
			<Sheet.Trigger asChild let:builder>
				<Button builders={[builder]} variant="ghost">
					<Menu />
				</Button>
			</Sheet.Trigger>
			<Sheet.Content class="overflow-auto" side="left">
				<div class="grid py-10 px-5 text-base text-slate-800">
					<Accordion.Root class="w-full">
						{#each menus as menu, i}
							<Accordion.Item value={`item-${i}`} class="border-b">
								<Accordion.Trigger class="font-semibold hover:no-underline"
									>{menu.menu}</Accordion.Trigger
								>
								<Accordion.Content class="pl-4 font-medium">
									{#each menu.items as item}
										<div class="py-2">
											{#if item.children}
												<DropdownMenu.Root>
													<DropdownMenu.Trigger class="flex w-full items-center text-base"
														>{item.item}
														<ChevronDown class="ml-auto h-4 w-4" /></DropdownMenu.Trigger
													>
													<DropdownMenu.Content class="ml-10 w-48">
														{#each item.items as itemChild}
															<DropdownMenu.Item href={itemChild.href}>
																<Sheet.Close class="w-full text-left">
																	{itemChild.item}
																</Sheet.Close>
															</DropdownMenu.Item>
														{/each}
													</DropdownMenu.Content>
												</DropdownMenu.Root>
											{:else}
												<Sheet.Close asChild let:builder>
													<a
														builders={[builder]}
														href={item.href}
														class="block w-full hover:underline">{item.item}</a
													>
												</Sheet.Close>
											{/if}
										</div>
									{/each}
								</Accordion.Content>
							</Accordion.Item>
						{/each}
					</Accordion.Root>
					<div class="mt-4 flex flex-col items-start border-t pt-4">
						<Sheet.Close asChild let:builder>
							<Button
								builders={[builder]}
								variant="link"
								class="h-auto p-2 font-semibold"
								href="/people">People</Button
							>
						</Sheet.Close>
						<Sheet.Close asChild let:builder>
							<Button
								builders={[builder]}
								variant="link"
								class="h-auto p-2 font-semibold"
								href="/news">News</Button
							>
						</Sheet.Close>
						<Sheet.Close asChild let:builder>
							<Button
								builders={[builder]}
								variant="link"
								class="h-auto p-2 font-semibold"
								href="/activities">Events</Button
							>
						</Sheet.Close>
						<Sheet.Close asChild let:builder>
							<Button
								builders={[builder]}
								variant="link"
								class="h-auto p-2 font-semibold"
								href="/survey">Survey</Button
							>
						</Sheet.Close>
						<Sheet.Close asChild let:builder>
							<Button
								builders={[builder]}
								variant="link"
								class="h-auto p-2 font-semibold"
								href="/academic-sop">Academic SOP</Button
							>
						</Sheet.Close>
						<Sheet.Close asChild let:builder>
							<Button
								builders={[builder]}
								variant="link"
								class="h-auto p-2 font-semibold"
								href="/appendix">Appendix</Button
							>
						</Sheet.Close>
						<Sheet.Close asChild let:builder>
							<Button
								builders={[builder]}
								variant="link"
								class="h-auto p-2 font-semibold"
								href="/about">About</Button
							>
						</Sheet.Close>
					</div>
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</div>
