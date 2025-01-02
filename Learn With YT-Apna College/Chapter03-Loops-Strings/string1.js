// Strings in Js

// String is sequence of characters and used to store text like data in js . created by using single quote or double quote and also use template literals for placeholder with expression like formate called string interpolation .

// Task 1 : Create String
console.log("Show the creation of string");
let fname = "Adam";
let lname = "Smit";

let fullName = "Adam Smith";

let price = 30.5;
let item = "Pen";
let des = `${item} is of ${price} rupees`;

console.log(fname);
console.log(lname);
console.log(fullName);
console.log(des);

console.log(
  "________________________________________________________________________________________________________"
);
// Task 2 : Length of string
console.log("\nShow the use length properties of string");
console.log(`Length of ${fullName} : ${fullName.length}`);
console.log(
  "________________________________________________________________________________________________________"
);

// Task 3 : String Indices
console.log("\nShow the use of string indices");
console.log(`char at ${3} of ${fullName} : ${fullName[3]}`);
console.log(
  "________________________________________________________________________________________________________"
);

// Task 4 : Show the use of string methods
console.log("\nString methods\n");

console.log(
  `toUpperCase() : ${fullName} in uppercase : ${fullName.toUpperCase()}`
);
console.log(
  `toLowerCase() : ${fullName} in lowercase : ${fullName.toLowerCase()}`
);

let prompt = "             Write me a hello txt       ";

console.log("\nbefore use of trim the prompt looks like following");
console.log(prompt);
console.log(`After using trim() on prompt : ${prompt.trim()}`);

console.log(
  `slice()- slice of ${fullName} from index 1 to 4 : ${fullName.slice(1, 4)}`
);

console.log(`concat() - fullname : ${fname.concat(lname)}`);

let msg = "hello js";

console.log("Before using replace msg looks like below");
console.log(msg);
console.log(`After replacing h with c in ${msg}: ${msg.replace("h", "c")}`);
console.log(`After replacing all h in ${msg} : ${msg.replaceAll("l", "i")}`);
console.log(`Char at ${3} in ${fullName} : ${fullName.charAt(3)}`);
