
/*
 * GUESSING GAME:
 *
 * Created By: Cliston Payne
 * Date: 5/16/2014
 *
 * GUESSING GAME
 */

//Game variables
(function (){
    //Variables for guesses
    var playerGuess = 0;
    var remainingGuess = 3;
    var guessesMade = 0;


    //Variable that has the computer choose a random number
    //The number 1 is the computers starting point and 10 is the max number
    var computersNum = Math.floor((Math.random() * 10) + 1);

    //Defining the DOM Elements as objects
    var dom ={
        input: document.querySelector("input"),
        output: document.querySelector("output"),
        button: document.querySelector("button")

    };
      // Console logs the number of guess the player has remaining
    var clickfn = function(e){
        console.log(remainingGuess);
        validateInput();

    };






})();