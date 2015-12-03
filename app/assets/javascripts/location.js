function getLocation(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    var lonLat = new OpenLayers.LonLat(lon, lat)
                .transform(
                    new OpenLayers.Projection("EPSG:4326"),
                    map.getProjectionObject()
                );

    return lonLat;
}

document.body.onload = function init() {
    var lat            = 47.35387;
    var lon            = 8.43609;
    var zoom           = 18;

    var fromProjection = new OpenLayers.Projection("EPSG:4326");

    var toProjection   = new OpenLayers.Projection("EPSG:900913");

    var position       = new OpenLayers.LonLat(lon, lat).transform( fromProjection, toProjection);

    map = new OpenLayers.Map("map");
    var mapnik         = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);

    if (navigator.geolocation) {
        position = navigator.geolocation.getCurrentPosition(getLocation);
    }

    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(position));

    map.setCenter(position, zoom);
}
