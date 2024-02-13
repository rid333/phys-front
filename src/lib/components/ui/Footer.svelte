<script lang="ts">
    import logoputih from '$lib/images/logoputih.png';
    import {Facebook, Twitter, Instagram, Youtube} from 'lucide-svelte';
    import { Separator } from "$lib/components/ui/separator";
</script>

<footer class="flex flex-col gap-y-8 bg-[#010035] text-slate-400 text-base lg:text-lg p-10">
    <div class="flex flex-col gap-y-4 w-1/2">
        <img src={logoputih} alt="Logo Unhas" class="w-36 h-36">
        <p>Jl. Perintis Kemerdekaan No.KM.10, Tamalanrea Indah, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245</p>
        <div class="social-media flex gap-x-5">
            <a target="_blank" href="https://facebook.com"><Facebook size=22 strokeWidth=1 class='hover:text-white'/></a>
            <a target="_blank" href="https://x.com"><Twitter size=22 strokeWidth=1 class=' hover:text-white'/></a>
            <a target="_blank" href="https://instagram.com"><Instagram size=22 strokeWidth=1 class='hover:text-white'/></a>
            <a target="_blank" href="https://youtube.com"><Youtube size=22 strokeWidth=1 class='hover:text-white'/></a>
        </div>
    </div>
    <div class="flex flex-wrap gap-x-36 gap-y-4">
        <div class="flex flex-col gap-y-1">
            <p class="text-white font-semibold mb-4">Alumni</p>
            <a target="_blank" href="/">Tracer Study Alumni</a>
            <a target="_blank" href="/">Survey Pengguna</a>
            <a target="_blank" href="/">Survey Kepuasan Mahasiswa</a>
            <a target="_blank" href="/">Kuesioner Pemahaman VMST Prodi</a>
            <a target="_blank" href="/">Survey Pengguna Alumni S2 Fisika Unhas</a>
        </div>
        <div class="flex flex-col gap-y-1">
            <p class="text-white font-semibold mb-4">Links</p>
            <a target="_blank" href="/">LMS Unhas</a>
            <a target="_blank" href="/">SIM Unhas</a>
            <a target="_blank" href="/">Login BKD Unhas</a>
            <a target="_blank" href="/">Login Penelitian Internal</a>
            <a target="_blank" href="/">FMIPA Unhas</a>
            <a target="_blank" href="/">Unhas</a>
            <a target="_blank" href="/">SIMLITABMAS</a>
            <a target="_blank" href="/">KEMERISTEKDIKTI</a>          
        </div>
        <div class="flex flex-col gap-y-1">
            <p class="text-white font-semibold mb-4">Journals</p>
            <a target="_blank" href="/">Unhas E-Journals: Fusi, Jurnal MIPA, Etc.</a>
            <a target="_blank" href="/">APS Journals: Letter A, B, C, D, E, X</a>
            <a target="_blank" href="/">IOP Journals, Journal of Physics A</a>
            <a target="_blank" href="/">Nature Journal: Nature Physics, Science</a>
            <a target="_blank" href="/">Elsevier Journals</a>
        </div>
    </div>
    <Separator class='bg-slate-600 mt-5 lg:mt-10'/>
    <div class="text-sm lg:text-base">
        <p>© 2024 Copyright - Department of Physics, Hasanuddin University. All rights reserved.</p>
    </div>
</footer>