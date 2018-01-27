$( "#mysearch" ).click(function() {
  var xurl = 'help.html?zipcode=' + $('#usrzip').val();	
  window.location.href = xurl;
});

$("#nusearch").click(function () { 
	var yurl = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyAckf_t-GPOqL62uHlPb6hWGz41RwSEJg4&zoom=12&q=community+service+' + $('#usrzip').val();	
    updatehelpmap(yurl);
});

$( window ).on( "load", function() {
        var zipload = getUrlParameter('zipcode');
        var lurl = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyAckf_t-GPOqL62uHlPb6hWGz41RwSEJg4&zoom=12&q=community+service+' + zipload;	
        updatehelpmap(lurl);
});

function updatehelpmap(nuurl) {
	$("#frame").attr("src", nuurl);
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};