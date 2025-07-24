<script lang="ts">
	import { Clock, Users, Link as LinkIcon, BookOpen, Share2 } from 'lucide-svelte';
	import type { PageData } from './$types';
	import Serializer from '$lib/components/Serializer.svelte';
	import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
	export let data: PageData;
	$: ({ judul, content, thumbnail, date, captionGambar, excerpt } = data);
</script>

<svelte:head>
	<meta name="title" content={judul} />
	<meta name="description" content={excerpt} />
	<meta name="image" content={thumbnail} />
	<title>{judul}</title>
</svelte:head>

<div class="bg-slate-50">
	<header class="relative w-full h-[300px] lg:h-[400px]">
		<img src={thumbnail} alt={judul} class="absolute w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-50/10 to-transparent" />
	</header>

	<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 px-6 lg:px-8 -mt-32 pb-16">
		<main class="lg:col-span-2 relative z-10">
			<article class="bg-white p-8 lg:p-12 rounded-lg shadow-xl">
				<div class="text-sm lg:text-base mb-6">
					<Breadcrumb
						firstMenu="News"
						firstMenuLink="/news"
						colorFirstMenu="redUH-600"
						secondMenu=""
						colorSecondMenu=""
						thirdMenu=""
						colorThirdMenu=""
					/>
				</div>
				
				<div class="border-b border-gray-200 pb-6">
					<h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
						{judul}
					</h1>
					<p class="inline-flex items-center gap-x-2 text-xs lg:text-base italic mt-4 text-gray-500">
						<Clock size="18px" strokeWidth="1.5px" />
						This was published on {date.slice(0, 10).replaceAll('-', '/')}
					</p>
				</div>

				<div
					class="prose max-w-none prose-lg prose-p:text-gray-950 prose-p:font-medium prose-headings:font-bold prose-headings:text-gray-800 prose-a:text-redUH-600 hover:prose-a:underline mt-8"
				>
					{#if captionGambar}
						<p class="text-center italic text-gray-950 !-mt-2 !mb-8 text-base">
							{captionGambar}
						</p>
					{/if}
                    <Serializer richText={content} />
				</div>
			</article>
		</main>

<aside class="hidden lg:block sticky -top-10 h-fit space-y-6 pt-36">
	<div class="bg-slate-100 p-6 rounded-lg border border-slate-200">
		<h3 class="font-bold text-slate-800 mb-4 text-lg inline-flex items-center gap-x-2">
			<Share2 size="20" class="text-slate-600" />
			Share this Article
		</h3>
		<div class="flex items-center space-x-2">
			<a href="#share-twitter" title="Share on X" class="social-share-link bg-[#1DA1F2] hover:bg-[#0c84d1]">
				<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
			</a>
			<a href="#share-facebook" title="Share on Facebook" class="social-share-link bg-[#1877F2] hover:bg-[#166fe5]">
				<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
			</a>
			<a href="#share-linkedin" title="Share on LinkedIn" class="social-share-link bg-[#0A66C2] hover:bg-[#004182]">
				<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
			</a>
		</div>
	</div>

	<div class="bg-blueUH-50 p-6 rounded-lg">
		<h3 class="font-bold text-blueUH-800 mb-3 text-lg inline-flex items-center gap-x-2">
			<Users size="20" class="text-blueUH-600" />
			Alumni Surveys
		</h3>
		<div class="flex flex-col space-y-1.5">
			<a href="https://forms.gle/Shez1mXV3V9cQA6g7" target="_blank" class="sidebar-link">Tracer Study</a>
			<a href="https://forms.gle/Qm48tcG7mbb9cvrk6" target="_blank" class="sidebar-link">User Survey</a>
			<a href="https://forms.gle/7u3njyzhf1HrrHei9" target="_blank" class="sidebar-link">Student Satisfaction</a>
		</div>
	</div>

	<div class="bg-darkgreenUH-50 p-6 rounded-lg">
		<h3 class="font-bold text-darkgreenUH-800 mb-3 text-lg inline-flex items-center gap-x-2">
			<LinkIcon size="20" class="text-darkgreenUH-600" />
			Quick Links
		</h3>
		<div class="flex flex-col space-y-1.5">
			<a href="http://lms.unhas.ac.id/" target="_blank" class="sidebar-link">LMS Unhas</a>
			<a href="http://sim.unhas.ac.id/" target="_blank" class="sidebar-link">SIM Unhas</a>
			<a href="http://www.unhas.ac.id/mipa/" target="_blank" class="sidebar-link">FMIPA Unhas</a>
		</div>
	</div>

	<div class="bg-yellowUH-50 p-6 rounded-lg">
		<h3 class="font-bold text-yellowUH-900 mb-3 text-lg inline-flex items-center gap-x-2">
			<BookOpen size="20" class="text-yellowUH-800" />
			E-Journals
		</h3>
		<div class="flex flex-col space-y-1.5">
			<a href="http://journal.unhas.ac.id/" target="_blank" class="sidebar-link">Unhas E-Journals</a>
			<a href="http://prl.aps.org/" target="_blank" class="sidebar-link">APS Journals</a>
			<a href="http://www.iop.org/" target="_blank" class="sidebar-link">IOP Journals</a>
		</div>
	</div>
</aside>
	</div>
</div>

<style>
	.sidebar-link {
		@apply text-gray-700 font-medium text-base hover:text-redUH-600 hover:underline transition-colors;
	}
	.social-share-link {
		@apply w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110;
	}
</style>
