var ranNums = Math.floor(Math.random() * 100);
var numsToAdd = []

var red;
var blue;
var yellow;
var green;


red = Math.floor(Math.random() * 11);
blue = Math.floor(Math.random() * 6);
yellow = Math.floor(Math.random() * 21);
green = Math.floor(Math.random() * 2);

numsToAdd = [ red + blue + yellow + green ];

var results = red + blue + yellow + green ;

function randomWholeNum() {

  // Only change code below this line.


  return Math.random();
}

$('#randomNumber').html(ranNums);


$('#totalScore').html(numsToAdd);

  if(numsToAdd == ranNums) {

   alert("you win");

  }
  else if (numsToAdd > ranNums) {

  	alert ("You Lose")
  }

  
//   alert ("you lose")


// create a variable that holds total numbers//

