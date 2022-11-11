<script>
    import SideBar from "../../components/newSideBar.svelte"
    import Map from "../../components/map.svelte"
    // @ts-nocheck
    import { browser } from '$app/environment';
    import { onMount } from 'svelte'
    // controller
    import { MapController } from "../../controllers/map"

    let mapController = new MapController()
    let mapLoaded = false

    onMount(async ()=>{
        if(browser && mapLoaded == false) {
            await mapController.loadMap()
            mapLoaded = mapController.mapLoaded
        }
    })

    
</script>

<div class="flex flex-row h-full">
    <!-- map -->
    <div class="basis-2/3">
        <Map />
    </div>
    <!-- side-bar -->
    <div class="basis-1/3 h-full">
        <!-- todo -->
    </div>
</div>