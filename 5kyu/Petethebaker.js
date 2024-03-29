// DESCRIPTION:
// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good at Maths. Can you help him to find out, 
// how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


// SOLUTION:

function cakes(recipe, available) {
    let res = [];
    for (let key in recipe) {
      if (available[key]) {
        res.push(Math.floor(available[key] / recipe[key]));
      } else {
        return 0;
      }
    }
    return Math.min(...res);
  }
  
  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}, {flour: 5000, sugar: 500, eggs: 50, milk: 10000, seasoning: 500,}));

// NOTES:

// Math.floor() rounds a number down to the nearest integer

// Math.min() returns the lowest value of a list of numbers

// ...res spreads the array into a list of numbers

// for...in loops through the properties of an object

// if...else statement checks if the key is in the object

// push() adds a new item to the end of an array

// return 0 returns 0 if the key is not in the object

// return Math.min(...res) returns the lowest value of the array

