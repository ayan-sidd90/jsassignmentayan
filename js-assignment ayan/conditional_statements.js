// Q1: Write a program that checks if a number is positive, negative, or zero.
let num1 = -5;
if (num1 > 0) {
  console.log("Q1: Positive");
} else if (num1 < 0) {
  console.log("Q1: Negative");
} else {
  console.log("Q1: Zero");
}

// Q2: Using an if-else statement, determine whether a given integer is even or odd.
let num2 = 7;
if (num2 % 2 === 0) {
  console.log("Q2: Even");
} else {
  console.log("Q2: Odd");
}

// Q3: Write a program that takes two numbers and prints the larger one using conditional statements.
let a = 10;
let b = 25;
if (a > b) {
  console.log("Q3: Larger number is " + a);
} else if (b > a) {
  console.log("Q3: Larger number is " + b);
} else {
  console.log("Q3: Both numbers are equal");
}

// Q4: Using if-else-if, assign grades (A, B, C, D, F) based on a student's percentage score.
let percentage = 76;
if (percentage >= 90) {
  console.log("Q4: Grade A");
} else if (percentage >= 75) {
  console.log("Q4: Grade B");
} else if (percentage >= 60) {
  console.log("Q4: Grade C");
} else if (percentage >= 40) {
  console.log("Q4: Grade D");
} else {
  console.log("Q4: Grade F");
}

// Q5: Write a program that checks if a given year is a leap year using conditional statements.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Q5: " + year + " is a leap year");
} else {
  console.log("Q5: " + year + " is not a leap year");
}

// Q6: Use a switch-case to print the name of the day when given a number (1 = Monday ... 7 = Sunday).
let day = 3;
switch (day) {
  case 1:
    console.log("Q6: Monday");
    break;
  case 2:
    console.log("Q6: Tuesday");
    break;
  case 3:
    console.log("Q6: Wednesday");
    break;
  case 4:
    console.log("Q6: Thursday");
    break;
  case 5:
    console.log("Q6: Friday");
    break;
  case 6:
    console.log("Q6: Saturday");
    break;
  case 7:
    console.log("Q6: Sunday");
    break;
  default:
    console.log("Q6: Invalid day number (1 to 7 only)");
}

// Q7: Create a simple calculator using switch-case that performs addition, subtraction, multiplication, or division based on user input.
let n1 = 20;
let n2 = 4;
let operator = "/";
switch (operator) {
  case "+":
    console.log("Q7: Result = " + (n1 + n2));
    break;
  case "-":
    console.log("Q7: Result = " + (n1 - n2));
    break;
  case "*":
    console.log("Q7: Result = " + (n1 * n2));
    break;
  case "/":
    if (n2 === 0) {
      console.log("Q7: Cannot divide by zero");
    } else {
      console.log("Q7: Result = " + (n1 / n2));
    }
    break;
  default:
    console.log("Q7: Invalid operator");
}

// Q8: Write a program that checks whether a given character is a vowel or consonant using switch-case.
let ch = "E";
switch (ch.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Q8: " + ch + " is a Vowel");
    break;
  default:
    console.log("Q8: " + ch + " is a Consonant");
}

// Q9: Using switch-case, print instructions based on traffic light color (Red = Stop, Yellow = Wait, Green = Go).
let light = "Yellow";
switch (light.toLowerCase()) {
  case "red":
    console.log("Q9: Stop");
    break;
  case "yellow":
    console.log("Q9: Wait");
    break;
  case "green":
    console.log("Q9: Go");
    break;
  default:
    console.log("Q9: Invalid color");
}

// Q10: Write a program using switch-case where the user selects from a menu (1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).
let balance = 1000;
let choice = 2;
switch (choice) {
  case 1:
    console.log("Q10: Your balance is " + balance);
    break;
  case 2:
    let deposit = 500;
    balance = balance + deposit;
    console.log("Q10: Deposited " + deposit + ". New balance is " + balance);
    break;
  case 3:
    let withdraw = 300;
    if (withdraw > balance) {
      console.log("Q10: Insufficient balance");
    } else {
      balance = balance - withdraw;
      console.log("Q10: Withdrew " + withdraw + ". New balance is " + balance);
    }
    break;
  case 4:
    console.log("Q10: Thank you, Exit");
    break;
  default:
    console.log("Q10: Invalid choice");
}