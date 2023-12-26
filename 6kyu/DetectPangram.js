// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
// Ignore numbers and punctuation.


// SOLUTION:

function isPangram(string){
    //...
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowerCase = string.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
      if (lowerCase.indexOf(alphabet[i]) === -1) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
  console.log(isPangram('This is not a pangram.'));
  

// NOTES:

// indexOf() returns the index of the first occurrence of a specified value in a string. If the value to search for never occurs, it returns -1.

