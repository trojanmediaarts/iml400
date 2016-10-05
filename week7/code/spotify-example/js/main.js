var result = {};

$(document).ready(function() {
    
    var baseURL = "http://api.spotify.com";
    var searchURL = baseURL + "/v1/search";
    
    function onDataReceive(data) {
        console.log("got data");
        console.log(data);
        result["data"] = data.artists.items;
        
        w3DisplayData("spotifyResults", result);
    }
    
    function onError(err) {
        console.log("got an error");
        console.log(err);
    }
    
    
    function searchArtist(artist) {
        var params = {q: artist, type:'artist'};
        $.get(searchURL, params).done(onDataReceive).fail(onError)
    }
    /*
    $.get(searchURL+"?q='anderson paak'&type=artist").done( function(data) {
        document.writeln(" got data " );
        document.write( data );
    }).fail( function(err) { console.log("fail"); console.log(err);})
*/
    
//    w3Http(searchURL+"?q='anderson paak'&type=artist", function() {
//        result = this.responseText;
//        //result = JSON.parse(this.responseText);
//        var obj = result;
//        
//    
//    })
    
    searchArtist('anderson paak');
})