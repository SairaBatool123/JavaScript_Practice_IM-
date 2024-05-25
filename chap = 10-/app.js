// 1

var userInput = prompt("Enter A Temperature");

userInput = Number(userInput);
//  seperation of condition:
// var condition = userInput > 30   // Boolean Variable/Type Best Way (isCondition //is for boolean type convention)
// console.log("condition" , condition);
//  OR > Binary operator 2 oprands
if (userInput > 30) {
  console.log("Today is a hot day");
} else {
  console.log("Today is not a hot day");
}

// 2   (string) 
if ("cat") { //string literals
  console.log("condition is true");
}

// 3   (number)
if (0) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

// falsy value:
// "" , '' , ``   //(empty always be false)
// 0 or 0.0 or 0x0
// -0 or -0.0

// comparison operator
// === equallity operator

var result = 2 === 2; //true because its equal (Recomended)
// OR
var result = 2 == "2"; //it does not check the type just check the value //true

var result = "2" !== "2"; //false


// associativity is left to right > , >= , < and <=
var result = 2 > 2; //false 

var result = 2.0001 > 2; //true

var result = 2 !== "2"; //true
console.log("result", result);

var result = "cat" > 22; //false 

var result = "cat" > "dog"; //false Dictionary order (check 1st alphabetic order)

var result = "cat" > "can"; //true (check 3rd alphabetic order)

//dictionary order (Alphabetic order) lenght matter nhi kerti
// apple
// can
// cat
// dig
// dog

//dictionary order (Number order)
// 1
// 10
// 100000
// 114
// 12
// 2
// 21
// 3
// 4
// 5
// 6
// 7
// 8
// 9

var result = "1" < "1000"; //true

var result = "10000" < "114"; //false

var result = "21" <= 21 ; //true

var temp = +prompt("Enter Your Room Temp: ");

if (temp > 30) {
  console.log("bhot Garmi hai");
} else if (temp <= 30) {
  console.log("Abhi bhi thori garmi hai");
} else {
  console.log("thand hai");
}

var temp = -200;

if (temp > 30) {
    console.log("garmi hai");
}
else if(temp > 25){
    console.log("mosam thk hai");
}
else if(temp > 20){
    console.log("wear a jacket while riding on a bike");
}
else{ //temp <= 20
    console.log("wear a jacket thand hai");
}