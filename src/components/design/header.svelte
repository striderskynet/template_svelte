<script>
	import { page } from '$app/stores';
	import { menu } from '$config/menu';
	import Icon from '@iconify/svelte';
	import { _, locale, locales } from '$language/i18n';

	import img_logo from '$assets/logo.svg';

	let menu_icon = ['mdi:hamburger-menu', 'mdi:close'],
		menu_open = 0,
		scroll_y;

	$: _;
</script>

<svelte:window bind:scrollY={scroll_y} />

<div
	class={`flex items-end justify-between  ${
		scroll_y < 50
			? 'bg-transparent border-b-2 border-b-transparent'
			: 'bg-black bg-opacity-80 border-b-2 border-b-gray-700'
	}  fixed w-screen h-[2lh] pb-2 px-10 text-base-100 z-40 duration-500`}
>
	<div class="nav-start uppercase font-bold tracking-tighter text-lg min-w-[300px]">
		<a href="/" class="flex gap-3 hover:text-accent duration-500">
			<span>
				<svg
					version="1.0"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 984.000000 354.000000"
					preserveAspectRatio="xMidYMid meet"
					class="w-16"
				>
					<g
						transform="translate(0.000000,354.000000) scale(0.100000,-0.100000)"
						stroke="none"
						fill="currentColor"
					>
						<path
							d="M3900 3529 c-284 -15 -336 -19 -435 -34 -55 -9 -134 -20 -175 -25
-90 -10 -117 -14 -285 -47 -532 -103 -1083 -283 -1644 -539 -211 -96 -243
-116 -224 -135 8 -8 85 14 279 79 403 135 720 225 964 274 167 33 411 33 525
0 137 -40 254 -102 560 -297 28 -18 83 -51 123 -75 87 -51 103 -73 73 -103
-20 -20 -24 -21 -173 -9 -456 36 -500 38 -973 53 -776 25 -1404 -23 -1905
-147 -193 -48 -376 -109 -517 -174 -85 -40 -103 -63 -58 -74 14 -4 172 -15
352 -26 703 -43 1053 -71 1703 -136 538 -53 593 -63 723 -131 84 -44 178 -143
201 -210 60 -176 -55 -334 -285 -387 -111 -27 -364 -39 -664 -32 -331 7 -469
15 -994 62 -217 19 -402 32 -412 29 -24 -8 -31 -32 -14 -49 10 -10 54 -16 162
-20 852 -37 1373 -121 1788 -287 293 -117 481 -270 630 -510 108 -175 195
-259 349 -338 206 -105 457 -137 672 -85 158 37 351 156 472 289 90 99 181
244 211 338 8 22 19 37 28 37 14 0 15 -13 11 -88 -13 -215 -146 -470 -302
-579 -30 -21 -54 -42 -52 -48 3 -13 62 -20 316 -39 465 -35 633 -40 1375 -40
733 0 983 7 1500 39 700 45 1283 117 1609 200 144 36 147 41 91 141 -19 34
-35 71 -35 81 0 19 1 24 103 288 97 254 127 348 127 396 0 86 -65 171 -171
225 -143 72 -225 85 -564 91 -315 5 -725 -17 -1120 -62 -121 -14 -226 -25
-232 -25 -7 0 -13 -7 -13 -16 0 -14 13 -15 98 -9 397 25 864 31 1125 14 378
-24 538 -89 562 -229 10 -62 -73 -358 -137 -484 -103 -204 -279 -273 -863
-336 -360 -39 -1238 -66 -1677 -52 -252 9 -269 11 -315 33 -37 19 -51 32 -62
62 -13 36 -13 42 5 75 10 20 48 70 84 112 36 42 150 184 255 316 195 246 329
394 419 463 126 98 312 172 526 211 344 63 1066 111 1378 91 279 -18 429 -47
587 -111 66 -27 92 -45 148 -101 69 -70 88 -71 39 -3 -93 127 -330 237 -677
314 -392 88 -781 128 -1420 150 -198 7 -320 15 -360 25 -33 8 -139 33 -235 55
-96 23 -222 52 -280 66 -58 14 -303 72 -545 129 -418 99 -646 154 -726 175
-39 11 -53 28 -39 49 33 55 817 99 1261 72 534 -33 1020 -113 1670 -277 141
-35 259 -64 263 -64 3 0 6 4 6 9 0 21 -595 223 -835 284 -11 2 -65 17 -119 32
-428 115 -1233 255 -1481 256 -85 0 -177 7 -240 18 -97 18 -644 25 -920 12
-137 -6 -358 -22 -490 -37 l-240 -26 -240 102 c-132 56 -334 140 -450 187
-228 93 -289 124 -307 156 -10 19 -6 26 29 57 47 41 108 59 308 90 329 50 964
82 1229 61 249 -20 579 -76 821 -141 39 -10 138 -36 220 -58 166 -44 352 -99
462 -138 71 -25 120 -29 105 -9 -4 6 -74 41 -157 77 -627 280 -1286 435 -1980
468 -222 11 -293 10 -505 -1z m1020 -1563 c259 -49 606 -117 675 -132 167 -36
438 -102 490 -119 22 -7 83 -25 135 -40 149 -42 380 -128 380 -141 0 -21 -235
-66 -440 -85 -230 -21 -332 2 -650 142 -126 55 -520 250 -707 351 -62 33 -86
65 -40 55 12 -3 83 -17 157 -31z m-710 -16 c132 -38 223 -93 336 -205 90 -89
106 -111 152 -205 72 -148 86 -208 87 -365 0 -105 -5 -145 -23 -210 -83 -293
-314 -531 -578 -599 -80 -21 -260 -21 -339 -1 -207 52 -410 219 -520 428 -65
123 -86 202 -92 342 -7 148 11 242 66 360 123 264 329 422 621 479 53 10 217
-3 290 -24z m1258 -1345 c190 -9 277 -17 288 -26 9 -7 30 -33 47 -58 45 -67
181 -205 260 -263 83 -62 87 -79 15 -72 -410 42 -767 177 -978 372 -68 62 -62
75 28 67 37 -3 190 -12 340 -20z"
						/>
					</g>
				</svg>
			</span>
			<span>{$_('global.title')}</span>
		</a>
	</div>
	<div class="nav-center h-full hidden md:flex">
		<ul class="flex gap-5 px-1 !my-0 h-full">
			{#each menu as m, i}
				<li
					class="menu-link h-full flex duration-300 active:border-t-accent border-t-4 border-t-transparent hover:border-t-accent items-end !my-0"
					class:active={$page.url.pathname === m.link}
				>
					<a href={m.link}>{m.title}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex">
		<div class="nav-end font-bold flex gap-5 mr-1">
			<a href="tel:+1 (307) 699-1259" class="flex items-center gap-2">
				<Icon icon="mdi:phone" class="lg:text-base text-2xl mb-[1px]" />
				<div class="duration-300 hidden lg:flex">+1 (307) 699-1259</div>
			</a>
		</div>
		<button
			class="cursor-pointer md:hidden text-base-100 !z-50"
			on:keypress={() => {}}
			on:click={(e) => {
				if (menu_open === 0) {
					menu_open = 1;
					document.body.style.overflow = 'hidden';
				} else {
					menu_open = 0;
					document.body.style.overflow = '';
				}
				//console.log(menu_open, document.body.style.overflow);
			}}
		>
			<Icon
				icon={menu_icon[menu_open]}
				class={`lg:text-base text-3xl ${menu_open === 1 ? 'text-accent' : ''}`}
			/>
		</button>
	</div>
</div>

<div
	class={`${menu_open === 1 ? 'ml-[0]' : 'ml-[100%]'} w-screen overflow-clip fixed h-screen z-30`}
>
	<div
		class={`menu-back text-base-100 pt-[20%] border-l-8 border-l-accent ${
			menu_open === 1 ? 'is-open' : ''
		} absolute z-50 h-[100%] w-[50vh] bg-black`}
	>
		<ul class="flex flex-col gap-10 p-10">
			{#each menu as m, i}
				<li
					class="menu-link h-full flex duration-300 active:border-t-accent border-t-4 border-t-transparent hover:border-t-accent items-end !my-0"
					class:active={$page.url.pathname === m.link}
				>
					<a href={m.link}>{m.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.active {
		--tw-border-opacity: 1;
		border-top-color: hsl(var(--a) / var(--tw-border-opacity));

		color: hsl(var(--a) / var(--tw-border-opacity));
		font-weight: bold;
	}
	.menu-back {
		transform: skew(0) translateX(200%);
		transition-duration: 1s;
	}
	.menu-back.is-open {
		transition-duration: 1s;
		transform: skew(-10deg) translateX(30%);
	}
</style>
