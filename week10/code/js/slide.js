//A flag to let us know what state the div is in
var up = false;
$("#btnMove").on("click", function() {    
    if(!up) {
        $("#card1").slideUp();
        // toggle the flag because it is slid up now
        up = true;
    } else {
        $("#card1").slideDown();
        // toggle the flag because it is slid down now
        up = false;
    }
})