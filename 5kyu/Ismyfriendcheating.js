// DESCRIPTION:
// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, 
// Excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) 
// and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

// Examples:
// removNb(26) should return [(15, 21), (21, 15)]
// or
// removNb(26) should return { {15, 21}, {21, 15} }
// or
// removeNb(26) should return [[15, 21], [21, 15]]
// or
// removNb(26) should return [ {15, 21}, {21, 15} ]
// or
// removNb(26) should return "15 21, 21 15"
// or

// in C:
// removNb(26) should return  {{15, 21}{21, 15}} tested by way of strings.
// Function removNb should return a pointer to an allocated array of Pair pointers, each one also allocated. 
// Note
// See examples of returns for each language in "RUN SAMPLE TESTS"

// SOLUTION:

function removeNb (n) {
    // my code below
    let sum = (n + 1) * n / 2;
    let result = [];
    for (let i = 1; i <= n; i++) {
      let j = (sum - i) / (i + 1);
      if (j <= n && j === Math.floor(j)) {
        result.push([i, j]);
      }
    }
    return result;
  }

    console.log(removeNb(26));  

// NOTES:

// for loop loops through a block of code a number of times.

// return statement stops the execution of a function and returns a value from that function.

// if statement executes a block of code if a specified condition is true.

// Math.floor() returns the largest integer less than or equal to a given number.

// The Math object allows you to perform mathematical tasks on numbers.

// The Math object has properties and methods for mathematical constants and functions. Not a function object.

// The Math object is not a function object. It is a static object. You always use it as Math, and never as a function.

// The Math object has properties and methods for mathematical constants and functions.

