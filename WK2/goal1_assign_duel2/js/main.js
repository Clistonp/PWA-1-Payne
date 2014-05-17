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

        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        for (var i = 0;  i < 10; i++){

            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

            //inflict Damage
            fighter1[2] -= f1;
            fighter2[2] -= f2;

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

        return result;
    };


    fight();


})();