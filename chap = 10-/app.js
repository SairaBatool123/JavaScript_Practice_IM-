// // 1

// var userInput = prompt("Enter A Temperature");

// userInput = Number(userInput);
// //  seperation of condition:
// // var condition = userInput > 30   // Boolean Variable/Type Best Way (isCondition //is for boolean type convention)
// // console.log("condition" , condition);
// //  OR > Binary operator 2 oprands
// if (userInput > 30) {
//   console.log("Today is a hot day");
// } else {
//   console.log("Today is not a hot day");
// }

// // 2   (string) 
// if ("cat") { //string literals
//   console.log("condition is true");
// }

// // 3   (number)
// if (0) {
//   console.log("condition is true");
// } else {
//   console.log("condition is false");
// }

// // falsy value:
// // "" , '' , ``   //(empty always be false)
// // 0 or 0.0 or 0x0
// // -0 or -0.0

// // comparison operator
// // === equallity operator

// var result = 2 === 2; //true because its equal (Recomended)
// // OR
// var result = 2 == "2"; //it does not check the type just check the value //true

// var result = "2" !== "2"; //false


// // associativity is left to right > , >= , < and <=
// var result = 2 > 2; //false 

// var result = 2.0001 > 2; //true

// var result = 2 !== "2"; //true
// console.log("result", result);

// var result = "cat" > 22; //false 

// var result = "cat" > "dog"; //false Dictionary order (check 1st alphabetic order)

// var result = "cat" > "can"; //true (check 3rd alphabetic order)

// //dictionary order (Alphabetic order) lenght matter nhi kerti
// // apple
// // can
// // cat
// // dig
// // dog

// //dictionary order (Number order)
// // 1
// // 10
// // 100000
// // 114
// // 12
// // 2
// // 21
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9

// var result = "1" < "1000"; //true

// var result = "10000" < "114"; //false

// var result = "21" <= 21 ; //true

// var temp = +prompt("Enter Your Room Temp: ");

// if (temp > 30) {
//   console.log("bhot Garmi hai");
// } else if (temp <= 30) {
//   console.log("Abhi bhi thori garmi hai");
// } else {
//   console.log("thand hai");
// }

// var temp = -200;

// if (temp > 30) {    //<=
//     console.log("garmi hai");
// }
// else if(temp > 25){   // <=
//     console.log("mosam thk hai");
// }
// else if(temp > 20){    //<=
//     console.log("wear a jacket while riding on a bike");
// }
// else{ //temp <= 20        //>
//     console.log("wear a jacket thand hai");
// }


// // Chapter # 11 Comparision Operator always return true false same goes for logical operator

// //  < > =< => === ==!

// // arithematic operator  + - * / % (Fimiliar) OR ++i --i i++ i-- (Umfimiliar)

// // Ch # 13 Testing sets of condition (logical operator) @ variables k 4 posibility hoti hai 


// var userInput = 32;

// var weight= 310;
// var time = 7;

// if(weight > 300 && time < 6){
//   console.log("Come Here")

// }else{
//   console.log("Go Ahead") //run yeh ho raha hai
// }


// // ss 
// // unary operator ! 

// var isOpen = true;
// var userName = "Sana";
// var num = 0 //true
// var print = 170 //false

// var result = !userName;
// console.log(result); // (false) truethy value

// var result=  isOpen && userName;
// console.log("result: " , result); //john last mai jo truth hoga wo print kr dega ya return ker dye ga or agr jahan falsy value ho wahi ruk jaye ga and print ker dye ga.
// // first falsy hoga to false hi rahye ga 

// var result=  print && userName;
// console.log("result: " , result); //john

// var result= userName && print;
// console.log("result: " , result); //170


// var result= num || print;
// console.log("result: " , result); //170


var percentage = 70;

if(percentage < 0){
  document.write("invalid percentage, must be between 0 and 1 percantage")
}else if(percentage >= 0 && percentage < 50){ //0-49
  document.write("You are failed")
}else if(percentage >= 50 && percentage < 60){
  document.write("You Got C Grade");
}else if(percentage >=60 && percentage < 70){
  document.write("You Got B Grade")
}else if(percentage >=70 && percentage < 80){ // 70-79 
  document.write("You Got A Grade")
}else if(percentage >=80 && percentage <= 100){
  document.write("You Got A1 Grade")
}else{
  document.write("Invalid percentage , must be between 0 and 100" )
}