<script lang="ts">
    import { register } from 'swiper/element/bundle';
    import { Button } from '$lib/components/ui/button';
    import { Separator } from "$lib/components/ui/separator";
    import { Play, ArrowRight, ExternalLink, Clock } from 'lucide-svelte';
    import type { PageData } from './$types';
    register();
    export let data: PageData;
    $: ({ images, news, activities, excerptElins, excerptMaterial, excerptOptik, excerptTeori  } = data);

    import {PUBLIC_BASE_URL as API_URL} from  '$env/static/private';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<!-- Image Carousel -->
<div class="carousel">
    <swiper-container
        slides-per-view={1}
        centered-slides={true}
        autoplay={{
            delay:10000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={{
            clickable: true,
        }}
        effect='fade'
        class="relative"
    >
        <div class='absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10'></div>
        <div class="flex flex-col gap-y-5 lg:gap-y-6 absolute top-1/3 left-24 text-white z-10 w-4/6 lg:w-3/5">
            <p class="text-3xl lg:text-6xl font-bold">Welcome to Hasanuddin University Department of Physics</p>
            <p class="text-lg lg:text-2xl font-medium text-slate100"><i>"Embark on a journey to unveil the true nature of reality, from the grandest cosmic scales to the tiniest subatomic particles"</i></p>
            <Button class='text-sm lg:text-base w-fit bg-opacity-75 font-medium bg-redUH-500 text-white hover:bg-redUH-600 active:bg-redUH-700 rounded-none'>
                <Play class='h-5 w-5 mr-2 font-light' strokeWidth=2 />Watch our Introduction Video
            </Button>
        </div>
        {#each images as image}
            <swiper-slide>
                <img src={image} alt="img" class="w-screen h-screen object-cover"/>
            </swiper-slide>
        {/each}
    </swiper-container>
</div>


<!-- Recent News  -->
<div class="py-20 bg-slate-50 h-full w-full relative">
    <div class="absolute font-extrabold text-[11rem] text-redUH-200 top-0 opacity-10">Recent News</div>
    <div class="flex flex-col items-center m-auto text-white max-w-7xl">
        <p class="self-start text-4xl lg:text-5xl font-bold scroll-m-20 p-3 mb-10 text-redUH-500 z-0">Recent News</p>
        <div class="flex flex-col gap-y-10 lg:grid lg:grid-cols-3 lg:gap-x-20 z-0 mb-10">
            {#each news as { id, judul, excerpt, thumbnail, date }}
                <div class="antialiased text-black">
                    <div class="flex flex-col justify-center items-center">
                        <div>
                            <img src={thumbnail} alt="Thumbnail" class="w-[350px] h-[350px] object-cover object-center shadow-md">
                        </div>    
                        <div class="bg-white p-5 space-y-4 shadow-lg w-[330px] -mt-10 z-0">
                            <div class="text-sm">
                                <div class="flex items-center gap-x-2 text-gray-600 font-semibold tracking-wider">
                                    <Clock size=18px />
                                    {date.slice(0,10).replaceAll("-", "/")}
                                </div>  
                            </div>
                            <h4 class="mt-1 text-lg font-semibold uppercase leading-tight truncate">{judul}</h4>
                            <div class="mt-1 text-base min-h-28">
                                {excerpt}
                            </div>
                            <div class="mt-1 text-white text-base font-medium">
                                <a href="/news/{id}" class="rounded-none bg-redUH-400 px-2 py-2 hover:bg-redUH-500 transition ease-in-out">
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <a href="/news" class="text-redUH-500 font-bold text-xl flex items-center hover:underline cursor-pointer">More News<ArrowRight class='ml-2 h-6 w-6' strokeWidth=3 /></a>
    </div>
</div>

<!-- Events -->
<div class="py-20 bg-slate-100 h-full w-full relative"> 
    <div class="absolute font-extrabold text-[10rem] text-darkgreenUH-100 top-0 opacity-10">Upcoming Events</div>
    <div class="flex flex-col items-center m-auto max-w-7xl">
        <p class="self-start text-4xl lg:text-5xl font-bold scroll-m-20 p-3 mb-10 text-darkgreenUH-500 z-0">Upcoming Events</p>
        <div class="flex flex-col gap-y-10 lg:grid lg:grid-cols-3 lg:gap-x-20 z-0 text-white mb-10">
            {#each activities as {id, judul, thumbnail, date, time, location}}
                <a href={`/activities/${id}`} class="flex flex-col shadow-xl">
                    <div class="relative">
                        <div class="absolute w-16 h-16 text-lg font-extrabold bg-darkgreenUH-500 top-8 left-8 flex justify-center items-center">{date.slice(5,7)} <br>{date.slice(8,10)}</div>
                        <img src={thumbnail} alt=" random imge" class="w-[350px] h-[250px] object-cover object-center">
                    </div>
                    <div class="bg-darkgreenUH-500 w-[350px] h-[200px] p-5 flex flex-col gap-y-4">
                        <a href="/activities/{id}" class="mt-1 text-xl font-bold uppercase leading-tight hover:underline">{judul}</a>
                        <p><i class="font-bold">Date</i>: {date.slice(0,10).replaceAll("-", "/")} {time}</p>
                        <p><i class="font-bold">Location</i>: {location}</p>
                    </div>
                </a>
            {/each}
        </div>
        <a href="/activities" class="text-darkgreenUH-500 font-bold text-xl flex items-center hover:underline cursor-pointer">More Events<ArrowRight class='ml-2 h-6 w-6' strokeWidth=3 /></a>
    </div>
</div>


<!-- Graduate and Undergraduate Program --> 
<div class="py-5 lg:py-20 bg-blueUH-500 text-white h-full w-full relative">
    <div class="flex lg:justify-center items-center gap-x-14 mx-auto p-14 lg:p-0 max-w-7xl">
        <div class="flex flex-col gap-y-8 mx-auto justify-center lg:w-2/5 z-0">
            <div class="flex flex-col gap-y-4">
                <h2 class="scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight transition-colors first:mt-0">
                    Undergraduate Program
                </h2>
                <p class="text-base font-medium">Explore the basics of the universe in our undergrad physics program. Learn about matter, energy, and forces – from everyday to quantum stuff. Get hands-on and think critically for a future in science.</p>
                <a target="_parent" href="/undergraduate-program">
                    <Button class='w-fit font-semibold hover:none bg-slate-50 active:bg-slate-300 transition text-blueUH-500 rounded-none'>
                        Learn More <ArrowRight class='ml-2 h-5 w-5' strokeWidth=2 />
                    </Button>
                </a>
            </div>
            <Separator class='bg-white'/>
            <div class="flex flex-col gap-y-4">
                <h2 class="scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight transition-colors first:mt-0">
                    Graduate Program
                </h2>
                <p class="text-base font-medium">Dive into advanced theories, focused research, and practical applications. Customize your studies in theory, experiments, or real-world applications. Join a community of researchers and get ready to make a mark in the scientific field.</p>
                <a target="_blank" href="https://doctorphys.sci.unhas.ac.id">
                    <Button class='w-fit font-semibold hover:none bg-slate-50 active:bg-slate-300 transition text-blueUH-500 rounded-none'>
                        Learn More <ArrowRight class='ml-2 h-5 w-5' strokeWidth=2 />
                    </Button>
                </a>
            </div>
        </div>
        <div class="hidden lg:grid grid-cols-3 gap-4 w-3/5 z-0">
            <div class="overflow-hidden">
                <img src={`${API_URL}/media/event_e6a7023d9a.jpg`} alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover">
            </div>
            <div class="overflow-hidden col-span-2">
                <img src={`${API_URL}/media/mews3.jpg`} alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover">
            </div>
            <div class="overflow-hidden col-span-2 cursor-pointer">
                <img src={`${API_URL}/media/tamanfisika-1024x682.jpg`}  alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover">
            </div>
            <div class="overflow-hidden cursor-pointer">
                <img src={`${API_URL}/media/DeptFisika1.jpg`} alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover">
            </div>
        </div>
    </div>
</div>


<!-- Research Areas -->
<div class="pt-20 lg:py-20 bg-slate-100 h-full w-full relative">
    <div class="absolute font-extrabold text-[5rem] lg:text-[11rem] text-slate-300 top-0 opacity-70">Research Areas</div>
    <div class="flex flex-col lg:gap-y-10 items-center m-auto text-white max-w-7xl">
        <h1 class="text-3xl lg:text-4xl font-bold scroll-m-20 p-5 mb-20 bg-redUH-400 z-0">Research Areas</h1>
        <div class="flex items-center justify-center">
            <div class="w-2/5 hidden lg:block overflow-hidden z-0">
                <img src={`${API_URL}/media/teoridepan-1024x682.jpg`} alt="" class="h-[800px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
            </div>
            <div class="lg:w-3/5 flex flex-col justify-center bg-redUH-400 p-14 gap-y-5 lg:gap-y-7 lg:-ml-20 z-0">
                <h1 class="text-3xl lg:text-5xl font-bold">Theoretical and Computation</h1>
                <p class="font-medium text-base lg:text-lg leading-relaxed lg:leading-loose">{excerptTeori}</p>
                <a href="/theoretical-and-computation" class="bg-white p-4 w-fit hover:scale-110 transition ease-in-out duration-200"><ExternalLink color='#D7251F' strokeWidth=2 /></a>
            </div>
        </div>
        <div class="flex flex-row-reverse justify-center items-center">
            <div class="w-2/5 hidden lg:block overflow-hidden z-0">
                <img src={`${API_URL}/media/material.jpg`} alt="" class="h-[800px] hover:scale-110 transition duration-500 cursor-pointer object-cover">
            </div>
            <div class="lg:w-3/5 flex flex-col justify-center bg-darkgreenUH-500 p-14 gap-y-5 lg:gap-y-7 lg:-mr-20 z-0">
                <h1 class="text-3xl lg:text-5xl font-bold">Material and Energy</h1>
                <p class="font-medium text-base lg:text-lg leading-relaxed lg:leading-loose">{excerptMaterial}</p>
                <a href="/material-and-energy" class="bg-white p-4 w-fit hover:scale-110 transition ease-in-out duration-200"><ExternalLink color='#AEA04E' strokeWidth=2 /></a>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <div class="w-2/5 hidden lg:block overflow-hidden z-0">
                <img src={`${API_URL}/media/elins-1024x682.jpg`} alt="Lab Elins" class="h-[800px] hover:scale-110 transition duration-500 cursor-pointer object-cover object-left">
            </div>
            <div class="lg:w-3/5 flex flex-col justify-center bg-blueUH-500 p-14 gap-y-5 lg:gap-y-7 lg:-ml-20 z-0">
                <h1 class="text-3xl lg:text-5xl font-bold">Electronics and Instrumentation</h1>
                <p class="font-medium text-base lg:text-lg leading-relaxed lg:leading-loose">{excerptElins}</p>
                <a href="/electronics-and-instrumentation" class="bg-white p-4 w-fit hover:scale-110 transition ease-in-out duration-200"><ExternalLink color='#010035' strokeWidth=2 /></a>
            </div>
        </div>
        <div class="flex flex-row-reverse justify-center items-center">
            <div class="w-2/5 hidden lg:block overflow-hidden z-0">
                <img src={`${API_URL}/media/optik.jpg`} alt="" class="h-[800px] object-left hover:scale-110 transition duration-500 cursor-pointer object-cover">
            </div>
            <div class="lg:w-3/5 flex flex-col justify-center bg-yellowUH-900 p-14 gap-y-5 lg:gap-y-7 lg:-mr-20 z-0">
                <h1 class="text-3xl lg:text-5xl font-bold">Optics and Spectroscopy</h1>
                <p class="font-medium text-base lg:text-lg leading-relaxed lg:leading-loose">{excerptOptik}</p>
                <a href="/optics-and-spectroscopy" class="bg-white p-4 w-fit hover:scale-110 transition ease-in-out duration-200"><ExternalLink color='#0D1F0F' strokeWidth=2 /></a>
            </div>
        </div>
    </div>
</div>
