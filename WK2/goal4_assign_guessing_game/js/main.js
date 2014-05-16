
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
    };

                                         //Now we play the game


    //updates the variables
    var playGame = function(){
        remainingGuess--;
        guessesMade++;
        gameState = "Guess: " + guessesMade + ", Remaining: " + remainingGuess;

        playerGuess = parseInt(input.value);
            // if and if else and else statements that give a hint at the number and if you win the game or loose and need to refresh
        if (playerGuess > magicNum){
            dom.output.innerHTML = "Your Number is to high." + gameState;

        }else if(playerGuess < magicNum){
            dom.output.innerHTML = "Your Number is to Low. " + gameState;

        }else if (playerGuess === magicNum){
            dom.output.innerHTML = "You are the Champion Hit reload and see if you can do it again." + gameState;
        };

                          // if Statement for when the game is over
        if (remainingGuess < 1){
            dom.output.innerHTML = " You lost but should try your luck again reload page."
            console.log("Game Over : remainingGuess is < 1");
            gameOver(false);
        };

    };
         // Game over function
    var gameOver = function(win){

        if (win){
            dom.output.InnerHTML     // if you win
            = "Yes it is " + magicNum + "!" + "<br>"
            + "It only took " + guessesMade + "trys.";
        }else{
            dom.output.innerHTML   //  if you lose
            = "No more guesses left." + "<br>"
            + "The Number was: " + magicNum + ".";

        };

        dom.button.removeEventListener("click", clickFn, false); // disables the button addEventListener

    }

       var oneKeyDown = function(e){
           if(e.keyCode === 13){
               validateInput();
           };
       };

    console.log(magicNum);
    // add the eventListner method
    dom.button.addEventListener("click", clickFn, false);

    //listening for the enter key
    window.addEventListener("keydown", onKeyDown, false);


})();