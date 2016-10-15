var result = {};

$(document).ready(function() {
    
    /*
        this function will 
    */
    function getResultItems(res,type) {
        var data = {};
        switch(type) {
            case 'artist':
                data.items = res.artists.items;
                break;
            case 'playlist':
                data.items = res.playlists.items;
                break;                
        }
        return data;
    }
    
    function makePlaylistDisplayObject(anItem) {
        var name = "unknown",            
            img = "img/default.jpg",
            owner = "unknown",
            ownerUrl = "http://spotify.com",
            total = 0;
        
        if( _.has(anItem, "name") ) {
            name = anItem.name;
        }
            
        if( _.has(anItem,"images") && anItem.images.length > 2 ) { 
            img = anItem.images[1].url; 
        }      
        
        if( _.has(anItem, "owner","id") ) {
            owner = anItem.owner.id;
        }
        
        if( _.has(anItem, "owner","external_urls","spotify") ) {
            ownerUrl = anItem.owner.external_urls.spotify
        }
            
        if( _.has(anItem, "tracks","total") ) {            
            total = anItem.tracks.total;
        }
  
        
        //console.log(name,img,owner,ownerUrl,total);                 
        return {"name": name, "img": img, "owner": owner, "ownerUrl": ownerUrl, "total": total};
    }
    
//    function buildPlaylistObjectForDisplay(items) {
//        var ret = { items: [] };
//        
//        _.each(items )
//        item.name;
//        if(item.images.length > 1) {
//            item.images[1].url    
//        } else 
//            //no url -- or a dummy placeholder image    
//        }
//        item.owner.id,
//        item.owner.external_urls.spotify
//        item.tracks.total
//        return ret;
//    }
    
//    result = getResultItems(artistsData,'artist');
    result = getResultItems(playlistsData,'playlist');
    
    var displayData = { items: _.map(result.items, makePlaylistDisplayObject) } 
    
    result = displayData;
    w3DisplayData("spotifyResults", result);
    
//    w3DisplayData("spotifyResults", serverData);
    
    /*
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
    */
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
    
//    searchArtist('anderson paak');
})