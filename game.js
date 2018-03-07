/*
    Create a list of possible puzzles
    
    Listen for a key to be pressed to start the game
    
    Randomize the list of puzzles

    Select the first puzzle to be solved.

    Listen for keyboard input
        if the user gueses a letter correctly, display that letter wherever it exists in the puzzle

        if the user guesses incorrectly
            add that letter to the "already guessed"
            decrement number remaining guesses
            display a new part of the hangman
        
        if the user wins or loses the game
            increment win counter if applicable
            restart game with new puzzle
*/

var puzzles = ["cat","dogs", "cougars", "panthers", "elephants", "giraffes"];
var currentPuzzles = puzzles[4];
var guessRemain = 10;
var solvedPuzzle = [];
var badGuess = [];
var wins = 0;
var loss = 0;
var listGuess = $("#listGuess");
    for(var i=0; i<currentPuzzles.length; i++) {
        var currentLetter = currentPuzzles.charAt(i);
    // create a new element
        var element = $("<li>");
        element.text("_");
        listGuess.append(element);
    }

    $("#guessRemain").text(guessRemain);

document.onkeyup = function(event) {
    var guess = event.key;
   
    var guessIndex = currentPuzzles.indexOf(guess);
    if (guessIndex === -1 && badGuess.indexOf(guess) === -1) {
        guessRemain--; 
        badGuess.push(guess);
        $("#guessRemain").text(guessRemain);
    }
    while(guessIndex != -1) {
        solvedPuzzle[guessIndex] = guess;
        $("#listGuess li:nth-child("+(guessIndex + 1)+")").text(guess);
        guessIndex = currentPuzzles.indexOf(guess, guessIndex + 1);
        
    }
    console.log(solvedPuzzle);
    console.log("guesses remain:",guessRemain);

    if (guessRemain == 0) {
        loss++;
        $("#loss").text(loss);
    }
    // if the solved puzzle matches the current puzzle, you win
    // join turns an array into a string, the argument is the delimiter
    if(solvedPuzzle.join("").toLowerCase() === currentPuzzles.toLowerCase()) {
        wins++;
        $("#wins").text(wins);
    }

    //To do error check data
};


var game = {

};