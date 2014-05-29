/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
// Cliston Payne
// 05/29/14
// Goal 7 Advance Objects Person Blueprint

(function)(){
    //added the Person object to the global window-- main.js file will need this
    window.Person = Person;
    //giving actions and jobs for the person instances
    Person.jobs = ["Marine","Police Officer","Dental Assistant","Construction Foremen","Teacher" ];
    Person.actions = ["Training", "Break","Resting","Working"];

        function Person(name, row){
            console.log("Person Created: ", name);

            this.name = name;
            //setting the action for each person to be random
            this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

            //set job to be random
            this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

            //
        }
}