<script>
    // @ts-nocheck
    // Components
    import ListSideBar from "../components/listSideBar.svelte"
    import NewSideBar from "../components/newSideBar.svelte"
    import ViewSideBar from "../components/viewSideBar.svelte";
    import Map from "../components/map.svelte"
    // svelte imports
    import { browser } from '$app/environment';
    import { onMount } from 'svelte'
    // controllers
    import { MapController } from "../controllers/map"
    import { geoData, saveData } from "../controllers/storage"
    // Enums
    const DisplayOptions = {
        List: 0,
        View: 1,
        New: 2
    }
    // Local variables
    let mapController = new MapController()
    let mapLoaded = false
    let title = ''
    let jsonString = ''
    let currentDisplay = DisplayOptions.List
    // Reactive assignment
    $: geoList = getNames($geoData)
    $: filteredList = filterBySearch(geoList, title)
    // lifecycle events
    onMount(async ()=>{
        if(browser && mapLoaded == false) {
            await mapController.loadMap()
            mapLoaded = mapController.mapLoaded
        }
    })
    /**
	 * @param {any} newData
	 */
    function addMapData(newData) {
        mapController.addNewData(newData)
    }
    function clearMapData(){
        mapController.clearData()
    }
    function getNames(geoData){
        if(geoData !== null) {
            return Object.keys(geoData)
        } else {
            return undefined
        }
    }
    /**
	 * @param {any[]} list
	 * @param {string | undefined} search
	 */
    function filterBySearch(list, search){
        if (list !== undefined && search !==undefined ) {
            return list.filter(function (element) { 
                return element.includes(search)
            }); 
        } else {
            return list
        }
    }
    /**
	 * @param {any} data
	 * @param {string} name
     * 
     * Add data to db
	 */
     function saveFile(name, data){
        saveData(name, data)
    }
    function selectJson(name){
        title = name
        let geojson = $geoData[name]
        jsonString = JSON.stringify(geojson, null, 2);
        // show New
        currentDisplay = DisplayOptions.View
    }
    function resetItem(){
        jsonString = ''
        title = ''
    }
    // Functions to change sidebars
    function showNew() {
		currentDisplay=DisplayOptions.New
	}
    function showList() {
		currentDisplay=DisplayOptions.List
        resetItem()
	}
</script>

<div class="flex flex-row h-full">
    <!-- map -->
    <div class="basis-2/3">
        <Map />
    </div>
    <!-- side-bar -->
    <div class="basis-1/3 h-full">
        {#if currentDisplay == DisplayOptions.List}
            <ListSideBar 
                bind:search={title}
                geoList={filteredList}
                {showNew}
                {selectJson}
            />
        {:else if currentDisplay == DisplayOptions.View}
            <ViewSideBar
                name={title}
                {jsonString}
                {showList}
                {addMapData}
                {clearMapData}
            />
        {:else}
            <NewSideBar
                name={title}
                {jsonString}
                {showList}
                {addMapData}
                {saveFile}
                {clearMapData}
            />
        {/if}
    </div>
</div>