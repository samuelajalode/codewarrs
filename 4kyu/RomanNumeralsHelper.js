// DESCRIPTION:
// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000
// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000


// SOLUTION:

// TODO: create a RomanNumerals helper object 
// that can convert a roman numeral to and from an integer value
// it should follow the API in the examples below.
// Multiple roman numeral values will be tested for each helper method.
// Modern Roman numerals are written by expressing each digit separately
// starting with the left most digit and skipping any digit with a value of zero.
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

var RomanNumerals = {
    toRoman: function (num) {
      let res = '';
      let arr = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
      ];
      for (let i = 0; i < arr.length; i++) {
        while (num >= arr[i][0]) {
          res += arr[i][1];
          num -= arr[i][0];
        }
      }
      return res;
    },
  
    fromRoman: function (str) {
      let res = 0;
      let arr = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
      ];
      for (let i = 0; i < arr.length; i++) {
        while (str.indexOf(arr[i][0]) === 0) {
          res += arr[i][1];
          str = str.slice(arr[i][0].length);
        }
      }
      return res;
    }
  };

  console.log(RomanNumerals.toRoman(1000)); // should return 'M'
  console.log(RomanNumerals.fromRoman('M')); // should return 1000

