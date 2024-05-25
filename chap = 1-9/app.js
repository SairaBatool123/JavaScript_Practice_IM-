// 1.
alert("Hello World");

console.log("Hi EveryOne Saira Here");

// 2. Variable for string " "
var rollNumber = "45";
var RollNumber = "55";

console.log("Roll: " , rollNumber); //45

rollNumber = "56";
// when you update ypur variable name or a value you don't menstion it there name just call with their name 

console.log("Roll: " , rollNumber); //56

// 3. Variable for string " "
var rollNumber; //jb tk value nhi
console.log("Roll: ", rollNumber) //undefine

rollNumber = "55";
console.log("Roll: " , rollNumber);
rollNumber = "56";
console.log("Roll: " , rollNumber);

// 4. 
var firstName = "Saira ";
var lastName = "Batool";

var fullName = firstName + lastName;
console.log(fullName);

// OR 

// console.log(firstName + " " + lastName);

// 5. Variable for Numbers (In this we can calculate a numbers)
var balance = 420;
console.log("balance: ", balance);   //420

balance = balance - 12;  
console.log("balance: ", balance);   //408

// OR: Another example in js string change in number when calculation is applied on it'

var balance = "420";
console.log("balance: ", balance);   //420 as a text (string: color change)

balance = balance - "12";  
console.log("balance: ", balance);   //408 as a number

// OR:

var balance = "420a";
console.log("balance: ", balance);   //420a

balance = balance - "12";  //420a to yeh number nhi hai
console.log("balance: ", balance);   //NaN

// OR:

var balance = "420";
console.log("balance: ", balance);   //420

balance = balance + "12";  
console.log("balance: ", balance);   //42012 (string: color change)

const TOTAL = 45; //convention
TOTAL = 50 ; //error constant does not change

// Arithmetic Operator +,-,*,/,%

// 6.
// Simple Calculator for +,-,/,*
// user input (return a value)
var num1 = prompt("Enter a First Number");
var num2 = prompt("Enter a Second Number");

// we use Number for a floating point number values  
num1 = Number(num1);
num2 = Number(num2);

var result = num1 + num2;

alert("Sum is: " + result);

// 7.
// post: fristly return and then add  
var num1 = 5; //6
var num2 = num1++;

console.log("num1: ", num1); //6
console.log("num2: ", num2); //5

// 8.
var num1 = 5;
num1 = num1 + 1;
// OR: 
// num1++; //6 also called unary operator
console.log("num1: ", num1); //6

// 9.
var num1 = 3; //2   1
var num2 = 5; //6   5 

var result = --num1 + num2++ - num2-- - num1--;
// var result = 2   +   5    -  6     -   2      // -1
// post and pre difference is pre means to do in before post means to hold for a moment after a execution add init and return that on to the second time when we call or print them 
console.log("result: ", result);

// 10. (Concatenate)
var msg1 = "Hi";
var userName = "Saira";
var banger = "!";

var conculde = msg1 + userName + banger;
alert(conculde);
// OR: 
alert("2" + "2")  //22
// OR: 
alert("2 plus 2 equal " + 2 + 2); //2 plus 2 equal 22
// OR: 
alert("2 plus 2 equal " - 2 + 2); //NaN 2 plus 2 equal
// OR: 
alert("2" - 2 + 2); //2 (it try to changr from string to a number )

// 11.
var result = "abc" + 2 * 4;

console.log("result: ", result); //abc8

var result = ("abc" + 2) * 4;

console.log("result: ", result); //NaN
