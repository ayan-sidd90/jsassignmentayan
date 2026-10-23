// Q1: Write a program using a for loop to print numbers from 1 to 10.
console.log("Q1:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q2: Use a while loop to calculate the sum of the first N natural numbers.
let N2 = 10;
let sum2 = 0;
let i2 = 1;
while (i2 <= N2) {
  sum2 = sum2 + i2;
  i2++;
}
console.log("Q2: Sum of first " + N2 + " numbers = " + sum2);

// Q3: Print the multiplication table of a given number using a for loop.
let tableNum = 5;
console.log("Q3: Table of " + tableNum);
for (let i = 1; i <= 10; i++) {
  console.log(tableNum + " x " + i + " = " + tableNum * i);
}

// Q4: Write a program using a while loop to find the factorial of a given number.
let fnum = 5;
let fact = 1;
let i4 = fnum;
while (i4 > 0) {
  fact = fact * i4;
  i4--;
}
console.log("Q4: Factorial of " + fnum + " = " + fact);

// Q5: Print numbers from 10 down to 1 using a for loop.
console.log("Q5:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Q6: Use a do-while loop to print all even numbers up to N.
let N6 = 20;
let i6 = 2;
console.log("Q6: Even numbers up to " + N6);
do {
  console.log(i6);
  i6 += 2;
} while (i6 <= N6);

// Q7: Write a program using a while loop to calculate the sum of digits of a given number.
let digitsNum = 1234;
let temp = digitsNum;
let digitSum = 0;
while (temp > 0) {
  digitSum = digitSum + (temp % 10);
  temp = Math.floor(temp / 10);
}
console.log("Q7: Sum of digits of " + digitsNum + " = " + digitSum);

// Q8: Generate the first 10 terms of the Fibonacci series using a for loop.
let first = 0;
let second = 1;
let series = [];
for (let i = 1; i <= 10; i++) {
  series.push(first);
  let next = first + second;
  first = second;
  second = next;
}
console.log("Q8: Fibonacci series = " + series.join(", "));

// Q9: Use a do-while loop to keep asking the user for a number until they guess the correct one.
let secret = 7;
let guesses = [3, 9, 7]; // user ke guesses (sample)
let index = 0;
let guess;
do {
  guess = guesses[index];
  index++;
  if (guess !== secret) {
    console.log("Q9: " + guess + " is wrong, try again");
  } else {
    console.log("Q9: " + guess + " is correct! You guessed it");
  }
} while (guess !== secret);

// Q10: Write a program using a for loop to check if a given number is prime.
let pnum = 17;
let isPrime = true;
if (pnum < 2) {
  isPrime = false;
}
for (let i = 2; i <= Math.sqrt(pnum); i++) {
  if (pnum % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Q10: " + pnum + " is a prime number");
} else {
  console.log("Q10: " + pnum + " is not a prime number");
}