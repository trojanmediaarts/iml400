//$("video").play();
//console.log("got the video...")
//console.log($("video"));

//A flag to let us know what state the div is in
var up = false;
$("#btnMove").on("click", function() {    
    if(!up) {
        vidPlay();
        $("#card1").slideUp(1000,vidPause);
        // toggle the flag because it is slid up now
        up = true;
    } else {
        vidPlay();
        $("#card1").slideDown(1000,vidPause);
        // toggle the flag because it is slid down now
        up = false;
    }
})

function vidPlay() {
    $("video")[0].play();
}

function vidPause() {
    $("video")[0].pause();
}