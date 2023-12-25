// DESCRIPTION:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

// SOLUTION:

function nextBigger(n){
    //your code here
    let arr = n.toString().split('');
    let i = arr.length - 1;
    while (i > 0 && arr[i - 1] >= arr[i]) {
      i--;
    }
    if (i === 0) {
      return -1;
    }
    let j = arr.length - 1;
    while (arr[j] <= arr[i - 1]) {
      j--;
    }
    let temp = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = temp;
    arr = arr.slice(0, i).concat(arr.slice(i).reverse());
    return parseInt(arr.join(''));
  } 
  
  console.log(nextBigger(12));
    console.log(nextBigger(513));
    console.log(nextBigger(2017));
    console.log(nextBigger(9));
    console.log(nextBigger(111));
    console.log(nextBigger(531));

// NOTES:

// toString() converts the number to a string

// split('') splits the string into an array of characters

// while (i > 0 && arr[i - 1] >= arr[i]) {

// i--;

// }

// while (arr[j] <= arr[i - 1]) {

// j--;

// }

// arr = arr.slice(0, i).concat(arr.slice(i).reverse());

// parseInt(arr.join(''));

// parseInt() converts the string to a number

// join('') joins the array of characters into a string

// slice(i).reverse() reverses the array of characters

// slice(0, i) slices the array of characters from 0 to i

// concat(arr.slice(i).reverse()) concatenates the two arrays

// arr[j] = temp; swaps the two elements

// temp = arr[i - 1]; swaps the two elements

// i--; decrements i

// j--; decrements j

// i === 0; checks if i is equal to 0

// i > 0; checks if i is greater than 0

// arr[i - 1] >= arr[i]; checks if the element at i - 1 is greater than or equal to the element at i

// arr[j] <= arr[i - 1]; checks if the element at j is less than or equal to the element at i - 1

// arr[i - 1] = arr[j]; swaps the two elements

// arr[j] = temp; swaps the two elements

// arr.slice(0, i) slices the array of characters from 0 to i

// arr.slice(i).reverse() reverses the array of characters

// arr = arr.slice(0, i).concat(arr.slice(i).reverse()); concatenates the two arrays

// parseInt(arr.join('')); converts the array of characters to a number

// parseInt() converts the string to a number

// join('') joins the array of characters into a string

// slice(i).reverse() reverses the array of characters

// slice(0, i) slices the array of characters from 0 to i

// concat(arr.slice(i).reverse()) concatenates the two arrays

// arr[j] = temp; swaps the two elements

// temp = arr[i - 1]; swaps the two elements

// i--; decrements i

// j--; decrements j

// i === 0; checks if i is equal to 0