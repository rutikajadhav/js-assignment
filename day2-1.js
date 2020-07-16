

//question 1.......................
let age = prompt("What is your age"); 
console.log(age);

//question 2.......................
//substring
var str = "Welcome to javascript"; //string
var sstr = str.substring(1, 6);
console.log(sstr);

//slice
var str = "Welcome to javascript"; //string
var sstr = str.slice(1, 6);
console.log(sstr);

var fruits = ["Apple", "banana", "chickoo", "pineapple"]; //array
var fruitss = fruits.slice(1,3);
console.log(fruitss);

//replace
var str = "Welcome to javascript"; //string
var sstr = str.replace("javascript", "HTML");
console.log(sstr);

var fruits = ["Apple", "banana", "chickoo", "pineapple"]; //array
fruits[0] = "grapes";
console.log(fruits);

//delete
var fruits = ["Apple", "banana", "chickoo", "pineapple"]; //array
delete fruits[0];
console.log(fruits);

//question 3.........................
var ages;
if (confirm("Are you above 21?") == true) 
    {
        ages = "Can Drink";
    } 
else
    {
        ages = "Cannot Drink";  
    }
console.log(ages);




