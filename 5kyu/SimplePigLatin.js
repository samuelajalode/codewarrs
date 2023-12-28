// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLUTION:

function pigIt(str){
    //Code here
    let arr = str.split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '!' || arr[i] === '?') {
        newArr.push(arr[i]);
      } else {
        newArr.push(arr[i].slice(1) + arr[i].slice(0, 1) + 'ay');
      }
    }
    return newArr.join(' ');
  }
  
  console.log(pigIt('Pig latin is cool !'));

// NOTES:

// split() splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

// slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// join() joins all elements of an array into a string.

// push() adds one or more elements to the end of an array and returns the new length of the array.

// for loop loops through a block of code a number of times

// if statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed.

// return statement stops the execution of a function and returns a value from that function.

