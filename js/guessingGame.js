/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;
var winningNumber;
var guessArray = [];
var guessesLeft = 5;


generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	var min = 1;
	var max  = 100;
	winningNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log("winnging number is: " + winningNumber);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	playersGuess = +$('#guess').val();
	console.log("guess is: " + playersGuess);
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
	if (playersGuess === winningNumber) {
		console.log("Player wins");
		clearTextFields();
		$('#results').text("You win!");
	} else if (guessArray.indexOf(playersGuess) > -1) {
		console.log("You've already guess " + playersGuess);
		clearTextFields();
		$('#results').text("You've already guess " + playersGuess);
	} else {
		console.log("Incorrect guess");
		guessArray.push(playersGuess);
		guessesLeft--;
		clearTextFields();
		$('#results').text("Try Again.  " + guessesLeft + " guesses left.");
		guessMessage();
	}
}

function guessMessage() {
	var diff = Math.abs(playersGuess - winningNumber);
	console.log("win number is " + winningNumber);
	console.log("diff is " + diff);
	var rounded = Math.ceil(diff / 10) * 10;
	var highlow = lowerOrHigher();
	var msg = "Your guess is " + highlow + " and within " + rounded + " digits of the winning number";
	$('#feedback').text(msg);
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	var num1 = generateWinningNumber();
	var num2 = generateWinningNumber();
	clearTextFields();
	$('#hint').text("One of these is the winning number: " + num1 + "," + winningNumber + "," + num2);
}

// Allow the "Player" to Play Again

function playAgain(){
	clearTextFields();
	guessesLeft = 5;
	guessArray = [];
	generateWinningNumber();
}

function clearTextFields() {
	$('#results').text("");
	$('#feedback').text("");
	$('#hint').text("");
}

/* **** Event Listeners/Handlers ****  */

