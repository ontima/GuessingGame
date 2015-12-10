/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;
var winningNumber;
var guessArray = [];
var guessesLeft = 5;


winningNumber = generateRandomNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateRandomNumber(){
	var min = 1;
	var max  = 100;
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	//console.log("winnging number is: " + num);
	return num;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = +$('#guess').val();
	//console.log("guess is: " + playersGuess);
	$('#guess').val("Enter a number 1-100");
	checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	if (playersGuess < winningNumber) {
		return ("lower");
	} else {
		return ("higher");
	}
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	if (playersGuess < 0 || playersGuess > 100) {
		clearTextFields();
		$('#results').text("Invalid number. Enter a number between 1-100");
	} else {
		if (playersGuess === winningNumber) {
			//console.log("Player wins");
			clearTextFields();
			changeBgTextColors("yellow", "red");
			$('#results').text("You win!");
		} else if (guessArray.indexOf(playersGuess) > -1) {
			//console.log("You've already guess " + playersGuess);
			clearTextFields();
			$('#results').text("You've already guess " + playersGuess);
		} else {
			//console.log("Incorrect guess");
			guessArray.push(playersGuess);
			guessesLeft--;
			clearTextFields();
			if (guessesLeft > 0) {
				$('#results').text("Try Again.  " + guessesLeft + " guesses left.");
				guessMessage();
			} else {
				changeBgTextColors("red", "black");
				$('#results').text("You lost!");
			}
		}
	}
}

function guessMessage() {
	var diff = Math.abs(playersGuess - winningNumber);
	//console.log("win number is " + winningNumber);
	//console.log("diff is " + diff);
	var rounded = Math.ceil(diff / 10) * 10;
	var highlow = lowerOrHigher();
	var msg = "Your guess is " + highlow + " and within " + rounded + " digits of the winning number";
	$('#feedback').text(msg);
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	var num1 = generateRandomNumber();
	var num2 = generateRandomNumber();
	clearTextFields();
	$('#hint').text("One of these is the winning number: " + num1 + "," + winningNumber + "," + num2);
}

// Allow the "Player" to Play Again

function playAgain(){
	clearTextFields();
	guessesLeft = 5;
	guessArray = [];
	winningNumber = generateRandomNumber();
	changeBgTextColors("white", "#747704");
}

function clearTextFields() {
	$('#results').text("");
	$('#feedback').text("");
	$('#hint').text("");
}

function changeBgTextColors(c1, c2) {
	$('#resultdiv').css({"background-color":c1});
	$('#results').css({"color":c2});
}

/* **** Event Listeners/Handlers ****  */

//to catch return key
$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) {
    	e.preventDefault();
        playersGuessSubmission();
    }
});