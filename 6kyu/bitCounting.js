// DESCRIPTION:
// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one 
// in the binary representation of that number. 
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, 
// so the function should return 5 in this case


// SOLUTION:


function countBits(n) {
    return n.toString(2).split('').filter(x => x == 1).length;
    }
console.log(countBits(1274));


// NOTES:

// toString(2) converts the number to binary
// split('') splits the string into an array of characters
// filter(x => x == 1) filters the array to only include 1s
// length returns the length of the array


