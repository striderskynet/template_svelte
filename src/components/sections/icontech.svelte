<script>
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';
	import Icon from '@iconify/svelte';

	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	let randX = randomIntFromInterval(-500, 500);
	let randY = randomIntFromInterval(-500, 500);

	export let top, left, tech;
</script>

<IntersectionObserver let:intersecting once={true}>
	{#if intersecting}
		<div
			in:fly={{ delay: 400, duration: 10000, y: randY, x: randX }}
			out:fade={{ delay: 400, duration: 400 }}
			data-tip={tech}
			style="top: {top * 100}px; left: {left * 100}px"
			class="absolute tooltip hover:cursor-pointer hover:opacity-100 duration-300 opacity-100 text-slate-300 border-slate-500 w-16 border-2 rounded-lg aspect-square flex justify-center items-center z-20"
		>
			<Icon icon="devicon:{tech}" class="text-5xl" />
		</div>
	{/if}
</IntersectionObserver>
