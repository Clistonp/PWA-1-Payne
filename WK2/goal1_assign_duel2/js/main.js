/*Name: Cliston Payne

Assignment: Duel #2

Date:5/16/14

*/
//self executing function
(function(){
    console.log("Fight!!!");

//player names damage and health array
    var fighter1 = ["Kabal", 20, 100];
    var fighter2 = ["Kratos", 20, 100];


//Round number
    var round=0;

    function fight(){
        //console.log("in the fight function");
        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        for (var i = 0;  i < 10; i++){

            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[2]-minDamage2)+minDamage2);
            //console.log(f1);
            //console.log(f2);
            //inflict Damage
            fighter1[2] -= f1;
            fighter2[2] -= f2;
            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);
            console.log(fighter1[0]+":"+fighter1[2]+"  "+fighter2[0]+":"+fighter2[2]);

            var result = winnerCheck();
            console.log(result);
                            //if and else statements to check if there is a winner, continues to next round if there is no winner
            if (result === "No Winner") {
                round++;
                alert(fighter1[0] + ":" + fighter1[2] + " *ROUND " + round + " OVER* " + fighter2[0] + ":" + fighter2[2]);
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