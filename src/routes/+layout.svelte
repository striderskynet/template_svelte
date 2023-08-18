<script>
	import { _, locale, locales } from '$language/i18n';

	import Header from '$components/design/header.svelte';
	import Footer from '$components/design/footer.svelte';
</script>

<svelte:head>
	<title>{$_('global.title')}</title>
	<meta name="description" content={$_('global.description')} />
</svelte:head>

<article class="overflow-hidden min-h-screen relative">
	<Header />
	<slot />
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
