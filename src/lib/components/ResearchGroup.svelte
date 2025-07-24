<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import { Send, Users, BookOpen } from 'lucide-svelte'; // Added more icons
	import Breadcrumb from './ui/Breadcrumb.svelte';
	import Serializer from './Serializer.svelte';
	export let content: any[];
	export let thesis: string[];
	export let dosen: any[];
	export let pageName: string;
	export let color: string; // e.g., 'redUH-600'
	export let topImage: string;
	import { PUBLIC_API_URL } from '$env/static/public';

	// IMPORTANT NOTE on dynamic colors:
	// The class names `bg-${color}` or `text-${color}` will NOT work in a production build
	// due to Tailwind's tree-shaking (purging). I have used static classes like 'text-redUH-600'
	// as an example. For a truly dynamic system, you would need to use CSS variables or
	// map color names to full class strings.
	const themeColorClass = 'text-redUH-600'; // Using a static example for safety
	const themeBgClass = 'bg-redUH-600';
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<header class="relative flex items-center justify-center h-[400px] lg:h-[500px]">
	<h1 class="text-5xl lg:text-7xl absolute text-white font-bold z-10 text-center">
		{pageName}
	</h1>
	<img class="w-full h-full object-cover brightness-50" src={topImage} alt={pageName} />
</header>

<div class="max-w-7xl mx-auto -mt-20 lg:-mt-32 relative z-10">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 p-4 lg:p-0">
		<main class="lg:col-span-2 bg-white p-6 lg:p-12 rounded-lg shadow-xl">
			<div class="mb-8 text-sm lg:text-base">
				<Breadcrumb
					firstMenu="Research Areas"
					colorFirstMenu="black"
					secondMenu={pageName}
					colorSecondMenu={color}
					thirdMenu=""
					colorThirdMenu=""
				/>
			</div>

			<article class="prose prose-p:text-gray-900 prose-p:font-medium prose-lg max-w-none">
				<Serializer richText={content} />
			</article>

			<div class="mt-12">
				<Accordion.Root class="w-full border rounded-lg">
					<Accordion.Item value="item-1">
						<Accordion.Trigger class={`w-full p-4 font-bold text-left ${themeColorClass}`}>
							Thesis Titles in {pageName}
						</Accordion.Trigger>
						<Accordion.Content class="p-4 pt-0">
							<ul class="list-disc list-inside space-y-2 text-gray-900">
								{#each thesis as judul}
									<li>{@html judul}</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</div>
		</main>

		<aside class="lg:col-span-1 h-fit lg:sticky lg:top-24">
			<div class="bg-white p-6 rounded-lg shadow-xl">
				<h3 class={`text-xl font-bold ${themeColorClass} mb-6 flex items-center gap-x-2`}>
					<Users />
					Related Staff
				</h3>
				<div class="space-y-6">
					{#each dosen as item}
						<a href={`/people/${item.id}`} class="group flex items-center gap-x-4">
							<img
								class="w-16 h-16 rounded-full object-cover"
								src={`${PUBLIC_API_URL}${item.photo.url}`}
								alt={item.name}
							/>
							<div>
								<h4 class="font-bold text-gray-800 group-hover:text-redUH-600 transition-colors">
									{item.name}
								</h4>
								<p class="text-sm text-gray-500">{item.position}</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</aside>
	</div>
</div>
