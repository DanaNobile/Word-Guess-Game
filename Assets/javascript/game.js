

var Answers = ["dancer", "wheel", "pigeon", "handstand", "reverse warrior"];
var remaining = [];
var guessed = [];

document.getElementById("wins").innerHTML = "_ _ _ _ _";

document.getElementById("wins").innerHTML = "0";

document.getElementById("word").innerHTML = "0"

document.getElementById("remaining").innerHTML = "0"

document.getElementById("guessed").innerHTML ="0"

document.onkeypress = function(event){
    console.log(event.key)
};