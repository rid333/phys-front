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
            <a target="_blank" href="https://forms.gle/Shez1mXV3V9cQA6g7">Tracer Study Alumni</a>
            <a target="_blank" href="https://forms.gle/Qm48tcG7mbb9cvrk6">Survey Pengguna</a>
            <a target="_blank" href="https://forms.gle/7u3njyzhf1HrrHei9">Survey Kepuasan Mahasiswa</a>
            <a target="_blank" href="https://forms.gle/6bFtuEu4yAwrJKWt8">Kuesioner Pemahaman VMST Prodi</a>
            <a target="_blank" href="https://forms.gle/AKSCPLo83tdYt9Lp6">Survey Pengguna Alumni S2 Fisika Unhas</a>
        </div>
        <div class="flex flex-col gap-y-1">
            <p class="text-white font-semibold mb-4">Links</p>
            <a target="_blank" href="http://lms.unhas.ac.id/">LMS Unhas</a>
            <a target="_blank" href="http://sim.unhas.ac.id/">SIM Unhas</a>
            <a target="_blank" href="https://apps.unhas.ac.id/dashboard/index.php/login">Login BKD Unhas</a>
            <a target="_blank" href="https://app.pdlp2m.unhas.ac.id/login">Login Penelitian Internal</a>
            <a target="_blank" href="http://www.unhas.ac.id/mipa/">FMIPA Unhas</a>
            <a target="_blank" href="http://www.unhas.ac.id/">Unhas</a>
            <a target="_blank" href="http://simlitabmas.ristekdikti.go.id/">SIMLITABMAS</a>
            <a target="_blank" href="http://www.ristekdikti.go.id/">KEMERISTEKDIKTI</a>          
        </div>
        <div class="flex flex-col gap-y-1">
            <p class="text-white font-semibold mb-4">Journals</p>
            <p>Unhas E-Journals: 
                <a target="_blank" href="http://journal.unhas.ac.id/">Fusi</a>, 
                <a target="_blank" href="http://journal.unhas.ac.id/index.php/fmipa/">Jurnal MIPA</a>, 
                Etc.
            </p>
            <p>APS Journals: 
                <a target="_blank" href="http://prl.aps.org/">Letter</a>,
                <a target="_blank" href="http://pra.aps.org/">A</a>,
                <a target="_blank" href="http://prb.aps.org/">B</a>, 
                <a target="_blank" href="http://prc.aps.org/">C</a>, 
                <a target="_blank" href="http://prd.aps.org/">D</a>, 
                <a target="_blank" href="http://pre.aps.org/">E</a>, 
                <a target="_blank" href="http://prx.aps.org/">X</a>
            </p>
            <p>
                <a target="_blank" href="http://www.iop.org/">IOP Journals</a>, 
                <a target="_blank" href="http://www.iop.org/">Journal of Physics A</a>
            </p>
            <p>
                <a target="_blank" href="http://nature.com/">Nature Journal:</a> 
                <a target="_blank" href="http://nature.com/nphys/">Nature Physicsa</a>, 
                <a target="_blank" href="http://www.science.com/">Sciencea</a>,
            </p>
            <a target="_blank" href="http://www.elsevier.com/">Elsevier Journals</a>
        </div>
    </div>
    <Separator class='bg-slate-600 mt-5 lg:mt-10'/>
    <div class="text-sm lg:text-base">
        <p>© 2024 Copyright - Department of Physics, Hasanuddin University. All rights reserved.</p>
    </div>
</footer>