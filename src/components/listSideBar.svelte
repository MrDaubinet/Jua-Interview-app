<script>
	// @ts-nocheck
	// Components
	import PrimaryButton from './primaryButton.svelte';
	// Function Props
	export let showNew
	export let selectJson
	// data Props
	export let geoList;
	export let search;
</script>

<div class="h-full  w-full flex flex-row">
	<div class="border-l-2 border-l-black h-full" />
	<div class="h-full w-full flex flex-col py-10 pl-12">
		<!-- search bar -->
		<input
			bind:value={search}
			placeholder="Search"
			class="py-4 bg-orange-50 border-b-2 border-b-black font-medium text-xl placeholder-gray-800
                focus:outline-none
                {search == '' ? 'animate-pulse' : 'animate-none'}"
		/>
		<!-- content -->
		<div class="rounded-2xl text-base w-full" style="max-height:-webkit-fill-available">
			<div class="flex flex-col max-h-full pb-5 overflow-y-scroll" style="max-height: 80%">
				{#if geoList != null}
					{#each geoList as name}
						<button 
							on:click={selectJson(name)}
							class="pl-5 py-5 border-b border-black text-left
								hover:bg-orange-200">
							{name}
						</button>
					{/each}
				{/if}
			</div>
			<div class="w-32 pt-3">
				<PrimaryButton
					clickFunction={showNew}
				>
					New
				</PrimaryButton>
			</div>
		</div>
	</div>
</div>
