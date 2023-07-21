<script>
	import { _, locale, locales } from '$language/i18n';
	import Icon from '@iconify/svelte';
</script>

<footer class="footer footer-center p-10 bg-base-200 text-base-content">
	<div class="grid grid-flow-col gap-4">
		<a href="#link" class="link link-hover">{$_('navbar.menu_portfolio')}</a>
		<a href="#link" class="link link-hover">{$_('navbar.menu_experience')}</a>
		<a href="#link" class="link link-hover">{$_('navbar.menu_about')}</a>
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
			{$_('footer.copyright_start')}
			<span data-tip={$_('footer.copyright_love')} class="tooltip hover:cursor-pointer"
				><Icon icon="mdi:heart" class="text-red-500 mx-2 text-xl" /></span
			>
			{$_('footer.copyright_mid')}
			<span data-tip="Svelte" class="tooltip hover:cursor-pointer"
				><Icon icon="devicon:svelte" class="text-red-500 mx-2 text-xl" /></span
			>
			{$_('footer.copyright_end')}
		</p>
	</div>
</footer>
