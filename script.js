// https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE

// api key 4442e682047a15433087f7f969c0f304

// get geolocation/ set lat and long 
// 

$(document).ready(function() {
    
    $.getJSON("https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE", function(data) {
        document.write(data);
    });
});