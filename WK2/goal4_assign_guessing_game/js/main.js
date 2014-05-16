
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
    //Function that validates whether a number is placed in the guess box
    var validateInput = function(){
        playerGuess = parseInt(dom.input.value);
        if (isNaN(playerGuess)){
            dom.output.innerHTML ="Please enter a Number";

        }else if (playerGuess < 1 || playerGuess > 10){     //else if that makes sure the number if between 1 and 10
            dom.output.innerHTML = "Enter a Number between 1 and 10.";

        }else{
            playGame();
        };
    }






})();