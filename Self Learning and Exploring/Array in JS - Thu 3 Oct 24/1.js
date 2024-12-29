// Topics : Array is JavaScripts - Beginner Level

// Practice Exercises
// Create an array of your favorite movies and:

// Add a movie to the end.
// Remove the first movie.
// Check if a specific movie is in the array.
// Print all the movies using a loop.
// Given an array [5, 10, 15, 20, 25]:

// Find the index of 15.
// Extract the middle three numbers into a new array.

const myFavMovies = [
  "Mission Impossible",
  "Mission Impossible all parts",
  "Heart Of Stone",
  "Adams Project",
  "Red Notice",
  "Mechanics",
];

// Add a movie to the end.
console.log("Add a movie to the end.");
myFavMovies.push("IRON MAN");
console.log(myFavMovies);

// Remove the first movie.
console.log("Remove the first movie");
console.log(myFavMovies.shift());
console.log(myFavMovies);

// Check if a specific movie is in the array.
console.log("Check if a specific movie is in the array.");
console.log(myFavMovies.includes("IRON MAN"));

// Print all the movies using a loop.
console.log("Print all the movies using a loop.");
for (let movie of myFavMovies) {
  console.log(movie);
}

// Print all the movies using map function in case i need to return array after performing some operations.
console.log(
  "Print all the movies using map function in case i need to return array after performing some operations."
);
const myMovies = myFavMovies.map((movie) => {
  return movie.toLowerCase();
});
console.log(myMovies);

// Given an array [5, 10, 15, 20, 25]:

const noArray = [5, 10, 15, 20, 25];

// Find the index of 15.
console.log(" Find the index of 15.");
const indexIs = noArray.indexOf(15);
console.log(indexIs);

// Extract the middle three numbers into a new array.
console.log("Extract the middle three numbers into a new array.");
const indexOfMiddleElement = Math.floor(noArray.length / 2);
const newArr = noArray.slice(
  indexOfMiddleElement - 1,
  indexOfMiddleElement + 2
);
console.log(newArr);
