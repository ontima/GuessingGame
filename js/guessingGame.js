/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess;
var winningNumber;


$(document).ready(function() {
	winningNumber = generateWinningNumber();
	console.log("winnging number is: " + winningNumber);

	//$('#submitGuessForm').on('click', '#submitButton', playersGuessSubmission);

});



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	var min = 1;
	var max  = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fetch the Players Guess

function playersGuessSubmission(){
//	var guessField = $(this).closest('#submitGuessForm').find('#guess');
//	playersGuess = +$(this).closest('#submitGuessForm').find('#guess').val();
//	playersGuess = +guessField.val();
	playersGuess = +$('#guess').val();
	console.log("guess is: " + playersGuess);
	$('#guessInput').val("Enter a number 1-100");
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

