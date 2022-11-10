<script>
    import SideBar from "../components/sideBar.svelte"
    import Map from "../components/map.svelte"
</script>

<div class="flex flex-row h-full">
    <!-- map -->
    <div class="basis-2/3">
        <Map />
    </div>
    <!-- side-bar -->
    <div class="basis-1/3 h-full">
        <SideBar />
    </div>
</div>