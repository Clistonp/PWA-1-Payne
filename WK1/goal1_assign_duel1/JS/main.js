/* Cliston Payne
   05/10/2014
   Assignment: The Duel #1
 */


//self executing function
(function(){
    console.log("fight");
//player names
    var playerOneName = "Kabal";
    var playerTwoName = "Kratos";


//player Damage
    var playerOneDamage = 20;
    var playerTwoDamage = 20;


//player Health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

//Round
    var round = 1;

    function fight(){
        console.log("in the fight function");
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        for (var i=0;  i < 10; i++){

           var minDamage1 = playerOneDamage * .5;
           var minDamage2 = playerTwoDamage * .5;
           var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
           var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);
            console.log(f1);
            console.log(f2);



        };
        winnerCheck()
    };



    function winnerCheck(){}
    console.log("program start")
    fight();


})();