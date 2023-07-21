<script>
	import { _, locale, locales } from '$language/i18n';

	const handleClickLang = (e) => {
		e.target.checked ? ($locale = 'es') : ($locale = 'en');
	};

	$: _;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-missing-attribute -->
<div class="navbar z-50 border-b-slate-800 border-b-2 duration-300 delay-300 fixed top-0">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-b-lg w-52"
			>
				<li>
					<a>{$_('navbar.menu_portfolio')}</a>
					<!-- <ul class="p-2">
						<li><a>Showly - TV Series</a></li>
						<li><a>Store Management System</a></li>
					</ul> -->
				</li>
				<li><a>{$_('navbar.menu_experience')}</a></li>
				<li><a>{$_('navbar.menu_about')}</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl">Olazabal.J</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a>{$_('navbar.menu_portfolio')}</a></li>
			<li><a>{$_('navbar.menu_experience')}</a></li>
			<li><a>{$_('navbar.menu_about')}</a></li>
			<!-- <li tabindex="0">
				<details>
					<summary>Portfolio</summary>
					<ul class="p-2">
						<li><a>Showly - TV Series</a></li>
						<li><a>Store Management System</a></li>
					</ul>
				</details>
			</li> -->
		</ul>
	</div>
	<div class="navbar-end">
		<div class="form-control">
			<label class="label cursor-pointer">
				<input on:click={handleClickLang} type="checkbox" class="toggle" />
				<span class="label-text mx-2">Spanish</span>
			</label>
		</div>
	</div>
</div>

<style>
	.navbar {
		backdrop-filter: blur(2px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(17, 25, 40, 0.75);
	}
</style>
