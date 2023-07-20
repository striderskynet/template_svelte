<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';

	import ShowlyDisplay from '$assets/showly_display.png';
	import Icon from '@iconify/svelte';
</script>

<div class="flex justify-between items-center w-[100vw] px-52">
	<IntersectionObserver let:intersecting>
		{#if intersecting}
			<div class="flex flex-col">
				<div in:slide={{ delay: 400, duration: 500 }} class="text-red-400 text-5xl my-5">
					Showly TV
				</div>
				<span>
					A web application for tracking favorites TV Shows, their details, launch & return dates.
				</span>

				<span class="my-5 flex object-center align-middle items-center"
					>Used tech:
					<Icon icon="devicon:svelte" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:javascript" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:html5" class="mx-2 text-3xl rounded-lg" />
					<Icon icon="devicon:css3" class="mx-2 text-3xl rounded-lg" />
				</span>

				<span
					in:blur={{ delay: 400, duration: 500 }}
					class="my-1 flex object-center align-middle items-center text-2xl btn btn-primary w-[20%]"
				>
					<a href="https://showly.vercel.app" target="_blank">Visit</a>
				</span>
			</div>
		{/if}
	</IntersectionObserver>
	<IntersectionObserver let:intersecting>
		{#if intersecting}
			<a in:blur={{ delay: 400, duration: 500 }} href="https://showly.vercel.app" target="_blank">
				<img class="hover:scale-125 duration-500" alt="Showly -" src={ShowlyDisplay} />
			</a>
		{/if}
	</IntersectionObserver>
</div>
