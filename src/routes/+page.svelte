<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Play, ArrowRight, ExternalLink, Clock, Calendar, Pin } from 'lucide-svelte';
	import Sarjana from '$lib/images/s1.png';
	import Master from '$lib/images/s2.png';
	import Doktor from '$lib/images/s3.png';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Tabs from '$lib/components/ui/tabs';
	import type { PageData } from './$types';
	register();
	export let data: PageData;
	$: ({
		images,
		news,
		activities,
		excerptElins,
		excerptMaterial,
		excerptOptik,
		excerptTeori
	} = data);
	import { PUBLIC_API_URL } from '$env/static/public';
	const pageName = 'Department of Physics | Hasanuddin University';

	const accreditations = [
		{
			id: '1',
			icon: Sarjana,
			jenjang: 'Sarjana/Bachelor (S1)',
			akreditasi: 'Internationally Accredited by ASIIN'
		},
		{
			id: '2',
			icon: Master,
			jenjang: 'Magister/Master (S2)',
			akreditasi: 'Accredited with "Unggul"'
		},
		{
			id: '3',
			icon: Doktor,
			jenjang: 'Doktor/Doctor (S3)',
			akreditasi: 'Accredited with "Baik"'
		}
	];
</script>

<svelte:head>
	<meta name="title" content={pageName} />
	<meta
		name="description"
		content="Welcome to Hasanuddin University Department of Physics. Embark on a journey to unveil the true nature of reality, from the grandest cosmic scales to the tiniest subatomic particles"
	/>
	<title>{pageName}</title>
</svelte:head>

<div class="relative w-full h-screen">
	<swiper-container
		slides-per-view={1}
		centered-slides={true}
		autoplay={{
			delay: 8000,
			disableOnInteraction: false
		}}
		pagination={{
			clickable: true
		}}
		navigation={{
			clickable: true
		}}
		effect="fade"
		class="h-full w-full"
	>
		{#each images as image}
			<swiper-slide>
				<img src={image} alt="Hasanuddin University Physics Department" class="w-full h-full object-cover" />
			</swiper-slide>
		{/each}
	</swiper-container>
	<div
		class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 z-10"
	></div>
	<div
		class="absolute inset-0 flex flex-col justify-center items-start z-20 p-8 md:p-16 lg:p-24"
	>
		<div class="max-w-3xl text-white">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
				Department of Physics
			</h1>
			<p class="text-lg md:text-xl lg:text-2xl font-light text-slate-200 mb-8 italic">
				"Embark on a journey to unveil the true nature of reality, from the grandest cosmic scales
				to the tiniest subatomic particles."
			</p>
			<Dialog.Root>
				<Dialog.Trigger
					class="flex items-center px-6 py-3 text-base lg:text-lg font-semibold bg-redUH-500 text-white hover:bg-redUH-600 active:bg-redUH-700 transition-transform hover:scale-105"
				>
					<Play class="h-6 w-6 mr-2" />
					Watch Introduction
				</Dialog.Trigger>
				<Dialog.Content class="h-auto lg:max-w-4xl p-0 border-0">
					<iframe
						title="Introduction Video"
						class="w-full aspect-video"
						src="https://www.youtube.com/embed/bLlW7eyB3cQ?si=j9D5Nlk-HkEE6auE"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	</div>
</div>


<section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800">Our Internationally Recognized Programs</h2>
            <p class="text-lg text-gray-600 font-medium font-medium mt-2">Committed to excellence in education and research.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each accreditations as item (item.id)}
                <div class="bg-slate-50 border border-slate-200 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <img src={item.icon} class="w-24 h-24 mb-4" alt="{item.jenjang} Accreditation" />
                    <h3 class="text-xl font-semibold text-blueUH-800">{item.jenjang}</h3>
                    <p class="text-base text-gray-700 mt-2">{item.akreditasi}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<section class="bg-slate-50 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800">Latest Updates</h2>
            <p class="text-lg text-gray-600 font-medium mt-2">Stay informed with the latest news and upcoming events from our department.</p>
        </div>

        <div class="grid lg:grid-cols-3 lg:gap-12">
            <div class="lg:col-span-2 mb-12 lg:mb-0">
                <h3 class="text-2xl font-bold text-redUH-600 mb-6">Recent News</h3>
                {#if news && news.length > 0}
                    {@const featuredNews = news[0]}
                    <a href="/news/{featuredNews.id}" class="block group">
                        <div class="bg-white shadow-lg overflow-hidden">
                            <img src={featuredNews.thumbnail} alt={featuredNews.judul} class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div class="p-6">
                                <p class="text-sm text-gray-500 flex items-center gap-2 mb-2"><Clock size="16" /> {new Date(featuredNews.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                <h4 class="text-xl font-bold text-gray-800 group-hover:text-redUH-600 transition-colors">{featuredNews.judul}</h4>
                                <p class="text-gray-600 font-medium mt-2 line-clamp-3">{featuredNews.excerpt}</p>
                            </div>
                        </div>
                    </a>
                {/if}
            </div>

            <div>
                <h3 class="text-2xl font-bold text-darkgreenUH-600 mb-6">Upcoming Events</h3>
                 <div class="space-y-4">
                    {#each activities as event (event.id)}
                        <a href="/activities/{event.id}" class="block bg-white p-4 shadow-md hover:shadow-lg transition-shadow">
                             <p class="font-bold text-gray-800">{event.judul}</p>
                             <div class="text-sm font-medium text-gray-500 mt-1 flex flex-col gap-1">
                                <span class="flex items-center gap-2"><Calendar size="14"/> {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} at {event.time}</span>
                                <span class="flex items-center gap-2"><Pin size="14"/> {event.location}</span>
                             </div>
                        </a>
                    {:else}
                         <p class="text-gray-500">No upcoming events at this time.</p>
                    {/each}
                 </div>
                 <div class="mt-8 text-center">
                    <Button href="/activities" variant="link" class="text-darkgreenUH-600 font-semibold">View All Events <ArrowRight class="ml-2 h-4 w-4" /></Button>
                 </div>
            </div>
        </div>
    </div>
</section>

<section class="py-16 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
            <a href="/undergraduate-program" class="relative group block overflow-hidden">
                <img src={`${PUBLIC_API_URL}/media/tamanfisika.jpg`} alt="Undergraduate Program" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-blueUH-900/80 to-transparent">
                     <h3 class="text-3xl font-bold text-white">Undergraduate Program</h3>
                     <p class="text-slate-200 mt-2 mb-4">Explore the fundamental principles of the universe and build a strong foundation for a career in science and technology.</p>
                     <div class="text-white font-semibold flex items-center group-hover:underline">Learn More <ArrowRight class="ml-2 h-5 w-5"/></div>
                </div>
            </a>
            <a href="https://doctorphys.sci.unhas.ac.id" target="_blank" class="relative group block overflow-hidden">
                <img src={`${PUBLIC_API_URL}/media/mews3.jpg`} alt="Graduate Program" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div class="relative w-full h-full p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-blueUH-900/80 to-transparent">
                     <h3 class="text-3xl font-bold text-white">Graduate Programs</h3>
                     <p class="text-slate-200 mt-2 mb-4">Advance your knowledge with specialized research and coursework in our Master and Doctoral programs.</p>
                     <div class="text-white font-semibold flex items-center group-hover:underline">Explore S2 & S3 <ExternalLink class="ml-2 h-5 w-5"/></div>
                </div>
            </a>
        </div>
    </div>
</section>


<section class="bg-slate-100 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800">Our Research Areas</h2>
            <p class="text-lg text-gray-600 font-medium mt-2">Pioneering discoveries across the spectrum of modern physics.</p>
        </div>

        <Tabs.Root value="theory" class="w-full">
            <Tabs.List class="grid w-full grid-cols-2 lg:grid-cols-4 items-center justify-center text-center">
                <Tabs.Trigger value="theory">
                    <span class="font-semibold">
                        Theoretical & Computation
                    </span>
                </Tabs.Trigger>
                <Tabs.Trigger value="material">
                    <span class="font-semibold">
                        Material & Energy
                    </span>
                </Tabs.Trigger>
                <Tabs.Trigger value="elins">
                    <span class="font-semibold">
                        Electronics & Instrumentation
                    </span>
                </Tabs.Trigger>
                <Tabs.Trigger value="optics">
                    <span>
                        Optics & Spectroscopy
                    </span>
                </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="theory" class="bg-white mt-8 p-8 lg:p-12">
                <div class="grid lg:grid-cols-5 gap-8 items-center">
                    <div class="lg:col-span-2">
                        <img src={`${PUBLIC_API_URL}/media/teoridepan-1024x682.jpg`} alt="Theoretical and Computation" class="w-full h-full object-cover shadow-lg" />
                    </div>
                    <div class="lg:col-span-3">
                        <h3 class="text-2xl font-bold text-redUH-600 mb-4">Theoretical and Computation</h3>
                        <p class="text-gray-700 leading-relaxed font-medium">{excerptTeori}</p>
                        <Button href="/theoretical-and-computation" class="mt-6">Explore Group <ArrowRight class="ml-2 h-4 w-4"/></Button>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="material" class="bg-white mt-8 p-8 lg:p-12">
                 <div class="grid lg:grid-cols-5 gap-8 items-center">
                    <div class="lg:col-span-2">
                        <img src={`${PUBLIC_API_URL}/media/material.jpg`} alt="Material and Energy" class="w-full h-full object-cover shadow-lg" />
                    </div>
                    <div class="lg:col-span-3">
                        <h3 class="text-2xl font-bold text-darkgreenUH-600 mb-4">Material and Energy</h3>
                        <p class="text-gray-700 leading-relaxed font-medium">{excerptMaterial}</p>
                        <Button href="/material-and-energy" class="mt-6">Explore Group <ArrowRight class="ml-2 h-4 w-4"/></Button>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="elins" class="bg-white mt-8 p-8 lg:p-12">
                 <div class="grid lg:grid-cols-5 gap-8 items-center">
                    <div class="lg:col-span-2">
                        <img src={`${PUBLIC_API_URL}/media/elins-1024x682.jpg`} alt="Electronics and Instrumentation" class="w-full h-full object-cover shadow-lg" />
                    </div>
                    <div class="lg:col-span-3">
                        <h3 class="text-2xl font-bold text-blueUH-600 mb-4">Electronics and Instrumentation</h3>
                        <p class="text-gray-700 leading-relaxed font-medium">{excerptElins}</p>
                        <Button href="/electronics-and-instrumentation" class="mt-6">Explore Group <ArrowRight class="ml-2 h-4 w-4"/></Button>
                    </div>
                </div>
            </Tabs.Content>
            <Tabs.Content value="optics" class="bg-white mt-8 p-8 lg:p-12">
                 <div class="grid lg:grid-cols-5 gap-8 items-center">
                    <div class="lg:col-span-2">
                        <img src={`${PUBLIC_API_URL}/media/optik1.jpg`} alt="Optics and Spectroscopy" class="w-full h-full object-cover shadow-lg" />
                    </div>
                    <div class="lg:col-span-3">
                        <h3 class="text-2xl font-bold text-yellowUH-900 mb-4">Optics and Spectroscopy</h3>
                        <p class="text-gray-700 leading-relaxed font-medium">{excerptOptik}</p>
                        <Button href="/optics-and-spectroscopy" class="mt-6">Explore Group <ArrowRight class="ml-2 h-4 w-4"/></Button>
                    </div>
                </div>
            </Tabs.Content>
        </Tabs.Root>
    </div>
</section>
