// This program show the use of loops in js

// Loop : It is used to perform certain tasks again and again

// Types of Loops in Js
// 1. For loop - used when we know no of iteration count
// 2. While loop - used when iteration count is not known beforehand and depend on condition to be true
// 3. Do - While loop - used when we want the block to get executed once even if condition is false
// 4. For Of loop - used to iterate over iterable and retrieve values
// 5. For In loop - used to iterate over enumerating properties for objects and indices in arrays and retrieve keys or indices

// Task 1 : Printing table of 27 through for loop

console.log("Printing table of 27 through for loop");
for (let i = 1; i <= 10; i++) {
  console.log(`27 x ${i} = ${i * 27}`);
}

// Task 2 : find the sum of the square of all the even number from 1 to 50 using while loop
console.log(
  "________________________________________________________________________________________________________"
);

console.log(
  "find the sum of the square of all the even number from 1 to 50 using while loop"
);
let i = 1,
  sum = 0;

while (i <= 50) {
  if (i % 2 == 0) {
    console.log(i);
    sum += i * i;
  }
  i++;
}
console.log("Sum of square of all even numbers form 1 to 50 is :", sum);

// Task 3 : Just show its use - do while loop
console.log(
  "________________________________________________________________________________________________________"
);
console.log("Just show its use - do while loop");
let idx = 20;
do {
  console.log("hello");
  idx++;
} while (idx < 10);

// Task 4 : Show the use of for of loop
// for of loop can be used with array and string
console.log(
  "________________________________________________________________________________________________________"
);

let msg = "I love javascript";
const topics = [
  "Variables",
  "DataTypes",
  "ConditionalStatements",
  "Loops",
  "String",
  "Array",
  "Functions",
  "DOM",
  "Events",
  "ClassesAndObjects",
  "CallBacksPromisesAsyncAwait",
  "FetchAPI",
];

console.log("Show the use of for of loop on string");
for (let ch of msg) {
  console.log(ch);
}

console.log("\n\n");

console.log("Show the use of for of loop on array");
for (let t of topics) {
  console.log(t);
}

// Task 5 : Demonstrate the use of for in loop
// for in loop is used with objects and array
console.log(
  "________________________________________________________________________________________________________"
);

const student = {
  name: "Adam",
  age: 25,
  roll: 1,
  marks: [90, 98, 99, 96, 97],
};

console.log("Demonstrate the use of for in loop on object");
for (let key in student) {
  console.log(`${key} : ${student[key]}`);
}

console.log("\n\n");
console.log("Demonstrate the use of for in loop on array");
for (let idx in topics) {
  console.log(`Value at ${idx} : ${topics[idx]}`);
}
