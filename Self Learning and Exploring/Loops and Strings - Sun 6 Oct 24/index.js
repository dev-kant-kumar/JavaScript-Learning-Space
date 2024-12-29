// Day and Date : Sun 6 Oct 24
// Topics : Loops and strings in js

//  ===================================================================================================
// Loops is used to execute some code of code again and again
// types : for, while, do-while, for-of and for-in loop

// for loop : used for iterate over array string and etc when we know the no of iteration
// syntax : for(initialisation ,termination condition, update){
//     code block

// }

// while loop : Used when the number of iterations is not known upfront.
// syntax : while(condition){
//     code block
//     update condition
// }

// do-while loop : it is exit control loop which check the condition while exiting from the loop
// syntax : do{
//     code block
//     update condition
// }
// while(condition);

// for-of : used to iterate over strings and array where we need values
// for-in : used to iterate over array and objects where we need keys like - index for array and properties for objects

const name = "Adam";

const student = {
  name,
  marks: [99, 85, 97, 96, 96],
  totalMarks: function () {
    return this.marks.reduce((res, curr) => {
      return res + curr;
    });
  },
  isPassed: true,
};

console.log("Total marks of student is :", student.totalMarks());

const marks = [99, 85, 97, 96, 96];

for (let val of marks) {
  console.log(val);
}

for (let char of name) {
  console.log(char);
}

for (let key in student) {
  console.log(student[key]);
}

for (let index in marks) {
  console.log(marks[index]);
}

// string : String is sequence of characters to store text value enclosed in single or double quote.
// In js sting is immutable means sting can't be changed by any mean and any operation on it creates new string
// Have indices to access its value of particular index.

const username = "admin";
const password = "password";

console.log(username, password);

console.log(username[3], password[5]); // accessing value at particular index of string

// sting interpolation or template literal
// - A way of writing string using back-tic (``) and ${} for placeholder where it can hold any calculated value or string.

console.log(`username is ${username} and password is ${password}`);

// methods of string : all these methods and not only these even all methods of string creates a new string and can't change original string

// 1. str.toUpperCase() - convert string to upper case letters
// 2. str.toLowerCase() - convert string to lower case letters
// 3. str.trim() - remove white space from start and end of string
// 4. str.length - return the length of string and in case of escape char it count 1 for two char like "\n","\t"
// 5. str.replace(searchVal,newVal) - replace searchVal with newVal for only first occurrence
// 5.1 str.replaceAll(searchVal,newVal)- similar to replace but it replace all occurrence of searchVal
// 6. str.slice(startIndex,endIndex) - slice the part of string excluding the end index
// 7 str.charAt(index) - gives the char at passed index of string
// 8 str.indexOf(char) - gives the index of passed char of string

const demo = "       abc    cde    ";
const test = "demo";

console.log(username.toUpperCase());
console.log(student.name.toLowerCase());
console.log(demo.trim());
console.log(username.length);
console.log(username.slice(2, 4));
console.log(username.replace("a", "A"));
console.log(demo.replaceAll("c", "f"));
console.log(test.charAt(2));
console.log(test.indexOf("m"));
