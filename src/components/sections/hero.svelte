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
			<span class="my-5 max-w-[75ch]">
				Im currently living in Cuba, have more than <strong class="text-white font-bold"
					>20 years</strong
				>
				of programming expertise. More than <strong class="text-white font-bold">15 years</strong> of
				web developer experience. Open for business.
			</span>
			<div in:fly={{ delay: 400, duration: 1000, x: 200 }}>
				<button class="btn btn-primary w-[35%]">Contact</button>
			</div>
		</div>
	{/if}
</IntersectionObserver>
<IntersectionObserver let:intersecting once={true}>
	{#if intersecting}
		<div in:fly={{ delay: 400, duration: 1000, y: -200 }} class="">
			<img alt="Jose Olazabal" class="w-[300px] hover:scale-110 duration-500" src={UserAvatar} />
		</div>
	{/if}
</IntersectionObserver>
