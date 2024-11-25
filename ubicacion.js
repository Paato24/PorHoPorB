function initMap() {
    var taller = { lat: -34.6037, lng: -58.3816 }; // Ubicación de ejemplo (Buenos Aires)
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: taller
    });

    var marker = new google.maps.Marker({
        position: taller,
        map: map,
        title: 'Taller PorHoPorB'
    });
}

// Cargar el mapa cuando la página esté lista
google.maps.event.addDomListener(window, 'load', initMap);
