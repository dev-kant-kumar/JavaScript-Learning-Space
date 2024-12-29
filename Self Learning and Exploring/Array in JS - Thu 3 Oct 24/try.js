const OTP = (length = 6) => {
  let randomNo = Math.random() * Math.pow(10, length);
  return Math.trunc(randomNo).toString().padStart(length, "0");
};

const letterOTP = (length = 6) => {
  let randomNo = Math.random() * Math.pow(10, length + 3);
  return Math.trunc(randomNo).toString(36).toUpperCase().padStart(length, "0");
};

const crypto = require("crypto");

const secureOTP = (length = 6) => {
  const randomNum = Math.trunc(crypto.randomInt(0, Math.pow(10, length)))
    .toString()
    .padStart(length, "0");
  return randomNum;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.trunc(Math.random() * 16)];
  }
  return color;
};

for (let i = 0; i < 5; i++) {
  console.log(`Number OTP 6 digits : ${OTP()}`);
  console.log(`Number OTP 4 digits : ${OTP(4)}`);
  console.log(`Alphanumeric OTP 6 digits : ${letterOTP()}`);
  console.log(`Alphanumeric OTP 4 digits : ${letterOTP(4)}`);
  console.log(`Secure OTP : 6 digits ${secureOTP()}`);
  console.log(`Secure OTP : 4 digits ${secureOTP(4)}`);
  console.log(`Random hex color : ${getRandomColor()}`);

  console.log("=======================================================");
}
