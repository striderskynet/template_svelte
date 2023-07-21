<script>
	import { _, locale, locales } from '$language/i18n';
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';
	import { fly, fade } from 'svelte/transition';
	import UserAvatar from '$assets/avatar.png';
</script>

<IntersectionObserver let:intersecting once={true}>
	{#if intersecting}
		<div in:fade={{ delay: 400, duration: 1000 }} class="flex flex-col">
			<span class="text-4xl">{@html $_('hero.title')} </span>
			<span class="my-5 max-w-[75ch]">{@html $_('hero.subtitle')}</span>
			<div in:fly={{ delay: 400, duration: 1000, x: 200 }}>
				<button class="btn btn-primary w-[35%]">{@html $_('hero.contact')}</button>
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
