<script>
	import { browser } from '$app/environment';
	import { _, locale, locales } from '$language/i18n';

	import Carousel from 'svelte-carousel';

	//Sections
	import Hero from '$components/sections/hero.svelte';
	import Technologies from '$components/sections/technology.svelte';
	import PortfolioShowly from '$components/sections/portfolio.Showly.svelte';
	import PortfolioTravel from '$components/sections/portfolio.Travel.svelte';
	import PortfolioTaller from '$components/sections/portfolio.Taller.svelte';
	import Footer from '$components/sections/footer.svelte';
	import Navbar from '$components/navbar.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>{$_('global.title')}</title>
	<meta name="description" content={$_('global.description')} />
</svelte:head>

<div class="area">
	<ul class="circles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>

<article class="flex flex-col justify-center items-center overflow-hidden bg-slate-900">
	<section><slot /></section>
	<Navbar />
	<section
		class="h-[100vh] md:w-[80vw] border-b-slate-800 border-b-2 flex flex-col-reverse gap-12 p-4 md:pt-12 md:flex-row items-center object-middle md:justify-between md:px-44 align-center overflow-hidden z-10"
	>
		<Hero />
	</section>
	<section
		id="anchor-tech"
		class="bg-slate-900 h-[100vh] w-[100vw] md:w-[80vw] border-b-slate-800 border-b-2 z-30 overflow-hidden relative"
	>
		<div class="grid-background"></div>
		<Technologies />
	</section>
	<div id="anchor-portfolio"></div>
	{#if browser}
		<Carousel
			autoplay
			autoplayDuration="5000"
			pauseOnFocus
			autoplayProgressVisible
			dots={false}
			arrows={false}
		>
			<section
				class="bg-slate-900 h-[100vh] w-[100vw] md:w-[80vw]z-30 overflow-hidden relative items-center flex"
			>
				<PortfolioShowly />
			</section>
			<section
				class="bg-slate-900 h-[100vh] w-[100vw] md:w-[80vw] z-30 overflow-hidden relative items-center flex"
			>
				<PortfolioTravel />
			</section>

			<section
				class="bg-slate-900 h-[100vh] w-[100vw] md:w-[80vw] z-30 overflow-hidden relative items-center flex"
			>
				<PortfolioTaller />
			</section>
		</Carousel>
	{/if}
	<section class="bg-slate-200 snap-start border-b-slate-800 border-b-2 w-[100vw]">
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
		scroll-behavior: smooth;
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

	.area {
		width: 100%;
		height: 100vh;
		position: absolute;
	}

	.circles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.circles li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: rgba(153, 22, 235, 0.3);
		animation: animate 25s linear infinite;
		bottom: -150px;
	}

	.circles li:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}

	.circles li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}

	.circles li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}

	.circles li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}

	.circles li:nth-child(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	.circles li:nth-child(6) {
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}

	.circles li:nth-child(7) {
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}

	.circles li:nth-child(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}

	.circles li:nth-child(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}

	.circles li:nth-child(10) {
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}

	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-1000px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}
</style>
