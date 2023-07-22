<script>
	import { _, locale, locales } from '$language/i18n';

	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
</script>

<svelte:head>
	<title>{$_('global.title')}</title>
	<meta name="description" content={$_('global.description')} />
</svelte:head>

<article>
	<Header />
	<section class="h-[100vh]"><slot /></section>
	<Footer />
</article>

<style global lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	* {
		font-family: 'Roboto', sans-serif;
		scroll-behavior: smooth;
		/* font-family: 'Inter', sans-serif; */
	}
</style>
