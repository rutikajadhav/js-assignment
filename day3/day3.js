//Question 1.................

let evenn = function(k)
{
    let result = k % 2 ;
if (result == 0) 
    {
        console.log("The number entered is " + k + " and Number is even.");
    }
    else
    {
        console.log("The number entered is " + k + " and Number is odd.");
    }
}
let k = prompt("Enter a new number",0);
let d = evenn(k);


//Question 2.....................

let x = prompt("Enter OS name and version seperated by space").split(" ");
let z =console.log("The OS name is " + x[0] + " and version is " + x[1]); 


//Question 3.........................

//Conditional Statement
let marks = prompt("Enter your marks",0);
if (marks > 80) {
    console.log("Marks are " + marks + " and grade is A+");
}
else if (marks > 60 && marks <=80){
    console.log("Marks are " + marks + " and grade is A");
}
else if (marks > 40 && marks <=60){
    console.log("Marks are " + marks + " and grade is B");
}
else{
    console.log("Marks are " + marks + " and grade is False");
}

// Ternary operators
let markss = prompt("Enter your marks",0);
console.log ((markss >80) ? 'Marks are ' + markss + ' and grade is A+' : 
            (markss > 60 && markss <=80) ? "Marks are " + markss + " and grade is A" :
            (markss > 40 && markss <=60) ? "Marks are " + markss + " and grade is B" :
            "Marks are " + markss + " and grade is False");
            
