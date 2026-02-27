const user = {
  username: "devkantkumar",
  email: "hello@devkantkumar.com",
  fname: "Dev",
  mname: "Kant",
  lname: "Kumar",
  role: ["admin", "super-admin,user"],
};

console.log("user is :", user);

class User {
  constructor(fname, mname, lname, username, email) {
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.username = username;
    this.email = email;
  }

  getName() {
    console.log(`Name : ${this.fname} ${this.mname} ${this.lname}`);
  }
}

const user1 = new User(
  "Dev",
  "Kant",
  "Kumar",
  "devkantkumar",
  "hello@devkantkumar.com",
);
user1.getName();

const user2 = new User(
  "hostel",
  "",
  "ease",
  "hostelease",
  "support@hostelease.com",
);
user2.getName();
