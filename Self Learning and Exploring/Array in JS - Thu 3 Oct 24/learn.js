//  Topic : Array in JS

const fillArrayWithNum = (num) => {
  return Array(num)
    .fill(0)
    .map((_, index) => index + 1);
};

const formedArr = fillArrayWithNum(100);
console.log(formedArr);

const slicedArr = formedArr.slice(0, 3);
console.log(slicedArr);

const student = {
  name: "Adam",
  age: 17,
  rollNo: 4,
  marks: 99,
};

const studentArr = Array(60)
  .fill(0)
  .map((item) => ({ ...student }));

// console.log(studentArr);
