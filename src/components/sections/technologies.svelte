<script>
	import Icontech from './icontech.svelte';
</script>

<section class="bg-slate-950 flex items-center justify-center text-center h-[100vh] select-none">
	<div class="backdrop-blur-[2px] w-[100%] h-[100%] absolute z-10"></div>
	<h1 class="text-5xl z-20">
		<div>
			a <span
				class="tracking-tight font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-900 to-green-500"
			>
				Full-Stack
			</span> developer
		</div>
		<div>with an attitude</div>
	</h1>

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
</section>
