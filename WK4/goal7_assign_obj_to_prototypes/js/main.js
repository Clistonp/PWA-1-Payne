/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
// Cliston Payne
// 05/29/14
// Goal 7 Advance Objects

(function(){

    //Defining the Variablees
    var numPeople = 3;
    var peeps = [];
    var names = ["Cliston", "Cooper", "Mckenna", "Gwen", "Ragnar", "John Snow", "Stephanie"];
    var interval;

    // creating a loop that creates 3 person objects perload
    for (var z = 0; z < numPeople; z++) {

        //Generate a number up to the names.lengthwhich is 5
        var peepsIndex = Math.floor(Math.random()* names.length);

        //use a keyword to set up a new person

        var person = new Person(names[peepsIndex], z + 1);

        populateHTML(person.name,"r" + (z + 1) + "c1");
        populateHTML(person.job, "r" + (z + 1) + "c2");

        people.push(person);
        names.splice(peepsIndex, 1);

    }
    //makes sure only one interval is running at a time and clears out the old one in time for the new one
    clearInterval(interval);

    //set the interval to 30 seconds
    // set interval will continue to call tg function until the clear interval is called or the window is closed
    interval = setInterval(runUpdate, 1000 / 30);

    function populateHTML(data,field){
        var id = documnet.getElementById(field);

    }


}
