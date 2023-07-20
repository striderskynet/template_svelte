<script>
	import { _, locale, locales } from '$language/i18n';

	//Sections
	import Technologies from '$components/sections/technologies.svelte';
</script>

<svelte:head>
	<title>{$_('global.title')}</title>
</svelte:head>

<main class="app">
	<main>
		<slot />
	</main>
	<Technologies />
</main>

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
</style>
