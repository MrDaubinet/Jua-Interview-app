<script>
	// @ts-nocheck
	// Libraries
	import { PlusIcon, XIcon } from 'svelte-feather-icons'
	// Components
	import BackButton from './backButton.svelte';
	import PrimaryButton from './primaryButton.svelte';
    import SecondaryButton from './secondaryButton.svelte';
	import TertiaryButton from './tertiaryButton.svelte';
	import TertiaryAlternativeButton from './tertiaryAltButton.svelte';
	// Function Props
	export let addMapData;
	export let clearMapData;
	export let saveFile
	export let showList
	// Data Props
	export let name
	export let jsonString
	// Local variables
	let fileInput;
	let dataLoaded = false;
	// Functions
	// Read in a new file
	function onFileChange() {
		const file = fileInput.files[0];
        name = file.name
		// append .json to name
        if(name.includes('.json')) {
            name = name.replace('.json', '')
        }
		if(name.includes('.geoson')) {
            name = name.replace('.json', '')
        }
		if (file) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				let json = JSON.parse(reader.result);
				jsonString = JSON.stringify(json, null, 4);
			});
			reader.readAsText(file);
			return;
		}
	}
	// Save geojson online
	function saveJson() {
		if(name.includes('.json')) {
            name = name.replace('.json', '')
        }
		if(name.includes('.geojson')) {
            name = name.replace('.geojson', '')
        }
		let json = JSON.parse(jsonString);
		saveFile(name, json)
	} // clear data from map
	function clearData() {
		dataLoaded = false
		clearMapData()
	} // download the file
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
    } // add geojson to map
	function applyChanges() {
		let json = JSON.parse(jsonString);
		addMapData(json);
		dataLoaded = true
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
			<div class="flex flex-col max-h-full pb-10">
					<div class="w-full flex justify-end px-4">
						{#if jsonString != ''}
							<TertiaryAlternativeButton clickFunction={applyChanges}>
								<div class="flex justify-center items-center rounded-full">
									<PlusIcon size="16" class="text-orange-400"/>
									<span class="px-1">
										Apply
									</span>
								</div>
							</TertiaryAlternativeButton>
						{/if}
						{#if dataLoaded}
							<div class="pl-2">
								<TertiaryButton clickFunction={clearData}>
									<div class="flex justify-center items-center rounded-full">
										<XIcon size="16" class="text-orange-400"/>
										<span class="px-1">
											Clear
										</span>
									</div>
								</TertiaryButton>
							</div>
						{/if}
					</div>
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
							<label class="hover:cursor-pointer">
								<input
									placeholder="load a geojson file"
									bind:this={fileInput}
									on:change={onFileChange}
									type="file"
								/>
								<span class="text-orange-400 ">load</span> a geojson file
							</label>
						</span>
					<div class="flex justify-between pt-5">
                        <div class=flex>
                            <BackButton clickFunction={showList}/>
                            <div class="pl-3 w-32">
                                <PrimaryButton clickFunction={saveJson}>
									Upload
								</PrimaryButton>
                            </div>
                        </div>
                        {#if jsonString != ''}
                            <div class="float-right pr-10" >
                                <SecondaryButton clickFunction={exportFile}>
									Download
								</SecondaryButton>
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
