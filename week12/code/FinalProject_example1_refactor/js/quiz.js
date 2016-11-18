var qz;
var next;
$.getJSON("data/data.js")
            .done(function(data){
                console.log('got the quiz')
                qz = data.q;                
                main();
            })
            .fail( function(err){
                console.log('ooops');
                console.log(err);
            })

function main() {
    //this will only run when we have data

    var cursor = -1;

    //this will drop the '#'
    var hashParams = location.hash.substring(1);
    //this will split all of the values into pairs of xx=yy
    var args = hashParams.split(';');
    _.each(args, function(item){ 
                    var _splitVal = item.split("=");
                    var key = _splitVal[0], 
                        value = _splitVal[1];
                    if(key == 'c') {
                        cursor = value;
                    }
                });

    if(cursor >= 0 ) {
        var currentQuizItem = qz[cursor];
        w3DisplayData("question", currentQuizItem)    
        addResponsesToPage( currentQuizItem );

        nextPage = qz[cursor].nxt + ".html#c=";

        $("button").click(function(){
            cursor = cursor + 1;
            document.location = nextPage + cursor;
        })
    }


}            

function addResponsesToPage(item) {
            // get the options for the current question
            var responses = item.options;

            var rightIndex = item.answer;
        //    console.log(responses);

            // for each of the options create a radio button HTML element
            for( var i=0; i < responses.length; i++ ) {

                var id = "response" + responses[i];

                var value;
                if( i == rightIndex) {
                    value = 1;
                } else {
                    value = 0;
                }

                var rb = "<input id='" 
                            + id 
                            + "' type='radio' value='" 
                            + value 
                            + "' name='answers' >";
        //        console.log(rb);
                //each time through create a label for the response
                var lbl = "<label>" +  responses[i]   + "</label>"      
        //        console.log(lbl);

                // we have a proper HTML label so add it to the HTML document

                // stick that element into the response section of the HTML
                $("div#responses").append(rb);        
                $("div#responses").append(lbl);        
            }
}

