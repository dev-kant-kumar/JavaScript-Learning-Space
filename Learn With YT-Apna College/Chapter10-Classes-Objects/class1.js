// this is code is for putting learning of classes and objects into practice
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetail() {
    console.log(`Name : ${this.name}`);
    console.log(`Age : ${this.age}`);
    console.log("\n\n");
  }
}

class Student extends Person {
  constructor(name, age, roll) {
    super(name, age);
    this.roll = roll;
  }

  setMarks(m1, m2, m3, m4, m5) {
    this.m1 = m1;
    this.m2 = m2;
    this.m3 = m3;
    this.m4 = m4;
    this.m5 = m5;
    this.marks = m1 + m2 + m3 + m4 + m5;
  }

  getInfo() {
    console.log(`Name : ${this.name}`);
    console.log(`Age : ${this.age}`);
    console.log(`Roll : ${this.roll}`);
    console.log(`Total Marks : ${this.marks}`);
  }
}

// const p1 = new Person("Adam", 28);
// p1.getDetail();

// const p2 = new Person("Sam", 31);
// p2.getDetail();

const s1 = new Student("William", 22, 5);
s1.setMarks(99, 98, 96, 95, 97);
s1.getInfo();
