<script>
	import { _, locale, locales } from '$language/i18n';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';

	import ShowlyDisplay from '$assets/showly_display.png';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col md:flex-row justify-between items-center w-[100vw] mt-8 px-10 md:px-52">
	<IntersectionObserver let:intersecting>
		{#if intersecting}
			<div class="flex flex-col">
				<div in:slide={{ delay: 400, duration: 500 }} class="text-red-400 text-5xl my-5">
					{$_('portfolio.showly_title')}
				</div>
				<span>
					{$_('portfolio.showly_subtitle')}
				</span>

				<span class="my-5 flex object-center align-middle items-center">
					{$_('portfolio.showly_tech')}
					<Icon icon="devicon:svelte" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:javascript" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:html5" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:css3" class="mx-2 text-3xl rounded-lg" />
				</span>

				<span
					in:blur={{ delay: 400, duration: 500 }}
					class="my-1 flex object-center align-middle items-center text-2xl btn btn-primary w-[50%]"
				>
					<a href="https://showly.vercel.app" target="_blank">{$_('portfolio.showly_button')}</a>
				</span>
			</div>
		{/if}
	</IntersectionObserver>
	<IntersectionObserver let:intersecting>
		{#if intersecting}
			<a
				class="block w-[200px] mt-24 md:mt-0 md:min-w-[150px]"
				in:blur={{ delay: 400, duration: 500 }}
				href="https://showly.vercel.app"
				target="_blank"
			>
				<img class=" hover:scale-125 duration-500" alt="Showly -" src={ShowlyDisplay} />
			</a>
		{/if}
	</IntersectionObserver>
</div>
