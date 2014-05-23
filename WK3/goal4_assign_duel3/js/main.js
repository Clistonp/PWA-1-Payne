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

    console.log()
    //adding a event listener
    button.addEventListener("click", fight, false);
//player names damage and health into an array of objects//
    var fighters = [
        {
            name: "Kabal",
            damage: 20,
            health: 100
        },
        {   name: "Kratos",
            damage: 20,
            health: 100
        }];

//Round number
    var round = 1;

    //Creating the text for the top of the page using the Dom
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
    round_txt.innerHTML = "Clicky on the Fight button to start the battle Royal!!";

//Creating the fight function for the Epic battle...
    function fight(){
        // alert box for the duration of the fight
        //alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        //for (var i = 0;  i < 10; i++){
            // variable that determines the damage done by each fighter randomly
           // var minDamage1 = fighter1[1] * .5;
           // var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5);

            //inflict Damage
            fighters[0] -= f1;
            fighters[1] -= f2;
            // logs the fighters health after each round
            console.log(fighters[0].health, fighters[1].health);

            var result = winnerCheck();
            console.log(result);
            round_txt.innerHTML = "Round #" + round +" Results:";
            round++;

            //if and else statements to check if there is a winner, continues to next round if there is no winner
            if (result === "No Winner")
            {
                fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
            }else{
                fighter1_txt.innerHTML = results;
                fighter2_txt.innerHTML = "";

               // disable the fight button
                button.removeEventListener("click", fight, false);

                document.querySelector(".buttonblue").innerHTML = "DONE!!";
            }






       // };

    };



    function winnerCheck() {

        // if statements that displays a result for the winner of the Fight
        var result = "No Winner";

        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
            result = "You Both are Dead";
        } else if (fighters[0].health < 1)
        {
            result = fighters[1].name + "WINS!!!"
        } else if (fighters[1].health < 1)
        {
            result = fighters[0].name + "WINS!!!"
        };

        return result; // returns the result of the match
    };





})();