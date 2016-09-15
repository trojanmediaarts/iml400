/* ----- */
// Replace YOUR NAME with yours

var NAME = "Rhazes";
console.log( "/*****************/\n" + NAME +"'s submission \nfor Whodat Assignment" + "\n/*****************/\n");



/*
 * CHALLENGES
 *
 * Complete as many of the following challenges 
 * that you can. Simply put your code where indicated
 * and when you have completed a challenge
 * the delete the not in the 'not completed' message
 * if you try and don't get it then change the log message to 
 * something else. (e.g. 'attempted', 'attempted but javascript stinks', 
 * 'attempted but the instructor stinks', ...)
 */




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch1											*/	
/*	Change the color of the wings on  			*/	
/*	1st owl to a different color				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 1...');

//paste your code here...and delete
console.log('\tnot completed')

var myResult = document.getElementsByClassName('wing_L');
myResult[0].setAttribute( "style", "background-color: purple");

var myResultRight = document.getElementsByClassName('wing_R');
myResultRight[0].setAttribute( "style", "background-color: deeppink");

// var $wingR = document.getElementsByClassName('wing_R')[0];
// var $wingL = document.getElementsByClassName('wing_L')[0];
// $wingL.setAttribute("style","background-color: red");
// $wingR.setAttribute("style","background-color: red");


/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch2											*/	
/*	Change the background color of the cage  	*/	
/*	on the 1st row at the end					*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 2...');
console.log('\tnot completed')
//paste your code here...

var daCage = document.getElementsByClassName('cage')
daCage[2].setAttribute('style', 'background-color: black')


/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch3											*/	
/*	Change the length of the beak for the owl	*/	
/*	at the end of the second row				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/

/** 		HINT		 **/
// to change the length of the beak you need to change
// the pixel value of:
// border-top
// e.g.
// changing:
// border-top: 60px solid goldenrod;
// to
// border-top: 120px solid goldenrod;
// would double the length of the beak.
/** ---		----	---	 **/

console.log('...challenge 3...');
console.log('\tnot completed')
//paste your code here...

document.querySelector("#container > div:nth-child(2) > div:nth-child(3) > section.beak").setAttribute("style","border-top: 60px solid magenta")
// var $beak = document.getElementsByClassName('beak')[5];
// $beak.setAttribute("style","border-top-width: 120px;")



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch4											*/	
/*	Write a function that takes a number		*/	
/*  and returns the cage on the page that 		*/
/* 	corresponds to that number 					*/
/* 		e.g. calling 							*/
/*				getCage(0)						*/
/*		would return <section class="cage" ...	*/
/*					 </section>					*/
/*												*/					
/*				html Tag for the first cage     */					
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 4...');
console.log('\tnot completed')

// This function assumes that you are counting from 1 not O!!!
function getCage( aNumber ) {
//   aNumber--;
  aNumber = aNumber - 1;
  var res = document.getElementsByClassName('cage')[aNumber];
  return res;
}

console.log("this is a test of my function..I am gonna get the 4th cage...")
var mytestCage = getCage(3)
console.log(mytestCage);



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch5											*/	
/*	Change the colors of the cages and owls		*/	
/*	in the middle column to be the same			*/
/*												*/	
/*												*/	
/*  HINTkey: "value", 							*/
/*  If you got Ch4 then you should be able to 	*/
/* 	you should be able to use that function to 	*/
/*	assist you 									*/
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 5...');
console.log('\tnot completed')
//paste your code here...






/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch6											*/	
/*	Write functions that take an owl element	*/	
/* 	as an argument and return the html sections */
/*	of different body parts						*/
/*												*/	
/*	see functions below for hints				*/	
/*												*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 6...');
console.log('\tnot completed')
//paste your code here...

function getWings(anOwl) {
	return wings;
}

function getBeak(anOwl) {
	return wings;
}

function getEyes(anOwl) {
	return eyes;
}

function getBody(anOwl) {
	return body;
}

function getPupils(anOwl) {

}


