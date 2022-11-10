<script>
    // components
    import BackButton from './backButton.svelte';
    import PrimaryButton from './primaryButton.svelte';
    // test data
    import test from '../geojson/sample.json'
    // console.log(test)
    /**
	 * @type {any}
	 */
    let content = undefined
    let search = ""
    let jsonString = ""
    // $: jsonString = JSON.stringify(test, null, 3)
</script>

<style>
    [contenteditable=true]:empty:before {
        content: attr(placeholder);
        pointer-events: none;
        display: block; /* For Firefox */
    }
</style>

<div class="h-full  w-full flex flex-row">
    <div class="py-10">
        <div class="border-l-2 border-l-black h-full"></div>
    </div>
    <div class="h-full w-full flex flex-col py-10 pl-12">
        <!-- search bar -->
        <input 
            bind:value={search} 
            placeholder="Type a Name..." 
            class="py-4 bg-orange-50 border-b-2 border-b-black font-medium text-xl placeholder-gray-800
                focus:outline-none 
                {search == "" ? 'animate-pulse' : 'animate-none'}"
        >
        <!-- content -->
        <div class="pt-6 rounded-2xl text-base w-full"
            style="max-height:-webkit-fill-available">
            <!-- if no content -->
            {#if content == undefined}
                <!-- content here -->
                <div class="flex flex-col max-h-full pb-10">
                        <pre contenteditable="true"
                            placeholder="Type in geojson..."
                            bind:innerHTML={jsonString}
                            class="px-5 placeholder-black bg-orange-50 text-sm
                                overflow-y-scroll focus:outline-none
                                {jsonString == "" ? 'animate-pulse' : 'animate-none'}
                                jsonContent"  
                            >
                        </pre>
                    <div class="flex flex-col pt-5">
                        <span class="pb-6">... or 
                            <button class="text-orange-400">upload a geojson file</button>
                        </span>
                        <div class="flex">
                            <BackButton />
                            <div class="ml-3">
                                <PrimaryButton buttonLabel="Save" />
                            </div>
                        </div>
                    </div>
                </div>
            {:else}
                 <!-- else content here -->
            {/if}
        </div>
    </div>
</div>
