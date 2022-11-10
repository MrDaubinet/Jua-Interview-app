<script>
    import SideBar from "../../components/sideBar.svelte"
    import Map from "../../components/map.svelte"
    // @ts-nocheck
    import { browser } from '$app/environment';
    import { onMount } from 'svelte'
    // controller
    import { MapController } from "../../controllers/map"

    let mapController = new MapController()
    let mapGeoLayer = null
    let mapLoaded = false

    onMount(async ()=>{
        if(browser && mapLoaded == false) {
            await mapController.loadMap()
            mapLoaded = mapController.mapLoaded
            mapGeoLayer = mapController.mapGeoLayer
        }
    })
    
    function saveFile(){
        // ...
    }

    /**
	 * @param {any} data
	 */
    function addData(data) {
        mapController.addNewData(data)
    }
    
</script>

<div class="flex flex-row h-full">
    <!-- map -->
    <div class="basis-2/3">
        <Map />
    </div>
    <!-- side-bar -->
    <div class="basis-1/3 h-full">
        <SideBar 
            addMapData={addData}
            saveFile={saveFile}
        />
    </div>
</div>