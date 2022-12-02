//  How do we assign a value to a variable?
    //  The assignment operator (=)
    //  let variable = value;
// How do we change the value of a variable?
    //  We can change the value of a variable with the different operators such as arithmetic (+, -, *, /)
//  How do we assign an existing variable to a new variable?
    //  The value of a variable can be assignment with the assignment operator (=)
// Remind me, what are declare, assign, and define?
    //  Variables can be declared with the var, let, and const keywords without a value
    //  Variables can be assigned with the assignment operator (=)
    //  Variables can be defined with the var, let, and const keywords with a value
//  What is pseudocoding and why should you do it?
    //  Writing code in human readable form without a specific syntax.
    //  Pseudocode can be used to write detailed steps for creating an application with code.
    //  Pseudocode can also be presented to non-developers to explain how the app is made and will work.
//  What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    //  50%

    console.log("=====================================================\n\n")

    //  =======================================================
    //    B) Strings
    //===========================================================
    
    
    //  1.  Create a variable called firstVariable
    let firstVariable;
    
    //  2.  Assign it the value of the string "Hello World"
    firstVariable = "Hello World";
    
    //  3.  Change the value of this variable to some number
    firstVariable = 6;
    
    //  4.  Store the value of firstVariable in a new variable called secondVariable
    secondVariable = firstVariable;
    
    //  5.  Change the value of secondVariable to any string.
    secondVariable = "Any string"
    
    //  6.  What is the value of firstVariable?
    6
    
    //  7.  Create a variable called yourName and set it equal to your name as a string. 
    //      Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
    //      ex: Hello, my name is Jean Valjean
    const yourName = "MeceM";
    console.log(`Hello, my name is ${yourName}.`);
    
    
    console.log("\n\n========================================================================\n\n")
    
    
    
    
    //=======================================================
    //    C) Booleans
    //===========================================================
    

    


//const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');

// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false);
// console.log(e === 'Kevin');
// console.log(a != b - c);    // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a < a + d);     // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

console.log("=====================================================\n\n")
console.log("\n\n========================================================================\n\n")






//============================D. The farm==========================================
//Declare a variable animal. Set it to be either "cow" or something else
//Write code that will print out "mooooo" if the it is equal to cow
//Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
//Commit

let animal = "horse";
    if (animal == 'cow') {
        console.log('mooooo')
    } else {
        console.log('Hey, You"re not a cow')
    }


    //animal = 'cow'
    //animal = 'horse'

    console.log("\n\n========================================================================\n\n")
/*E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."*/


let yourAge = 10;
if (yourAge >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you are toooo young.")
}

console.log("\n\n==================================================================\n")

/*
===========================II. Loops==========================
Remember: USE let when you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)*/


//==============================A. The basics=============================================
//Write a loop that will print out all the numbers from 0 to 10, inclusive

/*for (let i = 0; i <= 10; i++){
    console.log(i)
}
console.log("\n\n================================================================================\n")
//Write a loop that will print out all the numbers from 10 up to and including 400
for (let y = 10; y <= 400; y++) {
    console.log(y)
}
console.log("\n\n=======================================\n\n")
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let j = 12; j <= 4000; j= j + 3) {
    console.log(j)
}
console.log('\n\n=====================================\n\n')
B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"*/

for (let i = 0; i <= 100; i++) {
    if (i % 2 ===0){
        console.log(i + " is an even number");
    } else {
        console.log("I'm odd")
    }
}
console.log("\n\n================================\n\n")

/*
C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:
I found a 5. High five!
I found a 10. High five!*/

for (let i = 0; i <= 100; i++){
    if(i === 0){
        console.log("I am zero")
    }
    else if(i % 5 === 0 && i % 3 ===0) {
        console.log(`I found a ${i}. High five!`)
        console.log(`I found a ${i}. Three is a crowd.`)
    }else {
        if(i % 3 ===0) {
            console.log(`I found a ${i}. Three is a crowd.`)
        }
        else if (i % 5 === 0) {
            console.log(`I found a ${i}. High five!`)
        }
    }
}


/*Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:
I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!
For numbers divisible by both three and five, be sure your code prints both messages*/
console.log("\n\n===========================================\n\n")

/*
D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.
You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.*/


let bank_account = 0;
for (let i = 1; i <= 100; i++){
    bank_account += i;
}

console.log(bank_account)

bank_account = 0;
for (let i = 1; i <= 100; i++){
    bank_account += i * 2;
}

console.log(bank_account)

console.log("\n\n================================\n")
/*
=================III. Arrays & Control flow==========
A. Talk about it:
What are the things in an array called?
******an 'ELEMENT'******
Do Arrays guarantee those things will be in order?
******Arrays do NOT guarantee order*****
What real-life thing could you model with an array?
*******list of names, people, places, etc.*****
*/

//==============B. Easy Does It===============
//Create an array that contains three quotes and store it in a variable called quotes

const quotes = ['Move!', 'birs can fly!', 'turtles can teleport!']
console.log('\n\n===================================\n')


//=================C. Accessing elements========
//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]

console.log('\n\n==========randomThings Array===================\n\n')

//How do you access the 1st element in the array?
console.log(randomThings[0])



//Change the value of "Hello"to "World"
randomThings[2] = "World";

//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)
console.log('\n\n=============================\n\n')
/*
================D. Change values================
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
What would you write to access the 3rd element of the array?*/

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])

//Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat"
//Add a new element, "Cloud City" to the array

ourClass.push("Cloud City")
console.log(ourClass)
console.log('\n\n=======================================================================\n\n')

