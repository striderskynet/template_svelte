<script>
	import { _ } from '$language/i18n';

	import Icon from '@iconify/svelte';
	import hero_bg from '$assets/landing_page_hero.jpg';
	import Input from '$components/design/form/input.svelte';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<main
	style={`background:  no-repeat center url(${hero_bg})`}
	class="min-h-screen flex flex-col justify-between relative"
>
	<div />
	<div
		class="text-base-100 font-extrabold tracking-tighter text-5xl uppercase flex flex-col items-center justify-center z-20"
	>
		{#if visible}
			<span in:fly={{ y: '-100px', duration: 1000 }} class="text-base tracking-normal font-normal"
				>{$_('global.title')}</span
			>

			<span in:fade={{ duration: 1000 }} class="flex flex-wrap justify-center gap-3"
				><span>Premium Car</span> Service</span
			>

			<span in:fly={{ y: '100px', duration: 1000 }} class="border-b-8 sm:w-[10%] w-[20%] h-5 block"
			></span>
		{/if}
	</div>
	<div class="bottom-0 absolute w-[100%]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#ffffff"
				fill-opacity="1"
				d="M0,32L120,80C240,128,480,224,720,229.3C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
			></path>
		</svg>
	</div>

	<div class="flex justify-center text-base-100 mb-20 md:mb-40 z-40">
		<div
			class="flex flex-col md:flex-row gap-2 md:gap-10 items-center justify-center min-w-[350px] md:min-w-[800px] max-w-[70%] py-5 px-10 rounded-xl"
		>
			<a
				href="/search"
				class="flex min-w-fit items-center gap-2 md:mt-4 cursor-pointer hover:text-accent duration-300"
			>
				<Icon icon="mingcute:settings-2-fill" class="text-2xl" /> Advanced
			</a>
			<Input icon="mdi:map-marker" label="Pick-up Location" type="text" />
			<Input label="Pick-up Date" type="date" />
			<button class="btn btn-accent mt-5">Book</button>
		</div>
	</div>
</main>

<main class="min-h-[50vh]"></main>
