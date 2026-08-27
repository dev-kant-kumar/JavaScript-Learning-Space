// problem : given a number n , find the first n elements of the fibonacci sequence.

const fibonacci = (num) => {
  const nums = [0, 1];

  for (let i = 2; i < num; i++) {
    // let sum = nums[nums.length - 2] + nums[nums.length - 1];
    // nums.push(sum);
    nums[i] = nums[i - 1] + nums[i - 2];
  }

  return nums;
};

for (let j = 2; j < 15; j++) {
  console.log(fibonacci(j));
}
