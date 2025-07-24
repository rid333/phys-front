<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { Clock, MoveRight, MoveLeft } from 'lucide-svelte';
	import type { PageData } from './$types';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	export let data: PageData;
	import { PUBLIC_API_URL } from '$env/static/public';
	let pageSize = 10;
	$: currentPage = Number(data.page);
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<header class="relative flex items-center justify-center h-[400px] lg:h-[500px] bg-redUH-600">
	<div class="absolute inset-0"></div>
	<h1 class="relative text-5xl lg:text-7xl text-white font-extrabold tracking-tight">News</h1>
</header>

<div
	class="relative lg:mb-20 -mt-20 lg:-mt-32 z-10 max-w-5xl mx-auto bg-slate-50 p-6 lg:p-16 rounded-t-lg shadow-2xl"
>
	<div class="mb-8">
		<Breadcrumb
			firstMenu="News"
			colorFirstMenu="redUH-600"
			secondMenu=""
			colorSecondMenu=""
			thirdMenu=""
			colorThirdMenu=""
		/>
	</div>

	<div class="space-y-10">
		{#each data.docs as news, i (news.id)}
			<a
				href={`/news/${news.id}`}
				class="block group transition-all duration-300"
				aria-label={`Read more about ${news.title}`}
			>
				<article class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
					<div class="md:col-span-1">
						<img
							src={`${PUBLIC_API_URL}${news.image.sizes.thumbnail.url}`}
							alt={news.title}
							class="rounded-md shadow-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
						/>
					</div>

					<div class="md:col-span-3 flex flex-col">
						<h2
							class="font-bold text-lg lg:text-2xl text-gray-800 group-hover:text-redUH-600 transition-colors"
						>
							{news.title}
						</h2>

						<div
							class="text-xs lg:text-sm inline-flex items-center gap-x-2 text-gray-500 mt-2"
						>
							<Clock size="16px" strokeWidth="1.5px" />
							<span class="italic"
								>Published on {news.createdAt.slice(0, 10).replaceAll('-', '/')}</span
							>
						</div>

						<p class="text-sm lg:text-base text-gray-600 mt-3 flex-grow">
							{news.excerpt}
						</p>

						<div
							class="text-sm lg:text-base font-semibold text-redUH-600 mt-4 flex items-center gap-x-1"
						>
							Read More
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
			href={`/news?limit=${pageSize}&page=${currentPage - 1}`}
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
			href={`/news?limit=${pageSize}&page=${currentPage + 1}`}
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
