<script>
	import Icon from '@iconify/svelte';

	export let top;
	export let left;
	export let tech;
</script>

<span
	data-tip={tech}
	style="top: {top}%; left: {left}%"
	class="absolute tooltip opacity-50 hover:opacity-100 duration-500 hover:cursor-pointer text-slate-300 border-slate-500 w-16 border-2 rounded-lg aspect-square flex justify-center items-center"
>
	<Icon icon="devicon:{tech}" class="text-5xl" />
</span>
