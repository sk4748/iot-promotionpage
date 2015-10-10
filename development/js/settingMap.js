
google.maps.event.addDomListener(window, 'load', init);

function init() {
  var ichysCoordinate = new google.maps.LatLng(35.671484,139.720988);

  var mapOptions = {
    center: ichysCoordinate,
    zoom: 15,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
    },
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: true,
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    draggable : true,
    overviewMapControl: false,
    overviewMapControlOptions: {
        opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // styles: [
    //   {
    //     "featureType": "landscape",
    //     "stylers": [
    //       {
    //         "hue": "#F1FF00"
    //       },
    //       {
    //         "saturation": -27.4
    //       },
    //       {
    //         "lightness": 9.4
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "road.highway",
    //     "stylers": [
    //       {
    //         "hue": "#0099FF"
    //       },
    //       {
    //         "saturation": -20
    //       },
    //       {
    //         "lightness": 36.4
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "road.arterial",
    //     "stylers": [
    //       {
    //         "hue": "#00FF4F"
    //       },
    //       {
    //         "saturation": 0
    //       },
    //       {
    //         "lightness": 0
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "road.local",
    //     "stylers": [
    //       {
    //         "hue": "#FFB300"
    //       },
    //       {
    //         "saturation": -38
    //       },
    //       {
    //         "lightness": 11.2
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "water",
    //     "stylers": [
    //       {
    //         "hue": "#00B6FF"
    //       },
    //       {
    //         "saturation": 0.2
    //       },
    //       {
    //         "lightness": -63.4
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   },
    //   {
    //     "featureType": "poi",
    //     "stylers": [
    //       {
    //         "hue": "#9FFF00"
    //       },
    //       {
    //         "saturation": 0
    //       },
    //       {
    //         "lightness": 0
    //       },
    //       {
    //         "gamma": 1
    //       }
    //     ]
    //   }
    // ]
  };

  var map = new google.maps.Map(document.getElementById('ichysMap'),mapOptions);

  var marker = new google.maps.Marker({
        position: ichysCoordinate,
        map: map,
        title: 'ICHYS GALLERY',
    });
  bindInfoWindow(marker, map, '<span style = "color: #3b312b; font-weight:bold">ICHYS GALLERY</span>');

  function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
    var infoWindowVisible = (function () {
      var currentlyVisible = false;
      return function (visible) {
        if (visible !== undefined) {
          currentlyVisible = visible;
        }
        return currentlyVisible;
      };
    }());
    iw = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', function() {
     if (infoWindowVisible()) {
       iw.close();
       infoWindowVisible(false);
      } else {
        var html= "<div style='color:#000;background-color:#fff;padding:5px;width:120px;'><h4>"+title+"</h4></div>";
        iw = new google.maps.InfoWindow({content:html});
        iw.open(map,marker);
        infoWindowVisible(true);
      }
    });
    google.maps.event.addListener(iw, 'closeclick', function () {
      infoWindowVisible(false);
    });
  }
}


