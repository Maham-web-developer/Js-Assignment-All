// ===========chapter 9 - 11=============
// Question 1
// var readline = ('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter a city name: ", (cityName) => {
//   if (cityName.toLowerCase() === "karachi") {
//     console.log("Welcome to the city of lights");
//   }

//   rl.close();
// });

//Question 2
// var gender = prompt("Please enter your gender (male/female):");

// if (gender.toLowerCase() === "male") {
//   console.log("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//   console.log("Good Morning Ma'am.");
// } else {
//   console.log("Invalid input. Please enter either "male" or "female".");
// }

//Question 4
// var userInput = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
// checkFuel(userInput);
// if (fuel < 0.25) {
//   console.log("Please refill the fuel in your car.");
// } else {
//   console.log("You have enough fuel in your car.");
// }

//Question 5
// var a = 4; if (++a === 5) { alert("Given condition for variable a is true"); }
// a:output true

// var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }
//b:false

// var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); }
//  if (++c < 14) 
// { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }
//C:output condition 2 and 4 true
//output condition 1 and 3 undefined false

// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
 //d:output true

 //if (true) { alert("True"); } 
 //e:true
// if (false) { alert("False"); }
//e:false

//if ("car" < "cat") { alert("car is smaller than cat"); }
//f:true

//Question 6
// var calculateGrade="subject1, subject2, subject3, totalMarks" 
//   var totalObtainedMarks = "subject1 + subject2 + subject3";


//   var percentage = (totalObtainedMarks / totalMarks) * 100;


//   var grade;
//   if (percentage >= 90) {
//     grade = "A+";
//   } else if (percentage >= 80) {
//     grade = "A";
//   } else if (percentage >= 70) {
//     grade = "B";
//   } else if (percentage >= 60) {
//     grade = "C";
//   } else if (percentage >= 50) {
//     grade = "D";
//   } else {
//     grade = "Fail";
//   }
//   console.log("Percentage:", percentage.toFixed(2) + "%");
//   console.log("Grade:", grade);

//  var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
//  var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
//  var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
//  var totalMarks = parseFloat(prompt("Enter total marks:"));

// var calculateGrade="subject1Marks, subject2Marks, subject3Marks, totalMarks";

//Question 7
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//   console.log("Bingo! Correct answer");
// } else {
//   console.log('Oops! Wrong guess');
// }

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//   console.log("Bingo! Correct answer");
// } else {
//   console.log("Oops! Wrong guess");
// }

//Question 8
// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//   console.log("The number is divisible by 3");
// } else {
//   console.log("The number is not divisible by 3");
// }

//Question 9
// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }

//Question 10
// var temperature = parseFloat(prompt("Enter the temperature:"));
// if (temperature > 40) {
//   console.log("It is too hot outside.");
// } else if (temperature > 30) {
//   console.log("The weather today is Normal.");
// } else if (temperature > 20) {
//   console.log("Today's weather is cool.");
// } else if (temperature > 10) {
//   console.log("OMG! Today’s weather is so Cool.");
// } else {
//   console.log("Temperature is too low to provide a message.");
// }

//Question 11
// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt('Enter the operation (+, -, *, /, %):');
// var result;

// if (operation === "+") {
//   result = firstNumber + secondNumber;
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
// } else if (operation === "/") {
//   result = firstNumber / secondNumber;
// } else if (operation === "%") {
//   result = firstNumber % secondNumber;
// } else {
//   console.log("Invalid operation");
//   process.exit();
// }
// console.log("Result:", result);

// ==============Chapter 9-11 complete===========






