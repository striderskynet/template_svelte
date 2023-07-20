<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';
	import Icon from '@iconify/svelte';

	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	let randX = randomIntFromInterval(-200, 200);
	let randY = randomIntFromInterval(-200, 200);

	export let top, left, tech;
</script>

<IntersectionObserver let:intersecting once={true}>
	{#if intersecting}
		<span
			in:fly={{ delay: 400, duration: 10000, y: randY, x: randX }}
			out:fade={{ delay: 400, duration: 400 }}
			data-tip={tech}
			style="top: {top}%; left: {left}%"
			class="absolute tooltip hover:cursor-pointer hover:opacity-100 duration-300 opacity-75 text-slate-300 border-slate-500 w-16 border-2 rounded-lg aspect-square flex justify-center items-center z-10"
		>
			<Icon icon="devicon:{tech}" class="text-5xl" />
		</span>
	{/if}
</IntersectionObserver>
