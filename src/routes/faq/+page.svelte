<script>
	//MGL2381363790
	import Icon from '@iconify/svelte';
	const gov_api = 'https://egov.uscis.gov/csol-api/case-statuses/';
	let promise;

	const handleCase = (e) => {
		promise = fetch(gov_api + e.target.value).then((x) => x.json());
		console.log(e.target.value);
	};
</script>

<main class="min-h-screen bg-slate-900 text-base-100 flex flex-col justify-center items-center">
	<div class="w-[50%] flex flex-col items-center justify-center glass p-5">
		<!-- <div class="text-xl m-5">Herramientas</div> -->
		<div class="flex flex-col relative">
			<input
				on:change={handleCase}
				placeholder="Numero de Caso"
				class="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
			/>
			<span class="absolute top-1/2 left-4 -translate-y-1/2 text-black">
				<Icon icon="mdi:pound" class="text-xl" />
			</span>
		</div>
	</div>

	<div class="mt-10 w-[50%] bg-slate-600 rounded-xl p-10 min-h-[20vh] flex flex-col gap-5">
		{#await promise}
			Esperando.
		{:then res}
			{#if res?.CaseStatusResponse.isValid}
				<div class="text-sm flex gap-2">
					<span class="text-base">Form:</span>
					{res.CaseStatusResponse.detailsEs.formNum}
				</div>
				<div class="text-sm flex gap-2">
					<span class="text-base">Form:</span>
					{res.CaseStatusResponse.detailsEs.formTitle}
				</div>
				<div class="text-sm flex gap-2">
					<span class="text-base">Siguiente Paso:</span>
					{res.CaseStatusResponse.detailsEs.actionCodeText}
				</div>
				<div class="text-sm flex gap-2">
					<span class="text-base">Detalles:</span>
					<span>{@html res.CaseStatusResponse.detailsEs.actionCodeDesc}</span>
				</div>
			{:else}
				Escriba el caso correctamente
			{/if}
		{:catch error}
			{error.message}
		{/await}
	</div>
</main>
