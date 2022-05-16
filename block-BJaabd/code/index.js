// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
    var age = +prompt("your age")

    if (age >= 12 && age <= 55) {
      alert(`you can participate in the marathon`);
    } else if (age >= 4 && age <= 11) {
      alert(`You are too young to participate in the marathon`);
    } else if (age < 11) {
      alert(`You are too young to participate in the marathon`);
    } else if (age < 4) {
      alert(`Hey Kiddo! Can You Walk`)
    } else if (age > 55) {
      alert (`You are too old to participate in the marthon`);
    } else {
      alert(`enter a valid age`)
    }
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
   
var value = Number(prompt("Enter a positive integer"));
var alpha = "";

for (var i = 0; i < value; i++) {
   alpha = alpha + "e";
} 
alert("h" + alpha + "llo");
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
 
     var naturalNumber = Number(prompt("Enter a natural number"));
     var sum = 0 ;

     for (var i = 1; i <= naturalNumber; i++) {
       sum = sum + i;
     } 
     alert(sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

   let numberValue = +prompt("enter a number")

   switch (true) {
     case numberValue == 1:
       alert(`one`);
     break;
     case numberValue == 2:
       alert(`two`);
     break;
     case numberValue == 3:
       alert(`three`);
     break;
     case numberValue == 4:
       alert(`four`);
     break;
     case numberValue == 5:
       alert(`five`);
     break;
     case numberValue == 6:
       alert(`six`);
     break;
     case numberValue == 7:
       alert(`seven`);
     break;
     case numberValue == 8:
       alert(`eight`);
     break;
     case numberValue == 9:
       alert(`nine`);
     break;
     default:
       alert(`Please try again`);
   }

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
   
   let number = +prompt("Enter the marks ")
    
    switch (true) {

      case number > 90 && number <= 100:
        alert(`AA`);
        break;
      case number > 80 && number <= 90:
        alert(`AB`)
        break;
      case number > 70 && number <= 80:
        alert(`BB`)
        break;
      case number > 60 && number <= 70:
        alert(`BC`)
        break;
      case number > 50 && number <= 60:
        alert(`CC`)
        break;
      case number > 40 && number <= 50:
        alert(`CD`)
        break;
      case number > 30 && number <= 40:
        alert(`DD`)
        break;
      case number <= 30 && number == 0:
        alert(`FF`)
        break;
      default:
        alert(`you have entered wrong marks`)
     }
   
   
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
  
// let intergers1 = +prompt("enter an integers")
// let intergers2 = +prompt("enter second integers")

  if (intergers1 > intergers2) {
      alert(intergers1);
  } else {
      alert(intergers2)
  }
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
   
       let firstProduct = +prompt("enter first product")
       let secondProduct = +prompt("enter second product")
       let thirdProduct = +prompt("enter third product")

       let product = firstProduct *secondProduct*thirdProduct;
       if (product>0){
         alert ("+");
       } else {
         alert("-")
       }
/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
   
let num1 = + prompt("enter first num")
let num2 = + prompt("enter second num")
let user = prompt("enter operation add sub mul div");

if (user == "add"){
  let sum = num1 + num2;
  alert (sum)

}
else if (user == "sub" && num1>num2){
  let sub = num1 - num2;
  alert (sub)

}
else if (user == "mul"){
  let mul = num1 * num2;
  alert (mul)

}
else if (user == "div" && num1>num2){
  let div = num1 /num2;
  alert (div)

}
else{
  alert("num 1 is smaller than num2")
}
