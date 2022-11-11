<script>
	// @ts-nocheck
	// Components
	import BackButton from './backButton.svelte';
	import PrimaryButton from './primaryButton.svelte';
    import SecondaryButton from './secondaryButton.svelte';
	// Function Props
	export let addMapData;
	// Local variables
	/**
	 * @type {any}
	 */
	let name = '';
	let jsonString = '';
	let fileInput;
	let dataLoaded = false;

	// Functions
	function onFileChange() {
		const file = fileInput.files[0];
        name = file.name
		if (file) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				loadJson(reader.result);
			});
			reader.readAsText(file);
			return;
		}
	}
	function loadJson(result) {
		let json = JSON.parse(result);
		jsonString = JSON.stringify(json, null, 2);
		addMapData(json);
		dataLoaded = true;
	}
    function exportFile(){
        let filename = name
        let a = document.createElement('a');
        let blob = new Blob([jsonString], {'type':'application/octet-stream'});
        a.href = window.URL.createObjectURL(blob);
        // append .json to name
        if(!filename.includes('.')) {
            filename = filename.concat('.json')
        }
        a.download = filename;
        a.click();
    }
	function applyChanges() {
		let json = JSON.parse(jsonString);
		addMapData(json);
	}
</script>

<div class="h-full  w-full flex flex-row">
	<div class="border-l-2 border-l-black h-full" />
	<div class="h-full w-full flex flex-col py-10 pl-12">
		<!-- search bar -->
		<input
			bind:value={name}
			placeholder="Type a Name..."
			class="py-4 bg-orange-50 border-b-2 border-b-black font-medium text-xl placeholder-gray-800
                focus:outline-none 
                {name == '' ? 'animate-pulse' : 'animate-none'}"
		/>
		<!-- content -->
		<div class="pt-6 rounded-2xl text-base w-full" style="max-height:-webkit-fill-available">
			<!-- content here -->
			<div class="flex flex-col max-h-full pb-10">
				<textarea 
					bind:value={jsonString}
					placeholder="Type in geojson..."
					class="px-5 placeholder-black bg-orange-50 text-sm
						overflow-y-scroll focus:outline-none
						{jsonString == '' ? 'animate-pulse' : 'animate-none'}
						jsonContent"
					style="height:-webkit-fill-available"
				/>
				<div class="flex flex-col pt-5">
                    <span>... or
                        <label class="text-orange-400 hover:cursor-pointer">
                            <input
                                placeholder="upload a geojson file"
                                bind:this={fileInput}
                                on:change={onFileChange}
                                type="file"
                            />
                            upload a geojson file
                        </label>
                    </span>
					<div class="flex justify-between pt-5">
                        <div class=flex>
                            <!-- <BackButton /> -->
                            {#if jsonString !== ''}
                                <div class="w-44">
                                    <PrimaryButton clickFunction={applyChanges} buttonLabel="Apply Changes" />
                                </div>
                            {/if}
                        </div>
                        {#if jsonString !== ''}
                            <div class="float-right pr-10" >
                                <SecondaryButton clickFunction={exportFile} buttonLabel="Export" />
                            </div>
                        {/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	input[type='file'] {
		display: none;
	}
</style>
