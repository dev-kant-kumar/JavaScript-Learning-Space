// callback vs promises vs async await

const user = {
  userName: "devkantkumar",
  _id: "987654wzxcf",
  isOnSubscription: true,
};

const getData = (id, next) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user) {
        console.log("User's data of " + id + " : ", user);
        resolve("success : user found");
        if (next) {
          next();
        }
      } else {
        console.log("User not found with id : " + id + "!");
        reject("error : no user found!");
      }
    }, 2000);
  });
};

// callback : A function which passed as argument to another function and nested callback lead to code which is hard to read and maintain
getData(1, () => getData(2, () => getData(3, () => getData(4))));

// promises : Its a js object
getData(1).then(() =>
  getData(2).then((res) => getData(3).then((res) => getData(4)))
);

// async-await
console.log("Getting data through async-await");
(async () => {
  console.log("Getting data of 1 .....");
  await getData(1);
  console.log("Getting data of 2 .....");
  await getData(2);
  console.log("Getting data of 3 .....");
  await getData(3);
  console.log("Getting data of 4 .....");
  await getData(4);
  console.log("Getting data of 5 .....");
  await getData(5);
  console.log("Getting data of 6 .....");
  await getData(6);
})();
