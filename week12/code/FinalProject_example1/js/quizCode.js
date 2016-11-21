$(document).ready( function() { 

        var quiz = [  
        {question:"What is 2+2?",  options: [3,5,8,4],  answer: 3, nextPage: "page1.html"},
        {question:"What is 2+3?",  options: [3,50,5,4], answer: 2, nextPage: "page2.html"},
        {question:"What is 2+0?",  options: [0,2,8,4],  answer: 1, nextPage: "page3.html"},
        {question:"What is 2+8?",  options: [3,5,10,4], answer: 2, nextPage: "page4.html"},
        {question:"What is 2+20?", options: [22,5,8,4], answer: 0, nextPage: "page5.html"}
        ]

        

        var cursor;
        //this searches the current URL for the string 'page'
        //if it doesn't find it then assume we are on the index page
        if(window.location.pathname.search('page') == -1 ) {
            cursor = 0;
        } else {
            //remember the cursor equals the page number
            //this just gets the pagenumber
            cursor = window.location.pathname.match("page(\\d\+).html")[1];
        }
    
        console.log("cursor = " + cursor);
        //This is a hack to be fast and done so you can go home..
        //if the cursor is on 5 then this is the last page and we should
        // calculate the percentage score
    
        if( cursor == 5 ) {  // we are on page 5
            var currentScore = Number(window.location.hash.substr(1));
            var score = ( currentScore / quiz.length ) * 100;
            
            $("body").empty();
            $("body").append("<h1>you scored: " + score + "% </h1>")
        }
    
        
    
        function getCurrentQuestion() {
            return quiz[cursor].question;
        }

        function loadCurrentQuestion() {
            console.log(quiz[cursor]);
            w3DisplayData("question", quiz[cursor]);
            
            // get the options for the current question
            var responses = quiz[cursor].options;

            var rightIndex = quiz[cursor].answer;
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
            var updatedTotal = currentScore + Number(score);
            
            //go to the next page BUT
            // with a hashCode that has the score
            
            document.location = quiz[cursor].nextPage + "#" + updatedTotal;
            
            
        })

        function getTotalScore() {
            //we are gonna read the score from the hash in the URL
            
            console.log("Your score as of now = " + window.location.hash)
        }
        
})