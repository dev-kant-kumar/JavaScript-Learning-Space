// Day and Date : Sunday,6 Oct ,24
// Topics: Functions and methods in JS

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// functions: A block of code which perform particular actions and it can also take input as parameter and return something .
// types :
// 1. - Normal function : function functionName(){} - with function keyword and name of function
// 2. - Anonymous function : function(){} - without function name and only contains function keyword .
// 3. - Arrow function : ()=>{} - a compact way of writing functions.
// 4. - High Order function : A function which can take another function as parameter or return function
// 5. - Pure Function : A function which do not performs any side effects like - data fetching EventCounts.

// Methods : A function which is associated with any objects is know as methods like : Array.length(), here length() is methods which is associated with string or array.

function addNum(a, b) {
  return a + b;
}

const product = function () {
  return a * b;
};

const hello = () => {
  console.log("Hello !");
};

const arr = [1, 2, 3, 66, 78, 98, 57, 33];

console.log(arr.length); // methods

// forEach, map ,filter ,reduce methods of array

// forEach : it execute for each elements of array and take a callback function which can have three parameters
// 1 parameter - value of each elements
// 2 index of each elements  (optional)
// 3 array itself (optional)

console.log("Showing use of forEach loop \n");
arr.forEach((val, index, arr) => {
  console.log(val);
});

// Map :  Similar to forEach but it also creates a new array based of the operation performed on each elements of array

const newArr = arr.map((val) => {
  return val * 2;
});

console.log("actual array : ", arr);
console.log("new array formed after map operation : ", newArr);

// Filter : Similar to map and it create array of elements which result in true as operation on them
// like : A problem : Filter the even numbers and odd numbers for original array

const evenNumArr = arr.filter((val) => {
  return val % 2 == 0;
});

const oddNumArr = arr.filter((val) => {
  return val % 2 != 0;
});

console.log("Result of filter operations on array ", arr);
console.log("Even numbers : ", evenNumArr);
console.log("Odd numbers : ", oddNumArr);

// Reduce : It reduce the array to single value and return that value , used for performing operation or calculation on an array where we need a single value. like sum of all elements of array , product of all elements of array.

const sumOfElements = arr.reduce((result, curr) => {
  return result + curr;
});

console.log("Sum of all elements of arr : ", sumOfElements);
