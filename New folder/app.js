//FUNCTIONS
// 1.
function sum(num1,num2){
    sum = num1 + num2
    return sum
}
var a = +prompt("enter a first number")
var b = +prompt("enter a second number")
alert(sum(a,b))



// 2. 
function average(array){
    var sum = 0 
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    var result = sum / array.length
    // var final = result.toFixed(3)
    return result.toFixed(2)
}
setTimeout(() =>{
    alert(average([2,4,5,6,7,9,9,3,6]))
},3000)//take it in millisecond