/**
 * Created by Fifcyk on 11.03.15.
 */
Template.mainPage.rendered = function() {
    $('.slider').slider({
        full_width: true,
        interval: 6000,
        transition: 400
    });
    $('.parallax').parallax();
    $('.button-collapse').sideNav({menuWidth: 600, activationWidth: 210});
    $('.scrollspy').scrollSpy();
    document.title = "OneBI";

    if($.cookie('cookiepolicyinfoEN') != 'true')
    {
        $(".cookiepolicy").show();
    }
};

Template.mainPage.helpers({

    onebiMapOptions: function() {
        var styles = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#656565"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];
        if (GoogleMaps.loaded()) {
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
                overviewMapControl: true,
                styles: styles
            };
        }
    }
});

Template.mainPage.created = function() {
    Session.set('version', 'English');
    GoogleMaps.ready('onebiMap', function(map) {
        var oddzialyOnebi = [
            ['OneBI oddział Warszawa', 52.2279228,21.0074754, 1],
            ['OneBI oddział Nowy Sącz', 49.5917564,20.6775655, 2]
        ];

        var myLatLng = new google.maps.LatLng(oddzialyOnebi[0][1], oddzialyOnebi[0][2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map.instance,
            title: oddzialyOnebi[0][0],
            zIndex: oddzialyOnebi[0][3],
            animation: google.maps.Animation.DROP
        });
        var myLatLng1 = new google.maps.LatLng(oddzialyOnebi[1][1], oddzialyOnebi[1][2]);
        var marker1 = new google.maps.Marker({
            position: myLatLng1,
            map: map.instance,
            title: oddzialyOnebi[1][0],
            zIndex: oddzialyOnebi[1][3],
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(marker, 'click', function() {
            map.instance.setZoom(14);
            map.instance.setCenter(marker.getPosition());
        });
        google.maps.event.addListener(marker1, 'click', function() {
            map.instance.setZoom(14);
            map.instance.setCenter(marker1.getPosition());
        });
    });
};

Template.mainPage.events({
    'click .buttoncookie': function(e)
    {
        e.preventDefault();
        //$.cookie(options.cookie, true);
        //$(this).parents('.cookiepolicy').remove();
        $.cookie('cookiepolicyinfoEN','true');
        $(".cookiepolicy").hide();
    }
});