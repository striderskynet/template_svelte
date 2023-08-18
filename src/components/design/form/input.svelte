<script>
	import Icon from '@iconify/svelte';
	export let label;
	export let type = 'text';
	export let Class = 'w-full';
	export let icon = false;
	export let disabled = false;
	export let required = false;
</script>

<div class={Class}>
	<div>
		<label for="" class="mb-1 block font-medium text-base-100 text-xs">
			{label}
		</label>
		<div class="relative">
			<input
				{type}
				{disabled}
				{required}
				placeholder={label}
				class={`w-full rounded-md border border-form-stroke p-3 ${
					icon ? 'pl-12' : ''
				} text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]`}
			/>
			{#if icon}
				<span class="absolute top-1/2 left-4 -translate-y-1/2">
					<Icon {icon} class="text-xl" />
				</span>
			{/if}
		</div>
	</div>
</div>
