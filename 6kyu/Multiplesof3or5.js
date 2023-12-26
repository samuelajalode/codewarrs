// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


// SOLUTION:

function solution(number){
    let arr = [];
    let multiples = [];
    
    // push all num between 0 and the number to arr
    for (let i = 1; i<=number; i++){
      arr.push(i) 
    }
    console.log(arr)
    // if number in arr is a multiple of 3 or 5 push it to multiples
    for(let i = 0; i < arr.length; i++){
      if (i % 3 ===0 || i % 5 === 0){
        multiples.push(i);
      }
    }
    
    // sum the total of the multiple array
    const sumTotal = multiples.reduce((sum, number) => sum + number, 0)
    return sumTotal;
  }
  // console.log(multiples[0]);
    console.log(solution(100000000));

// NOTES:

// reduce() reduces the array to a single value

// sum + number adds the sum of the array to the number

// 0 is the initial value of the sum

