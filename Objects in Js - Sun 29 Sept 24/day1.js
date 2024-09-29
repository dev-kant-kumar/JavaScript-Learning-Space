// Day and Date : Sunday 29 Sept 24
// topics : Objects in JS
// Learner : Dev Kant Kumar

// ====================================================================================================================================== //

// 1. Object Basics
// -- Creating objects (object literals, new Object())
// -- Properties and methods
// -- Accessing object properties (dot notation vs. bracket notation)
// -- Modifying, adding, and deleting properties
// -- Property shorthand and computed properties

// -- Creating objects (object literals, new Object())

const learner = {
  name: "Dev Kant Kumar",
  topic: "Objects in JS",
  date: new Date(),
  isPracticingActively: true,
};

// -- Properties and methods
// Object is the container of properties and values.
// Properties are the named value and it can be of string, numbers, boolean ,null, undefined, array and object itself.
// Methods are the actions/function/ which can be performed on the object or in other word its defines the behavior that object can perform

const user = new Object();

// -- Accessing object properties (dot notation vs. bracket notation)

console.log(learner.name);
console.log(learner.date);
console.log(learner["topic"]);
console.table([
  learner.name,
  learner.topic,
  learner.date,
  learner.isPracticingActively,
]);

// -- Modifying, adding, and deleting properties

user.role = "admin";
learner.name = "Dev Kant";

delete learner.date;

console.log(user);
console.log(learner.name);
console.log(learner);

// -- Property shorthand and computed properties

const username = "devkantkumar";
const password = "4f56ge*6i";
const date = new Date();

// without shorthand
const premiumUser = {
  username: username,
  password: password,
  isSubscribed: true,

  [`Subscribed on ${date} with plan`]: 799,
  currentBalance: 0,
  currentWalletBalance: 0,
  perDayDataBalance: "3.5GB",
  isCallingUnlimited: true,
  noOfFreeMsgAllowed: 200,
  subscriptionExpiresOn: date.getDate(),
};

// with shorthand

const normalUser = {
  username,
  password,
  isSubscribed: false,
};

console.log(premiumUser);
console.log(normalUser);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
