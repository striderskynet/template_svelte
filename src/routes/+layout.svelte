<script>
	import { _, locale, locales } from '$language/i18n';

	//Sections
	import Hero from '$components/sections/hero.svelte';
	import Technologies from '$components/sections/technologies.svelte';
	import Footer from '$components/sections/footer.svelte';
	import Navbar from '$components/navbar.svelte';
</script>

<svelte:head>
	<title>{$_('global.title')}</title>
</svelte:head>

<article>
	<section><slot /></section>
	<Navbar />
	<section
		class="bg-slate-900 h-[100vh] snap-start border-b-slate-800 border-b-2 flex flex-col p-10 pt-52 md:flex-row items-center object-middle md:justify-between md:px-44 align-center"
	>
		<Hero />
	</section>
	<section
		class="bg-slate-900 h-[100vh] w-[100vw] border-b-slate-800 border-b-2 z-30 overflow-hidden relative"
	>
		<div class="grid-background"></div>
		<Technologies />
	</section>
	<section class="bg-slate-200 snap-start border-b-slate-800 border-b-2">
		<Footer />
	</section>
</article>

<style global lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	* {
		font-family: 'Roboto', sans-serif;
		/* font-family: 'Inter', sans-serif; */
	}

	.grid-background {
		content: '';
		display: block;
		width: 100vw;
		height: 100vh;
		position: absolute;
		background-image: linear-gradient(
				rgb(25 33 52) 1px,
				transparent 1px,
				transparent calc(100% - 0px),
				#1c7cbb calc(100% - 0px)
			),
			linear-gradient(
				90deg,
				rgb(25 33 52) 1px,
				transparent 1px,
				transparent calc(100% - 0px),
				#1c7cbb calc(100% - 0px)
			);
		background-size: 10% 10%;
		z-index: 0;
		transform: rotate(24deg);
	}
</style>
