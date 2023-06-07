// =============Chapter 6-9=========
// Question 1
// var value = 11;
// var nowValue1 =11;
// var value1 =11;
// var nowValue2 =12;
// var value2 =11;
// var nowValue3 =12;
// var value3 =11;
// var nowValue4 =10;
// document.write("The value of + + a is: " + value + "<br>");
// document.write("Now the value of a is: " + nowValue1+"<br>"+"<br>");
// document.write("The value of a + + is: " + value1+ "<br>");
// document.write("Now the value of a is: " + nowValue2+ "<br>"+"<br>");
// document.write("The value of - - a is: " + value2+ "<br>");
// document.write("Now the value of a is: " + nowValue3 +"<br>"+"<br>");
// document.write("The value of a - - is: " + value3+ "<br>");
// document.write("Now the value of a is: " + nowValue4 +"<br>"+"<br>");

// Question 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is" + a + "<br>");
// document.write("b is" + b + "<br>");
// document.write("result is" + result +"<br>");

// Question 3
// var name = prompt("Please enter your name:");
// document.write("Hello, "+name  + "!");

//Question 4
// var num = prompt("Please enter a number:");
// num = parseInt(num);
// if (num) {
//     num = 5;
// }
// document.write("<h2>Multiplication Table for " + num + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }

//Question 5
// var subject1 = prompt("Enter name of first subject:");
// var subject2 = prompt("Enter name of second subject:");
// var subject3 = prompt("Enter name of third subject:");

// var totalMarks = 100;

// var marks1 = prompt("Enter obtained marks for " + subject1 + ":");
// var marks2 = prompt("Enter obtained marks for " + subject2 + ":");
// var marks3 = prompt("Enter obtained marks for " + subject3 + ":");

// marks1 = parseInt(marks1);
// marks2 = parseInt(marks2);
// marks3 = parseInt(marks3);

// var totalObtained = marks1 + marks2 + marks3;
// var percentage = (totalObtained / (3 * totalMarks)) * 100;

// document.write("<h2>Result Calculation</h2>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + marks1 + "</td><td>" + totalMarks + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + marks2 + "</td><td>" + totalMarks + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + marks3 + "</td><td>" + totalMarks + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + totalObtained + "</th><th>" + (3 * totalMarks) + "</th></tr>");
// document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");
// ----------assignment 6-9 complete-----