

//var printElem() {
//    var content = document.getElementById("");
//    var mywindow= window.open ('','Print', 'height=300,width=300');
//    
//    mywindow.document.write('<html><head><title>Print</title>');
//    
//}


function printElem (){
    var allParts = document.getElementById("case").children;
    var text = "";
    
    for (var i = 0; i < allParts.length; i++){
        text = text + allParts[i];
    }

    document.getElementById("demo").innerHTML = text;

    console.log(allParts);
}