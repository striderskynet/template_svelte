<script>
	import IntersectionObserver from '$hooks/IntersectionObserver.svelte';
	import { fly } from 'svelte/transition';
	import Icontech from './icontech.svelte';
</script>

<div
	class="flex h-[100vh] w-[100vw] justify-center items-center text-center relative -ml-6 md:-ml-52"
>
	<div class="backdrop-blur-[2px] w-[100%] h-[100%] absolute z-20"></div>
	<div class="absolute z-30">
		<IntersectionObserver let:intersecting once={true}>
			{#if intersecting}
				<div
					in:fly={{ delay: 400, duration: 1000, y: -200 }}
					class="text-5xl -rotate-[15deg] select-none hover:cursor-pointer hover:scale-125 duration-500"
				>
					<div>
						a <span
							class="tracking-tight font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-800 to-green-500"
						>
							Full-Stack
						</span> developer
					</div>
					<div>with a passion</div>
				</div>
			{/if}
		</IntersectionObserver>
	</div>
	<div class="absolute z-10">
		<!-- Front-End -->
		<Icontech {...{ top: -2, left: 0, tech: 'javascript' }} />
		<Icontech {...{ top: -1.5, left: -1.5, tech: 'css3' }} />
		<Icontech {...{ top: -1.5, left: 1.5, tech: 'html5' }} />

		<!-- Frameworks -->
		<Icontech {...{ top: 1.5, left: 1, tech: 'react' }} />
		<Icontech {...{ top: 0.5, left: 1.5, tech: 'svelte' }} />

		<!-- Back-End -->
		<Icontech {...{ top: 1, left: -2.5, tech: 'php' }} />
		<Icontech {...{ top: -1, left: -3, tech: 'laravel' }} />
		<Icontech {...{ top: 1.5, left: -1.5, tech: 'python' }} />

		<!-- Database -->
		<Icontech {...{ top: -1, left: 3, tech: 'postgresql' }} />
		<Icontech {...{ top: 0.5, left: 0, tech: 'mysql' }} />

		<!-- Software -->
		<Icontech {...{ top: 0, left: 3, tech: 'vscode' }} />
	</div>
</div>
