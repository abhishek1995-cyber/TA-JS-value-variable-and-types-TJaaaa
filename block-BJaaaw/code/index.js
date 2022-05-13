// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
  // let num = +prompt("put a number");
  //  if (num%2 == 0) {
  //    alert(`Number is even`)
  //  }
  //  else{
  //    alert("Number is odd")
  //  }

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

    // let numA = +prompt("put a number") 
    // let numB = +prompt("put a number")
    //  numA > numB ? alert(numA): alert(numB) 
// 3. Convert the above code using`?` terniary operator
    //  let numC = +prompt("put a number") 
    // let numD = +prompt("put a number")
    //  numA > numB ? alert(numA): alert(numB) 

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
  
  // let housename = prompt("House name")
  // if (housename == "stark" ){
  //   alert(`winter is coming`)
  // } else if (housename == "lannister"){
  //   alert(`A lannister always pays his debt`)
  // } else {
  //   alert(`All men must die`)
  // }

// 5. Convert the above code using`?` terniary operator

  //  housename === "stark" ? alert(`winter is coming`) : housename === "lannister" ? alert(`A lannister always pays his debt`) : alert(`All men must die`)

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let month=prompt("Enter a month")
// switch(month){
// case "1":
// alert("january 31");
// break ;
// case "2" :
// alert("febraury 28")
// break;
// case "3" :
// alert("march 31")
// break;
// case "4" :
// alert("april 30")
// break;
// case "5" :
// alert("may 31")
// break;
// case "6" :
// alert("june 30")
// break;
// case "7" :
// alert("july 31")
// break;
// case "8" :
// alert("august 31")
// break;
// case "9" :
// alert("september 30")
// break;
// case "10" :
// alert("october 30")
// break;
// case "11" :
// alert("november 30")
// break;
// case "12" :
// alert("december 30")
// break;
// default :
// alert("enter a valid number")
// }
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
  //  let salery = prompt ("salery of the user");
  //  switch(true){
  //    case salery <= 20000:
  //      var inHand = salery*(10/100);
  //      alert(`salery in hand amount is ${salery-inHand}`);
  //      break;
  //      case salery <= 40000:
  //       inHand = salery*(20/100);
  //        alert(`salery in hand amount is ${salery-inHand}`)
  //        break;
  //      case salery <= 50000:
  //        inHand = salery*(30/100);
  //        alert(salery-inHand)
  //        break;
  //        default:
  //          alert("enter a valid number");
  //  }

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

// let marks = +prompt("marks obtained")
//  if (marks > 100) {
//    alert(`Marks can't be greater than 100`)
//  } else if (marks > 80 && marks < 100) {
//    alert(`Grade A`);
//  } else if (marks > 50 && marks < 80) {
//     alert(`Grade B`);
//  } else if (marks > 30 && marks < 50) {
//     alert(`Grade C`);
//  } else if (marks > 0) { 
//       alert(`Grade D`);
//  } 

  // switch (true) {
  //     case marks > 100 :
  //       alert(`Marks can't be greater than 100`)
  //       break;
  //       case marks > 80 && marks < 100 :
  //         alert(`Grade A`)
  //         break;
  //         case marks > 50 && marks < 80 :
  //           alert(`Grade B`)
  //           break;
  //           case marks > 30 && marks < 50 :
  //             alert(`Grade C`)
  //             break;
  //             case marks > 0 :
  //               alert(`Grade D`)
  //               break;
  //              default :
  //              alert(`enter a valid marks`)   

  // }
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

  let weather = prompt("What is the weather like outside?")
   switch(weather) {
     case "sunny" :
       alert(`Wear a T-shirt`);
       break;
       case "rainy" :
         alert(`Don't forget to take your raincoat`);
         break;
         case "hot" :
           alert(`Get a hanky`);
           break;
           case "freezing" :
             alert(`Get your sweeter on`);
             break;
             default:
               alert("not a valid input");
   }
