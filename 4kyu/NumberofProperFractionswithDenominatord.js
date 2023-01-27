// DESCRIPTION:
// If n is the numerator and d the denominator of a fraction, that fraction is defined a (reduced) proper fraction if and only if GCD(n,d)==1.

// For example 5/16 is a proper fraction, while 6/16 is not, as both 6 and 16 are divisible by 2, thus the fraction can be reduced to 3/8.

// Now, if you consider a given number d, how many proper fractions can be built using d as a denominator?

// For example, let's assume that d is 15: you can build a total of 8 different proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.

// You are to build a function that computes how many proper fractions you can build with a given denominator:

// properFractions(1)==0
// properFractions(2)==1
// properFractions(5)==4
// properFractions(15)==8
// properFractions(25)==20
// Be ready to handle big numbers.

// Edit: to be extra precise, the term should be "reduced" fractions, thanks to girianshiido for pointing this out and sorry for the use of an improper word :)

// SOLUTION:

function properFractions(n){
    //your code here
    if (n === 1) {
      return 0;
    }
    let res = n;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        res = res / i * (i - 1);
        while (n % i === 0) {
          n /= i;
        }
      }
    }
    if (n > 1) {
      res = res / n * (n - 1);
    }
    return res;
  }
  
  console.log(properFractions(25));
  console.log(properFractions(15));
    console.log(properFractions(5));
    console.log(properFractions(2));
    console.log(properFractions(1));

// NOTES:

// Math.sqrt() returns the square root of a number

// % returns the remainder of a division

// while (n % i === 0) {
//   n /= i;
// }

// divides n by i until n is no longer divisible by i

// if (n > 1) {

// if n is greater than 1, then n is prime

// res = res / n * (n - 1);

// res is divided by n and multiplied by n - 1

// }

// if (n % i === 0) {

// if n is divisible by i

// res = res / i * (i - 1);

// res is divided by i and multiplied by i - 1

// while (n % i === 0) {

// while n is divisible by i

// n /= i;

// n is divided by i

// }