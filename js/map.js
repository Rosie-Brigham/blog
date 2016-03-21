core.Map = {}

core.Map.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: -39.9202518, lng: 171.3535423},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var auckland = {lat: -36.8513387, lng: 174.7568343}
  var waiheke = {lat: -36.7930897, lng: 174.7568343}
  var coromandel = {lat: -36.7506983, lng: 175.4051815}
  var whitianga = {lat: -36.8165885, lng: 175.6339418}
  var wellington = {lat: -41.2442852, lng: 174.6217707}
  var nelson = {lat: -41.2628552, lng: 173.2682627}
  var nelsonlakes = {lat: -41.9689772, lng: 172.6881971}
  var nelsonbeach = {lat: -41.2834979, lng: 173.2449613}
  var tasman = {lat: -41.209881, lng: 173.0691906}
  var christchurch = {lat: -43.5282261,lng: 172.5130863}
  var sydney = {lat: -33.7945146, lng: 150.3619477}
  var omaru = {lat: -45.080513, lng: 170.979777}
  var queenstown = {lat: -45.028202, lng: 168.661388}
  var milford = {lat: -44.6231373, lng: 167.7840797}
  var foxGlacier = {lat: -43.4701104, lng: 169.8566723}
  var hokitika = {lat: -42.7193195, lng: 170.9503955}
  var takaka = {lat: -40.8829084, lng: 172.7118614}
  var wharariki = {lat: -40.5148254, lng: 172.6887269}
  var collingwood = {lat: -40.5645787, lng: 172.5527841}


  var flightPlanCoordinates = [
    auckland, // auckland
    waiheke, // waiheke
    coromandel, // coromandel
    whitianga,  // whitianga
    wellington,
    nelson,  // nelson
    nelsonlakes, // nelson lakes
    nelsonbeach,  // nelson
    tasman,  // tasman
    christchurch,  // christchurch
    sydney,  // sydney
    christchurch,  // christchurch
    omaru,
    queenstown,
    milford,
    queenstown,
    foxGlacier,
    hokitika,
    tasman,
    takaka,
    wharariki,
    collingwood,
    tasman,
    wellington
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#86166C',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  core.Map.setMarkers(map, flightPlanCoordinates);
  flightPath.setMap(map);

  
}

core.Map.setMarkers = function(map, coordinates){
  $.each(coordinates, function(index, coordinateObject) {
    core.Map.drawMarker(map, coordinateObject)
  })

}

core.Map.drawMarker = function(map, coordinate) {
  var image = '../img/flag2.png';
  var marker = new google.maps.Marker({
    position: coordinate,
    map: map,
    title: 'Hello World!',
    icon: image
  });
}