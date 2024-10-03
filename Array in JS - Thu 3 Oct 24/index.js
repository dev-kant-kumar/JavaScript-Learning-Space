// Day and Date : Touch, 3 Oct ,24
// Topic : Array in JS

// ===============================================================================================================================

const marks = [99, 98, 97, 95];

const student = ["adam", "jhon", "sam"];

console.log(marks.length);

// methods of array
// 1. push
// 2. pop
// 3. shift
// 4. unshift
// 5. toString
// 6. concat
// 7. slice
// 8. splice

// student.push("Michel");
// console.log(student);

// const deletedMarks = marks.pop();
// console.log(marks);

// const deletedStudent = student.shift();
// console.log(deletedStudent);
// console.log(student);

// student.unshift("Emma");
// console.log(student);

// const marksOf = marks.toString();

// const newArr = student.concat(marks));
// console.log(newArr);

// console.log(marks.slice(0,2));

// splice - add , update ,remove elements from an array

student.splice(1, 1, "dev");
console.log(student);

student.splice(1, 2);
console.log(student);

student.splice(1, 0, "sneha");
console.log(student);
