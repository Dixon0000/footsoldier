// I managed to find a google maps fuction to implement into the "contacts" section of my webpage
window.marker = null;

function initialize() {
    var map;

    var sligo = new google.maps.LatLng(54.2796, -8.4761);

    var style = [
       
    ];

    var mapOptions = {
        // SET THE CENTER
        center: sligo,

        // SET THE MAP STYLE & ZOOM LEVEL
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom:9,

        // SET THE BACKGROUND COLOUR
        backgroundColor:"#000",

        // REMOVE ALL THE CONTROLS EXCEPT ZOOM
        zoom:17,
        panControl:false,
        zoomControl:true,
        mapTypeControl:false,
        scaleControl:false,
        streetViewControl:false,
        overviewMapControl:false,
        zoomControlOptions: {
            style:google.maps.ZoomControlStyle.LARGE
        }

    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // SET THE MAP TYPE
    var mapType = new google.maps.StyledMapType(style, {name:"Grayscale"});
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');

    //CREATE A CUSTOM PIN ICON
    var sligoicon ='plugins/google-map/images/marker.png';
    var pinIcon = new google.maps.MarkerImage(sligoicon,null,null, null,new google.maps.Size(30, 40));

    marker = new google.maps.Marker({
        position: sligo,
        map: map,
        icon: pinIcon,
        title: 'eventre'
    });
}
if(($('#map').length)!=0){
    google.maps.event.addDomListener(window, 'load', initialize);
    
}
