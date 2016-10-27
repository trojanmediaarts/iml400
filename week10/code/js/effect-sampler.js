console.log($("select option:selected").val())

$("button").on("click", function() {
    var currentOption = $("select").children(":selected").val();
    
    if( currentOption == "fade") {
        runFadeEffect();
    } else if( currentOption == "toggle") {
        runToggleEffect();
    } else if( currentOption == "slide") {
        runSlideEffect();
    } else if( currentOption == "slideToggle") {
        runSlideToggleEffect();
    } else if( currentOption == "show/hide") {
        
        runShowHideEffect();
    }
    
})


function runFadeEffect() {
    var visible = $("#card1").is(":visible");
    
    if(visible) {
        $("#card1").fadeOut();
    } else {
        $("#card1").fadeIn();        
    }
}


function runToggleEffect() {
    $("#card1").toggle();
    return;
}


function runSlideEffect() {
    var visible = $("#card1").is(":visible");
    
    if(visible) {
        $("#card1").slideUp();
    } else {
        $("#card1").slideDown();        
    }
}


function runSlideToggleEffect() {
    $("#card1").slideToggle();
}


function runShowHideEffect() {
    var visible = $("#card1").is(":visible");
    
    if(visible) {
        $("#card1").hide();
    } else {
        $("#card1").show();        
    }
}
