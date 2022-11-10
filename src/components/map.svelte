<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
    integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
    crossorigin=""/>

     <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
    integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
    crossorigin=""></script>
</svelte:head>

<style>
    /* #map { height: 180px; } */
</style>

<script>
// @ts-nocheck

    import { onMount } from 'svelte'
    onMount(async ()=>{
        // @ts-ignore
        var host = 'https://maps.omniscale.net/v2/{id}/style.grayscale/{z}/{x}/{y}.png';
        // var attribution = '&copy; 2022 &middot; <a href="https://maps.omniscale.com/">Omniscale</a> ' +
        //     '&middot; Map data: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

        var map = L.map('map').setView([53.14, 8.22], 13);
        L.tileLayer(host, {
            id: 'your-api-key',
            attribution: attribution
        }).addTo(map);

map.attributionControl.setPrefix(false);
    })
</script>

<div class="h-full" id="map"></div>