<script>
	// @ts-nocheck
	// Components
	import BackButton from './backButton.svelte';
	import PrimaryButton from './primaryButton.svelte';
    import SecondaryButton from './secondaryButton.svelte';
	// Function Props
	export let saveFile;
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
        console.log(file)
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
        console.log(!filename.includes('.'))
        if(!filename.includes('.')) {
            filename = filename.concat('.json')
        }
        a.download = filename;
        a.click();
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
				<pre
					contenteditable="true"
					placeholder="Type in geojson..."
					bind:innerHTML={jsonString}
					class="px-5 placeholder-black bg-orange-50 text-sm
                                overflow-y-scroll focus:outline-none
                                {jsonString == '' ? 'animate-pulse' : 'animate-none'}
                                jsonContent"
				/>
				<div class="flex flex-col pt-5">
					<span class="pb-6"
						>... or
						<label class="text-orange-400 hover:cursor-pointer">
							<input
								placeholder="upload a geojson file"
								bind:this={fileInput}
								on:change={onFileChange}
								type="file"
							/>
                            {#if jsonString == ''}
                                upload a geojson file
                            {:else}
                                upload another geojson file
                            {/if}
						</label>
					</span>
					<div class="flex justify-between">
                        <div class=flex>
                            <BackButton />
                            <div class="pl-3">
                                <PrimaryButton clickFunction={saveFile} buttonLabel="Save" />
                            </div>
                        </div>
                        {#if jsonString != ''}
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
	[contenteditable='true']:empty:before {
		content: attr(placeholder);
		pointer-events: none;
		display: block; /* For Firefox */
	}
	input[type='file'] {
		display: none;
	}
</style>
