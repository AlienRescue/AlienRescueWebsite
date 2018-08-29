<script type='script'>

  var map, heatmap;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 37.551458, lng: -97.664113},
      mapTypeId: 'roadmap'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(),
      map: map
    });
  }


  function getPoints() {
    return [
      new google.maps.LatLng(30.551458, -97.664113),
      new google.maps.LatLng(30.528098, -97.696770),
      new google.maps.LatLng(30.511395, -97.715413),
      new google.maps.LatLng(30.492339, -97.734008),
      new google.maps.LatLng(30.535347, -97.736192),
      new google.maps.LatLng(30.568060, -97.790267),
      new google.maps.LatLng(30.583196, -97.854950),
      new google.maps.LatLng(30.530969, -97.860292),
      new google.maps.LatLng(30.480832, -97.836227),
      new google.maps.LatLng(30.398634, -97.825020),
      new google.maps.LatLng(31.093483, -97.751951),
      new google.maps.LatLng(29.796128, -98.736413)
    ];
  }

</script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUvgmugmOV5A2aJMMP-yEZV30nz_oVJIM&libraries=visualization&callback=initMap">
</script>
