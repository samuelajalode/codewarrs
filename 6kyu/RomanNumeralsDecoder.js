// DESCRIPTION:
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// SOLUTION:

/*function solution (roman) {
  // complete the solution by transforming the 
  // string roman numeral into an integer
	return 0;
}*/

function solution(roman){
    let res = 0;
    const romanMap = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
    const others = ["CD", "CM", "XL", "XC", "IV", "IX"];
    for(let i=0; i < roman.length; i++){
      others.indexOf(roman[i]+ roman[i+1]) === -1 ? res += romanMap[roman[i]] : res -= romanMap[roman[i]];
    }
    return res;
  }
  console.log(solution('MCMXC'));

// NOTES:

// indexOf() returns the index of the first occurrence of a specified value in a string. If the value to search for never occurs, it returns -1.

// The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.

// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

// The concat() method is used to join two or more strings. This method does not change the existing strings, but returns a new string containing the text of the joined strings.

// The slice() method returns the selected elements in an array, as a new array object.

// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

// The split() method is used to split a string into an array of substrings, and returns the new array.


