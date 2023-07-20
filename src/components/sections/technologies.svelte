<script>
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';
	import { fly } from 'svelte/transition';
	import Icontech from './icontech.svelte';
</script>

<div class="rotate-class flex items-center text-center h-[100vh] select-none relative">
	<!-- <div class="backdrop-blur-[2px] w-[100%] h-[100%] absolute z-10"></div> -->
	<IntersectionObserver let:intersecting once={true}>
		{#if intersecting}
			<h1
				in:fly={{ delay: 400, duration: 1000, y: -200 }}
				class="absolute text-5xl w-[100vw] -mt-16 z-30"
			>
				<div>
					a <span
						class="tracking-tight font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-800 to-green-500"
					>
						Full-Stack
					</span> developer
				</div>
				<div>with a passion</div>
			</h1>
		{/if}
	</IntersectionObserver>

	<!-- Front-End -->
	<Icontech {...{ top: 65, left: 35, tech: 'javascript' }} />
	<Icontech {...{ top: 30, left: 35, tech: 'css3' }} />
	<Icontech {...{ top: 35, left: 65, tech: 'html5' }} />
	<Icontech {...{ top: 30, left: 55, tech: 'react' }} />
	<Icontech {...{ top: 35, left: 45, tech: 'svelte' }} />

	<!-- Back-End -->
	<Icontech {...{ top: 50, left: 65, tech: 'php' }} />
	<Icontech {...{ top: 53, left: 37, tech: 'laravel' }} />
	<Icontech {...{ top: 65, left: 55, tech: 'python' }} />
	<Icontech {...{ top: 50, left: 30, tech: 'postgresql' }} />
	<Icontech {...{ top: 60, left: 50, tech: 'mysql' }} />

	<!-- Software -->
	<Icontech {...{ top: 65, left: 43, tech: 'vscode' }} />
</div>

<style>
	.rotate-class {
		transform: rotate(-40deg);
	}
</style>
