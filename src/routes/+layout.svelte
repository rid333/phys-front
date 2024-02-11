<script>
	import "../app.pcss";
	import Footer from "$lib/components/ui/Footer.svelte";
	import Navbar from "$lib/components/ui/Navbar.svelte";
</script>

<body class="bg-slate-100">
  <nav>
  </nav>
  
  <main>
    <slot />
  </main>

  <footer>
    <Footer />
  </footer>
</body>
