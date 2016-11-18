$(document).ready( function() { 
        
        var quiz = [  
        {question:"What is your favorite color",  
                 options: ["red","yellow","purple","pink"],
                 mapping: ["pomegranate","mango","grape","dragonfruit"], 
                 nextPage: "page1.html"},       
        {question:"What is your favorite season",  
                options: ["summer","winter","fall","spring"], 
                mapping: ["pomegranate","mango","grape","dragonfruit"], 
                nextPage: "page2.html"},
        {question:"Hard or Soft ?",  options: ["hard","soft"],
                                     mapping: ["pomegranate,dragonfruit","mango,grape"], nextPage: "page3.html"},
        {question:"Sweet or Sour ?",  options: ["sweet","sour"], 
                                        mapping: ["pomegranate,dragonfruit","mango,grape"] , nextPage: "page4.html"},
        {question:"Messy or Clean ?", options: ["messy","clean"], mapping: ["pomegranate,dragonfruit","mango,grape"], nextPage: "page5.html"}
        ]


        var cursor = window.location.pathname.substr(5,1);
        var tally = {};

        //LET's parse the hash in the URL to populate the tally object
        function getTallyFromURL() {
            var hashParameters = location.hash.substr(1);
            var hashArray = hashParameters.split(",");
            var fruitOrder = ["mango", "pomegranate", "grape", "dragonfruit"]
            for( var i=0; i < hashArray.length; i++) {
                var theFruitForThisHashPosition = fruitOrder[i];

                tally[ theFruitForThisHashPosition ] = Number(hashArray[i]);

            }
            console.log('I parsed the URL to this TALLY: ')
            console.log(tally);
        }
        // _.each( hashArray, function(hashItem,index) { 
        //     tally[ fruitOrder[index] ] = hashItem    } )

        getTallyFromURL();

        //This is a hack to be fast and done so you can go home..
        //if the cursor is on 5 then this is the last page and we should
        // calculate the percentage score
    
        if( cursor == 5 ) {  // we are on page 5

            //Parse the Tally and assign the category

            // Get the maximum count from TALLY and that is our assignment
            var maxTally = _.max( _.values(tally));
            var maxFruit = undefined;

            _.each(_.keys(tally), function(key) {
                if( tally[key] == maxTally ) {
                    maxFruit = key;
                }
            })
            
            console.log(maxTally, maxFruit)

        }
    
    
    
        function getCurrentQuestion() {
            return quiz[cursor].question;
        }

        function loadCurrentQuestion() {
            w3DisplayData("question", quiz[cursor]);

            // get the options for the current question
            var responses = quiz[cursor].options;
            var fruits = quiz[cursor].mapping
            
        //    console.log(responses);

            // for each of the options create a radio button HTML element
            for( var i=0; i < responses.length; i++ ) {

                var id = "response" + responses[i];

                var value = fruits[i];

                var rb = "<input id='" 
                            + id 
                            + "' type='radio' value='" 
                            + value 
                            + "' name='answers' >";
                console.log(responses[i] + " ---> " + fruits[i] )                            
               console.log(rb);
                //each time through create a label for the response
                var lbl = "<label>" +  responses[i]   + "</label>"      
        //        console.log(lbl);

                // we have a proper HTML label so add it to the HTML document

                // stick that element into the response section of the HTML
                $("div#responses").append(rb);        
                $("div#responses").append(lbl);        
            }
        }        

        //If we are not on page 5 then load the question
        if( cursor != 5 ) {
            loadCurrentQuestion(); 
        }
    
        //read in the score as of now
        var currentScore = Number(window.location.hash.substr(1));
    
    console.log("You are on page" + cursor + " with score = " + currentScore);
    
        
        $("button").on("click", function(){            
            var score = $("input[name=answers]:checked").val()
            console.log("score = " + score);
            // alert("the value that you selected was: " + score)

        
            
            tally[score]++;
            // THIS IS NASTAY!!!
            var currentTallyAsString = [tally.mango,
                                        tally.pomegranate,
                                        tally.grape,
                                        tally.dragonfruit].join(",")

            //var url = nextPage + "#" + currentTallyAsString;

            //go to the next page BUT
            // with a hashCode that has the score
            
            // document.location = url;
            

            
        })

        function getTotalScore() {
            //we are gonna read the score from the hash in the URL
            
            console.log("Your score as of now = " + window.location.hash)
        }
        
})