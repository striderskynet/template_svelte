<script>
	import Icon from '@iconify/svelte';
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content">
	<div class="grid grid-flow-col gap-4">
		<a class="link link-hover">About me</a>
		<a class="link link-hover">Experience</a>
		<a class="link link-hover">Portfolio</a>
	</div>
	<div class="flex">
		<a href="https://github.com/striderskynet" target="_parent">
			<span data-tip="Facebook" class="tooltip hover:cursor-pointer hover:scale-125">
				<Icon icon="logos:facebook" class="mx-2 text-3xl" />
			</span>
		</a>
		<a href="https://twitter.com/nesty_olazabal" target="_parent">
			<span data-tip="Twitter" class="tooltip hover:cursor-pointer hover:scale-125 duration-300">
				<Icon icon="logos:twitter" class="mx-2 text-3xl" />
			</span>
		</a>
		<a href="https://github.com/striderskynet" target="_parent">
			<span data-tip="Reddit" class="tooltip hover:cursor-pointer hover:scale-125 duration-300">
				<Icon icon="logos:reddit-icon" class="mx-2 text-3xl" />
			</span>
		</a>

		<a href="https://github.com/striderskynet" target="_parent">
			<span data-tip="Github" class="tooltip hover:cursor-pointer hover:scale-125 duration-300">
				<Icon icon="arcticons:github" class="text-white mx-2 text-3xl" />
			</span>
		</a>

		<a href="https://www.linkedin.com/in/jose-olazabal/" target="_parent">
			<span data-tip="LinkedIn" class="tooltip hover:cursor-pointer hover:scale-125 duration-300">
				<Icon icon="logos:linkedin-icon" class="text-white mx-2 text-3xl" />
			</span>
		</a>
	</div>
	<div>
		<p class="flex">
			Copyright © 2023 - Made with
			<span data-tip="Love" class="tooltip hover:cursor-pointer"
				><Icon icon="mdi:heart" class="text-red-500 mx-2 text-xl" /></span
			>
			and
			<span data-tip="Svelte" class="tooltip hover:cursor-pointer"
				><Icon icon="devicon:svelte" class="text-red-500 mx-2 text-xl" /></span
			>
			by Nesty
		</p>
	</div>
</footer>
