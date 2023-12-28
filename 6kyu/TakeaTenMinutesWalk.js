// DESCRIPTION:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// SOLUTION:

/*function isValidWalk(walk) {
  //insert brilliant code here
  var dx = 0;
  var dy = 0;
  var dt = walk.length;
  
  for(var i=0; i<walk.length; i++){
    switch ([i]){
        case 'n': dy--; break;
        case 's': dy--; break;
        case 'w': dy--; break;
        case 'e': dy--; break;
        console.log(isValidWalk);
    }
  }
  return dt === 10 && dx === 0 && dy ===0;
  
}
return false;*/



function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n',]));

// NOTES:

// filter() creates a new array with all elements that pass the test implemented by the provided function.

// a is the element in the array

// a==val is the test

// a==val returns true if the element in the array is equal to the value

// count() counts the number of times the element in the array is equal to the value

// count('n') counts the number of times the element in the array is equal to 'n'

// count('n')==count('s') returns true if the number of times the element in the array is equal to 'n' is equal to the number of times the element in the array is equal to 's'

// count('n')==count('s') && count('w')==count('e') returns true if the number of times the element in the array is equal to 'n' is equal to the number of times the element in the array is equal to 's' and the number of times the element in the array is equal to 'w' is equal to the number of times the element in the array is equal to 'e'

// walk.length==10 returns true if the length of the array is equal to 10

// walk.length==10 && count('n')==count('s') && count('w')==count('e') returns true if the length of the array is equal to 10 and the number of times the element in the array is equal to 'n' is equal to the number of times the element in the array is equal to 's' and the number of times the element in the array is equal to 'w' is equal to the number of times the element in the array is equal to 'e'

// return false; returns false if the length of the array is not equal to 10 or the number of times the element in the array is equal to 'n' is not equal to the number of times the element in the array is equal to 's' or the number of times the element in the array is equal to 'w' is not equal to the number of times the element in the array is equal to 'e'

