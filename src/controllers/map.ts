// Load geojson in map
export class MapController {
    map = undefined
    mapLoaded = false
    mapGeoLayer: any;
    /* Initialise the map library */
    async loadMap() {
        const L = await import('leaflet');
        var host = 'https://maps.omniscale.net/v2/{id}/style.grayscale/{z}/{x}/{y}.png';

        var map = L.map('map').setView([-28, 24], 6);
        L.tileLayer(host, {
            id: 'jua-interview-fec33cd8',
            attribution: undefined
        }).addTo(map);
        this.mapGeoLayer = L.geoJSON().addTo(map);

        map.attributionControl.setPrefix(false);
        this.mapLoaded = true
        return map
    }
    /* Add new data to the map */
    addNewData(data: any) {
        this.mapGeoLayer.addData(data);
    }
    /* Clear all data from map */
    clearData() {
        this.mapGeoLayer.clearLayers()
    }
}