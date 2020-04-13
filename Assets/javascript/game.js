
//Variables//

var answers = ["dancer", "wheel", "pigeon", "handstand", " warrior"];
var wins = [];
var currentWord = [];
var remaining = [];
var guessed = [];


// Functions//
document.getElementById("blanks").innerHTML = "0";

document.getElementById("wins").innerHTML = "0";

document.getElementById("word").innerHTML = "0";

document.getElementById("remaining").innerHTML = "0";

document.getElementById("guessed").innerHTML ="0";

 function updateScore(){
     document.userInput ("#wins").innerHTML = "Wins: " + wins;
 }



// Attempt at input //    


document.onkeyup = function(event){
var userInput = event.key.toLowerCase();

if (userInput == "d" || userInput == "a" || userInput == "n" || userInput == "c" || userInput == "e" || userInput == "r"){
score ++;
updateScore();
}
}








//////////////////////////////////////////////
// This function is run anytime a key is pressed //
document.onkeyup = function(event){
    console.log(event.key)
}
//////////////////////////////////////////////



// 1. Gather user Input
// 2. Check for letters
// 3. Trigger an event listener if pressed keys matched
// 4. Compare value of user input to word answer value
      // if equal do this
      // if not equal do this
// 5. Win Logic
// 6. Lose Logic

// .push is an element to prompt an array
// Need to use "on listeners" so example get element by id