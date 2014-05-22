/**
 * Created by Clistonp on 5/22/14.
 */
/*Name: Cliston Payne

 Assignment: Duel #3

 Date:5/22/14

 */
//self executing function
(function(){
    console.log("Fight!!!"); //calls fight to the console.log

    var fighter1_txt = document.getElementById("kabal").querySelector("p");// Pulls the info for fighter Kabal
    var fighter2_txt = document.getElementById("kratos").querySelector("p");//pulls the info for the fighter Kratos
    var round_txt = document.querySelector("h4");// uses the test on H4
    var button = document.getElementById("fight_btn");// allows the use of the fight button







//player names damage and health array//
    var fighter1 = ["Kabal", 20, 100];
    var fighter2 = ["Kratos", 20, 100];

//Round number
    var round= 0;

    function fight(){
        // alert box for the duration of the fight
        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        for (var i = 0;  i < 10; i++){
            // variable that determines the damage done by each fighter randomly
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

            //inflict Damage
            fighter1[2] -= f1;
            fighter2[2] -= f2;
            // logs the fighters health after each round
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

        // if statements that displays a result for the winner of the Fight
        var result = "No Winner";

        if (fighter1[2]<1 && fighter2[2]<1)
        {
            result = "You Both are Dead";
        } else if (fighter1[2]<1)
        {
            result = fighter2[0]+ "WINS!!!"
        } else if (fighter2[2]<1)
        {
            result = fighter1[0]+ "WINS!!!"
        };

        return result; // returns the result of the match
    };


    fight();


})();