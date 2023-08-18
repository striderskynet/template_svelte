<script>
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';
	import { fly, slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import Icon from '@iconify/svelte';

	import { _ } from '$language/i18n';
	import hero_bg from '$assets/landing_page_hero.jpg';
	import Input from '$components/design/form/input.svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});

	const service_list = [
		{
			title: 'Airport Transfer',
			details:
				'With additional wait time and flight tracking in case of delays, oir service is optimized to make every airport transfer a breeze.',
			link: '',
			picture:
				'https://images.unsplash.com/photo-1607642857266-88f5f03e66c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
		},
		{
			title: 'Intercity trips',
			details:
				'Your stressfree solution for traveling between cities with chauffeurs all over the world',
			link: '',
			picture:
				'https://www.brookwoodlimo.com/media/static/images/brookwood-limo-towncar-white-glove-service.jpg'
		},
		{
			title: 'Wedding events',
			details:
				'Our friendly, and attentive service combined with thorough attention to detail ensure you can truly relax and enjoy your special day.',
			link: '',
			picture: 'https://media2.insideweddings.com/images/083_0417.original.jpg'
		},
		{
			title: 'Business Meeting',
			details:
				'Focus on your meeting with your partners, forget about the road and the car, which will distract your thoughts',
			link: '',
			picture: 'https://i.pinimg.com/originals/e3/03/a3/e303a303d8e0d3da9df3ec967ca1676b.jpg'
		}
	];
</script>

<main
	style={`background:  no-repeat center url(${hero_bg})`}
	class="min-h-screen flex flex-col justify-between relative z-10"
>
	<div />
	<div
		class="text-base-100 font-extrabold tracking-tighter text-5xl uppercase flex flex-col items-center justify-center z-20"
	>
		{#if visible}
			<span in:fly={{ y: '-100px', duration: 1000 }} class="text-base tracking-normal font-normal"
				>{$_('global.title')}</span
			>

			<span in:fade={{ duration: 1000 }} class="flex flex-wrap justify-center gap-3 animate-pulse"
				><span>Premium Car</span> Service</span
			>

			<span in:fly={{ y: '100px', duration: 1000 }} class="border-b-8 sm:w-[10%] w-[20%] h-5 block"
			></span>
		{/if}
	</div>
	<div class="flex justify-center text-base-100 mb-20 md:mb-40 z-10">
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
	<div class="-bottom-1 absolute w-[100%] z-0">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#ffffff"
				fill-opacity="1"
				d="M0,32L120,80C240,128,480,224,720,229.3C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
			></path>
		</svg>
	</div>
</main>
<!-- <div class="min-h-[500px]"></div> -->
<!-- Services Section -->
<IntersectionObserver let:intersecting>
	<main class="w-[100%] pb-10">
		<div class="flex flex-col justify-center items-center gap-5 sm:gap-10">
			<div class="flex flex-col gap-3 md:gap-0 md:flex-row w-[50%] items-center justify-evenly">
				<span class="text-5xl font-extrabold">Servicios</span>
				<span class="sm:w-[40%] text-center">
					We invite you to try our services, and we personally guarantee that you will be completely
					satisfied
				</span>
			</div>
			<div class="flex w-[70vw] flex-shrink-0 flex-grow flex-wrap justify-evenly gap-2 gap-y-5">
				{#each service_list as el, i}
					{#if intersecting}
						<div
							in:fly={{ y: '-200', delay: 150 * i, duration: 500 }}
							class="group w-[45%] min-w-[500px] scale-[80%] sm:scale-100 aspect-[1/0.4] text-black duration-500 bg-slate-50 border-slate-100 border rounded-xl hover:shadow-xl cursor-pointer p-5 flex"
						>
							<div class="h-auto w-[50%] overflow-hidden rounded-xl">
								<div
									style={`background-image: url('${el.picture}')`}
									class={`h-[100%] w-[100%] bg-red-300 duration-500 group-hover:scale-150 bg-cover`}
								></div>
							</div>
							<div class="flex flex-col justify-between max-w-[50%] px-3 py-2">
								<div class="text-2xl font-bold flex justify-center">{el.title}</div>
								<p class="text-sm text-slate-600 text-justify">
									{el.details}
								</p>
								<div class="flex justify-center">
									<a href={el.link} class="w-[65%] btn btn-neutral btn-sm capitalize shadow-xl"
										>Read More</a
									>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</main>
</IntersectionObserver>
