var ranNums = Math.floor(Math.random() * 100);
var numsToAdd = []

// var red;
// var blue;
// var yellow;
// var green;
// var wins;
// var losses;


var red = Math.floor(Math.random() * 15);
var blue = Math.floor(Math.random() * 6);
var yellow = Math.floor(Math.random() * 21);
var green = Math.floor(Math.random() * 2);
var results = red + blue + yellow + green ;
var wins = 0;
var losses = 0;

var numsToAdd = [ red + blue + yellow + green ];



// function randomWholeNum() {

//   // Only change code below this line.


//   return Math.random();
// }

$('#randomNumber').html(ranNums);


$('#totalScore').html(numsToAdd);




  if(numsToAdd == ranNums) {

   wins ++
   
   alert("you win");

  }
  else if (numsToAdd > ranNums) {

  	losses++
  	
  	alert ("You Lose")
  }
$('#winner').html(wins);
$('#losser').html(losses);
//   alert ("you lose")


// create a variable that holds total numbers//

