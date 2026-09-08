const array = [1, 2, 3, 4, 5, 6];

console.log("Original array : ", array);
console.log(`length of array is : ${array.length}`);

// this will create empty slot as this index is out of the bound
array.length = 100;
console.log("Array : ", array);

// this will remove the elements .
array.length = 3;
console.log("Now array is : ", array);

// accessing first and last element of the array .
console.log("first element: ", array["0"]);
console.log("last element: ", array[array.length - 1]);

const newArr = new Array("dev", "kant", "kumar", "software-developer");
console.log(newArr);

//methods
console.log("return : ", newArr.pop()); // returned poped element
console.log("after pop : ", newArr);

console.log("return : ", newArr.push("MERN stack"));
console.log("after push : ", newArr);
