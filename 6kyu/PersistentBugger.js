// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// SOLUTION:

function persistence(num) {
    //code me
 let count = 0;
   let numStr = num.toString();
   while (numStr.length > 1) {
     count++;
     numStr = numStr.split('').reduce((a, b) => a * b).toString();
   }
   return count;
 }
 
 console.log(persistence(39));

// NOTES:

// toString() converts the number to a string

// split('') splits the string into an array of characters

// reduce((a, b) => a * b) multiplies the array of characters

// toString() converts the number to a string

// length returns the length of the array
