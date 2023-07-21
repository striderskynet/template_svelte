<script>
	import { _, locale, locales } from '$language/i18n';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';

	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';

	import TravelDisplay from '$assets/travel_display.png';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col md:flex-row justify-between items-center w-[100vw] mt-8 px-10 md:px-52">
	<IntersectionObserver let:intersecting>
		{#if intersecting}
			<div class="flex flex-col">
				<div in:slide={{ delay: 400, duration: 500 }} class="text-red-400 text-5xl my-5">
					{$_('portfolio.travel_title')}
				</div>
				<span>
					{$_('portfolio.travel_subtitle')}
				</span>

				<span class="my-5 flex object-center align-middle items-center">
					{$_('portfolio.travel_tech')}
					<Icon icon="devicon:react" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:javascript" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:html5" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:css3" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:mysql" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:azure" class="mx-2 text-3xl rounded-lg" />
				</span>
			</div>
		{/if}
	</IntersectionObserver>
	<IntersectionObserver let:intersecting>
		{#if intersecting}
			<img
				class="block min-w-[200px] mt-12 md:mt-0 md:min-w-[150px] hover:scale-125 duration-500"
				alt="Showly -"
				src={TravelDisplay}
			/>
		{/if}
	</IntersectionObserver>
</div>
