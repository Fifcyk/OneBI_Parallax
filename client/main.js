/**
 * Created by Fifcyk on 05.03.15.
 */
Template.stronaGlowna.rendered = function() {
    $('.parallax').parallax();
    $('.button-collapse').sideNav({menuWidth: 600, activationWidth: 210});
    $('.scrollspy').scrollSpy();
}

Template.stronaGlowna.helpers({

    onebiMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(51.7300204, 21.0043098),
                zoom: 6,
                scrollwheel: false,
                disableDoubleClickZoom: false,
                panControl: true,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true,
                overviewMapControl: true
            };
        }
    }
});

Template.stronaGlowna.created = function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('onebiMap', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(52.2300204, 21.0043098),
            map: map.instance
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(49.5917564,20.6775655),
            map: map.instance
        });
    });
};