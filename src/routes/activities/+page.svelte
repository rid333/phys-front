<script lang="ts">
	import { Calendar, MapPin, MoveLeft, MoveRight } from 'lucide-svelte';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const pageName = 'Events';
	import { PUBLIC_API_URL } from '$env/static/public';

	let pageSize = 2;
	$: currentPage = Number(data.page);
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<header class="relative flex items-center justify-center h-[400px]">
	<div class="absolute inset-0 bg-darkgreenUH-600" />
	<h1 class="relative text-5xl lg:text-7xl text-white font-extrabold tracking-tight">
		{pageName}
	</h1>
</header>

<div
	class="relative lg:mb-20 -mt-20 lg:-mt-32 z-10 max-w-5xl mx-auto bg-slate-50 p-6 lg:p-16 rounded-t-lg shadow-2xl"
>
	<div class="mb-8">
		<Breadcrumb
			firstMenu={pageName}
			colorFirstMenu="darkgreenUH-600"
			secondMenu=""
			colorSecondMenu=""
			thirdMenu=""
			colorThirdMenu=""
		/>
	</div>

	<div class="space-y-10">
		{#each data.docs as event, i (event.id)}
			<a
				href={`/activities/${event.id}`}
				class="block group transition-all duration-300"
				aria-label={`View details for ${event.title}`}
			>
				<article class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
					<div class="md:col-span-1">
						<img
							src={`${PUBLIC_API_URL}${event.image.sizes.thumbnail.url}`}
							alt={event.title}
							class="rounded-md shadow-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
						/>
					</div>

					<div class="md:col-span-3 flex flex-col">
						<h2
							class="font-bold text-lg lg:text-2xl text-gray-800 group-hover:text-darkgreenUH-600 transition-colors"
						>
							{event.title}
						</h2>

						<div class="space-y-2 text-sm lg:text-base text-gray-500 mt-3">
							<div class="flex items-center gap-x-2">
								<Calendar size="16px" strokeWidth="1.5px" />
								<span>{event.createdAt.slice(0, 10).replaceAll('-', '/')} at {event.time}</span>
							</div>
							<div class="flex items-center gap-x-2">
								<MapPin size="16px" strokeWidth="1.5px" />
								<span>{event.location}</span>
							</div>
						</div>

						<div class="flex-grow" />

						<div
							class="text-sm lg:text-base font-semibold text-darkgreenUH-600 mt-4 flex items-center gap-x-1"
						>
							View Event
							<MoveRight
								class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
							/>
						</div>
					</div>
				</article>
			</a>
			{#if i < data.docs.length - 1}
				<hr class="border-gray-200" />
			{/if}
		{/each}
	</div>

	<div class="flex justify-between items-center mt-16">
		<a
			class="pagination-btn"
			href={`/activities?limit=${pageSize}&page=${currentPage - 1}`}
			aria-disabled={!data.hasPrevPage}
		>
			<MoveLeft class="w-5 h-5" />
			Previous
		</a>
		<span class="text-sm font-medium text-gray-600">
			Page {currentPage} of {data.totalPages}
		</span>
		<a
			class="pagination-btn"
			href={`/activities?limit=${pageSize}&page=${currentPage + 1}`}
			aria-disabled={!data.hasNextPage}
		>
			Next
			<MoveRight class="w-5 h-5" />
		</a>
	</div>
</div>

<style>
	.pagination-btn {
		@apply inline-flex items-center gap-x-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors;
	}
	/* This makes the disabled links look and act disabled */
	.pagination-btn[aria-disabled='true'] {
		@apply opacity-50 pointer-events-none;
	}
</style>
