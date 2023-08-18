<script>
	import { _ } from '$language/i18n';

	import Icon from '@iconify/svelte';
	import hero_bg from '$assets/landing_page_hero.jpg';
	import Input from '$components/design/form/input.svelte';
</script>

<main
	style={`background: center / cover no-repeat url(${hero_bg})`}
	class="min-h-screen flex items-center justify-center"
>
	<div
		class="text-base-100 font-extrabold tracking-tighter text-5xl uppercase -mt-[300px] flex flex-col items-center"
	>
		<span class="text-base tracking-normal font-normal">{$_('global.title')}</span>
		<span>Premium Car Service</span>
		<span class="border-b-8 w-[50%] h-5 block"></span>
	</div>
	<div class="z-20 absolute bottom-24 w-[100%] flex justify-center text-base-100">
		<div class="w-[50%] flex gap-10 items-center">
			<div class="flex min-w-fit items-center gap-2 mt-4">
				<Icon icon="mingcute:settings-2-fill" class="text-2xl" /> Advanced Search
			</div>
			<Input icon="mdi:map-marker" label="Pick-up Location" type="text" />
			<Input label="Pick-up Date" type="date" />
		</div>
	</div>
	<div class="bg-transparent h-40 absolute w-[100%] bottom-40 z-10">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#ffffff"
				fill-opacity="1"
				d="M0,32L120,80C240,128,480,224,720,229.3C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
			></path>
		</svg>
	</div>
</main>

<main class="min-h-[50vh]"></main>
