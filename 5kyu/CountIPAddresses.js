// DESCRIPTION:
// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

// SOLUTION:

function ipsBetween(start, end){
    //TODO complete it
    let arr1 = start.split('.');
    let arr2 = end.split('.');
    let res = 0;
    for (let i = 0; i < arr1.length; i++) {
      res += (parseInt(arr2[i]) - parseInt(arr1[i])) * Math.pow(256, 3 - i);
    }
    return res;
  }

  console.log(ipsBetween( "" , ""));

// NOTES:

// split() splits a string into an array of substrings, and returns the new array.

// parseInt() parses a string and returns an integer.

// Math.pow() returns the base to the exponent power, that is, baseexponent.

// for loop loops through a block of code a number of times.

// return statement stops the execution of a function and returns a value from that function.

