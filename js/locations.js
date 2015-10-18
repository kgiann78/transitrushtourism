var infowindow;
var marker = null;
var map = null;
var position = { lat: 38, lng: 23.7 };
var zoom = 12;
var contentString;
var google;

var address = "Δεμιρδεσίου 89, Νέα Ιωνία, 14233";

function initMap() {
    'use strict';
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: position
    });
}

function gotomap(x, y, name, content) {
    position = { lat: x, lng: y };
    if (marker !== null) {
        marker.setMap(null);
    }
    marker = new google.maps.Marker({
        position: position,
        map: map,
        title: name
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    infowindow = new google.maps.InfoWindow({
        content: content
    });

    infowindow.open(map, marker);
}

$(window).resize(function () {
    var h = $(window).height();
    $('#map').css('height', (h));
}).resize();