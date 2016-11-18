$(document).ready( function() { 


        var quiz = [  
        {question:"What is your favorite color",  
                 options: ["red","yellow","purple","pink"],
                 mapping: ["pomegranate","mango","grape","dragonfruit"], 
                 nextPage: "page1.html"},       
        {question:"What is your favorite season",  options: ["summer","winter","fall","spring"], mapping: 2, nextPage: "page2.html"},
        {question:"Hard or Soft ?",  options: ["hard","soft"],  mapping: 1, nextPage: "page3.html"},
        {question:"Sweet or Sour ?",  options: ["sweet","sour"], mapping: 2, nextPage: "page4.html"},
        {question:"Messy or Clean ?", options: ["messy","clean"], mapping: 0, nextPage: "page5.html"}
        ]

        // **** this will only work because the index page has a different 
        // javascript *****

        var tally = {pomegranate: 0, mango: 0, grape: 0, dragonfruit: 0};  // keep track of the number of times that I responded with a certain question

        var nextPage = "page1.html"
        var cursor = 0;

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

        console.log("loaded..");
                
        loadCurrentQuestion();    
    
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

            var url = nextPage + "#" + currentTallyAsString;

            //go to the next page BUT
            // with a hashCode that has the score
            
            document.location = url;
            
            
        })
    
})