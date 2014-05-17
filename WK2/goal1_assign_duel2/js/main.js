
//self executing function
(function(){
    console.log("Fight!!!");
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
    var round=0;

    function fight(){
        //console.log("in the fight function");
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        for (var i = 0;  i < 10; i++){

            var minDamage1 = playerOneDamage * .5;
            var minDamage2 = playerTwoDamage * .5;
            var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);
            //console.log(f1);
            //console.log(f2);
            //inflict Damage
            playerOneHealth -= f1;
            playerTwoHealth -= f2;
            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);
            console.log(playerOneName+":"+playerOneHealth+"  "+playerTwoName+":"+playerTwoHealth);

            var result = winnerCheck();
            console.log(result);

            if (result === "No Winner") {
                round++;
                alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
            }else{
                alert(result);
                break;
            };
        };

    };



    function winnerCheck() {
        //console.log("in winnerCheck fn")

        var result = "No Winner";

        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both are Dead";
        } else if (playerOneHealth<1)
        {
            result = playerTwoName+ "WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+ "WINS!!!"
        };

        return result;
    };

    //console.log("program start")
    fight();


})();