var result = {};

$(document).ready(function() {
    /*
        VARIABLES - CONSTANT
    */
    var baseURL = "http://api.spotify.com";
    var searchURL = baseURL + "/v1/search";
    
    /*
        ELEMENTS
    */
    var $results = $("#spotifyResults");
    var $radioBtn = $("input[name=qryType]:radio");
    var $searchLabel = $("label[for=search]");
    var $search = $("#search");
    
    /*
    document.writeln("DEV:: result elem = ");
    document.writeln($results.attr("id"));
    document.writeln("DEV:: radioBtn elem = ");
    document.writeln($radioBtn.val());
    */
    
    
    /*
        EVENT HANDLERS
    */
    
    //Radio Buttons
    $radioBtn.on("change", function() {
        var value = $(this).val();
        //all this does is capitalize the first letter
        value = value.substr(0,1).toUpperCase() + 
                value.substring(1,value.length) ;
        
        //update the search label text with the new value
        $searchLabel.text(value + " Name") 
        console.log("radio button value = "); console.log(value);
    });
    
    //Search Box
    //$search.on("change", handleSearch)
    
//    $search.on("focusout", handleSearch );
//    $search.on("blur", handleSearch );    
    $search.on("keypress", function(e) {
        
        if(e.which == 13) { // this is the code for the enter key         
            handleSearch();
        }
    })
    
    function handleSearch() {
        
        if(!isSearching) {
            var queryString = $search.val(); 
                        console.log(queryString);
            if( queryString.length > 0 ) {
                disableSearch();                
                //now submit this to spotify
                searchSpotify();
            }   
        }
    }
    
    
    function onDataReceive(response) {
        console.log("got data response");        
        //result["data"] = data.artists.items;
        
        enableSearch();
        parseResults(response);
        //w3DisplayData("spotifyResults", result);
    }
    
    function onError(err) {
        console.log("got an error");
        console.log(err);
    }
    
    function parseResults(response) {
        var data = undefined;
        
        if( _.has(response, "playlists") ) {
            console.log("parsing playlist response");
            console.log(response);            
            data = response.playlists.items;


        }
        
        if( data != undefined) {

            //now loop over data items and parse each one
            //into the object format that we need for display
            //
            
            
            var displayData = { items: _.map(data, makePlaylistDisplayObject) } 
            
            //now display the data
            console.log(displayData);
            w3DisplayData("playlistResults", displayData);            
        }
        
        
    }
    
    // this function takes a playlist object from spotify
    // and converts it into the object format that we need 
    // for display.
    // That format is:
    // object format:
    //   { items: [ {name:"" , 
    //                  owner:"" , 
    //                  total:"" , 
    //                  img:"" , 
    //                  ownerUrl:"" }
    //              ]
    //  }    
    
    function makePlaylistDisplayObject(anItem) {
        var name = "unknown",            
            img = "img/default.jpg",
            owner = "unknown",
            ownerUrl = "http://spotify.com",
            total = 0;
        console.log("parsing item: ")
        console.log(anItem);
        
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
    
    
    
    /*
        STATE VARIABLES
    */
    var isSearching = false;
    
    console.log("got here")
    /*
        FUNCTIONS
    */
    
    // get the query string and the query type
    // and use that to search spotify
    function searchSpotify(){        
        console.log("got here 2")
        var query = $search.val();
        console.log("got here 3 value of query = ...")
        console.log(query);
        console.log("------");
        
//        var searchType = $radioBtn.val();
        var searchType = $("input:radio[name=qryType]:checked").val();
        var params = {q: query, type: searchType};
        
        $.get(searchURL, params).done(onDataReceive).fail(onError)
        
    }
    
    function disableSearch() {
        isSearching = true;
        $search.attr('disabled','disabled');
    }
    
    function enableSearch() {
        isSearching = false;
        $search.removeAttr('disabled');
    }
    
    /*
        this function will results
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
//    result = getResultItems(playlistsData,'playlist');
    
//    var displayData = { items: _.map(result.items, makePlaylistDisplayObject) } 
    
//    result = displayData;
//    w3DisplayData("spotifyResults", result);
    
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