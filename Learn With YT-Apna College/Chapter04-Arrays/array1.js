// Array in JS

// Array : Array is collection of elements in single variable and can store similar or different types of data .

// Task 1 : Create an array

const student = ["Adam", 28, 88.5, true, { address: "USA" }, [99, 88]];
const topic = ["Variable", "DataTypes", "ConditionalStatement"];
const topic1 = ["loop", "string", "array", "objects"];

console.log(student);
console.log("Length of student : ", student.length);

// Task 2 : Array Indices
console.log(
  "___________________________________________________________________"
);
console.log("Array Indices");
console.log(`element at ${5} of student : ${student[5]}`);

// Task 3 : Looping over an array
console.log(
  "___________________________________________________________________"
);
console.log("\nLooping over an array");

console.log("using for of loop");
for (let i of student) {
  console.log(i);
}

// Task 4 : Array methods
console.log(
  "___________________________________________________________________"
);
console.log("Array Methods");

console.log("push methods");
console.log("______________________________________________________");
console.log(student.push({ isFollow: true }));
console.log(student);

console.log("\npop methods");
console.log("______________________________________________________");
console.log(student.pop());
console.log(student);

console.log("\ntoString method");
console.log("______________________________________________________");
console.log(student.toString());

console.log("\nconcat method");
console.log("______________________________________________________");
console.log(topic.concat(topic1));

console.log("\nunshift method");
console.log("______________________________________________________");
console.log(topic1.unshift("Object"));
console.log(topic1);

console.log("\nshift method");
console.log("______________________________________________________");
console.log(topic.shift());
console.log(topic);

console.log("\nslice method");
console.log("______________________________________________________");
console.log(`slice of ${topic} from 1 to 3 : ${topic.slice(1, 3)}`);
console.log(
  `slice of ${student} : providing only start index : ${student.slice(3)}`
);

console.log("\nsplice methods\n");
console.log("replace elements");
console.log("______________________________________________________");
student.splice(0, 1, "Jhon");
console.log(student);

console.log("\nadding elements to student");
console.log("______________________________________________________");
student.splice(1, 0, "Neo", "Sam");
console.log(student);

console.log("\nremoving element from student");
console.log("______________________________________________________");
student.splice(1, 3);
console.log(student);
