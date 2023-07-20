<script>
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';
	import { fly, fade } from 'svelte/transition';
	import UserAvatar from '$assets/avatar.png';
</script>

<IntersectionObserver let:intersecting once={true}>
	{#if intersecting}
		<div in:fade={{ delay: 400, duration: 1000 }} class="flex flex-col">
			<span class="text-4xl"
				>I'm Jose Olazabal, a <strong class="text-purple-500">Full Stack</strong> developer.
			</span>
			<span class="my-5">
				Im currently living in Cuba, have more than 20 years of programming expertise. More than 15
				years of web developer experience.
			</span>
			<div in:fly={{ delay: 400, duration: 1000, x: 200 }}>
				<button class="btn btn-primary w-[35%]">Contact</button>
			</div>
		</div>
	{/if}
</IntersectionObserver>
<IntersectionObserver let:intersecting once={true}>
	{#if intersecting}
		<div in:fly={{ delay: 400, duration: 1000, y: -200 }} class="mt-10">
			<img alt="Jose Olazabal" class="w-[300px]" src={UserAvatar} />
		</div>
	{/if}
</IntersectionObserver>
