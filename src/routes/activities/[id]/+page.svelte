<script lang="ts">
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import { Calendar, MapPin, BookOpen } from 'lucide-svelte';
	import type { PageData } from './$types';
	import Serializer from '$lib/components/Serializer.svelte';
	export let data: PageData;
	$: ({ id, judul, thumbnail, date, time, location, description } = data);

	// A little helper to format the date nicely
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<title>{judul}</title>
</svelte:head>

<div class="bg-slate-50">
	<header class="relative w-full h-[400px] lg:h-[500px] text-white">
		<img src={thumbnail} alt={judul} class="absolute w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
		<div class="relative h-full flex flex-col justify-end max-w-7xl mx-auto p-6 lg:p-12">
			<!-- <Breadcrumb -->
			<!-- 	firstMenu="Events" -->
			<!-- 	firstMenuLink="/activities" -->
			<!-- 	colorFirstMenu="white" -->
			<!-- 	secondMenu="" -->
			<!-- 	thirdMenu="" -->
			<!-- /> -->
			<h1 class="text-4xl lg:text-6xl font-extrabold tracking-tight mt-4 leading-tight">
				{judul}
			</h1>
			<div class="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 border-t border-white/20 pt-4">
				<div class="flex items-center gap-x-2 text-sm lg:text-base">
					<Calendar size="18" />
					<span>{formattedDate} at {time}</span>
				</div>
				<div class="flex items-center gap-x-2 text-sm lg:text-base">
					<MapPin size="18" />
					<span>{location}</span>
				</div>
			</div>
		</div>
	</header>

	<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 px-6 lg:px-8 py-16">
		<main class="lg:col-span-2">
			<article
				class="prose max-w-none prose-lg prose-headings:font-bold prose-headings:text-gray-800 prose-a:text-redUH-600 hover:prose-a:underline"
			>
				<h2>About this Event</h2>
				<Serializer richText={description} />
			</article>
		</main>

		<aside class="hidden lg:block sticky top-24 h-fit space-y-6">
			<div class="bg-white border p-6 rounded-lg">
				<h3 class="font-bold text-blueUH-800 mb-3 text-lg">Alumni Surveys</h3>
				<div class="flex flex-col space-y-1">
					<a href="/" class="sidebar-link">Tracer Study Alumni</a>
					<a href="/" class="sidebar-link">Survey Pengguna</a>
					<a href="/" class="sidebar-link">Survey Kepuasan Mahasiswa</a>
				</div>
			</div>
			<div class="bg-white border p-6 rounded-lg">
				<h3 class="font-bold text-darkgreenUH-800 mb-3 text-lg">Quick Links</h3>
				<div class="flex flex-col space-y-1">
					<a href="/" class="sidebar-link">LMS Unhas</a>
					<a href="/" class="sidebar-link">SIM Unhas</a>
					<a href="/" class="sidebar-link">FMIPA Unhas</a>
				</div>
			</div>
			<div class="bg-white border p-6 rounded-lg">
				<h3 class="font-bold text-yellowUH-900 mb-3 text-lg">E-Journals</h3>
				<div class="flex flex-col space-y-1">
					<a href="/" class="sidebar-link">Unhas E-Journals</a>
					<a href="/" class="sidebar-link">APS Journals</a>
					<a href="/" class="sidebar-link">IOP Journals</a>
				</div>
			</div>
		</aside>
	</div>
</div>

<style>
	/* You can add this to a global stylesheet or keep it here */
	.sidebar-link {
		@apply text-gray-700 font-medium text-base py-1 rounded-md transition-all duration-200 hover:text-redUH-600 hover:underline;
	}
</style>
