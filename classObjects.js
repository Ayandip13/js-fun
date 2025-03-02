// const employee = {
//   companyName: "The insider",
//   calcTax() {
//     console.log("tax rate is 10%");
//   },
// };

// const ayandip = {
//   salary: 50000,
// };

// const sayaniJamnu = {
//   salary: 60000,
// };

// ayandip.__proto__ = employee;
// sayaniJamnu.__proto__ = employee;
// console.log(ayandip.companyName);
// console.log(sayaniJamnu.calcTax());

// class car {
//   constructor(brand, milage) {
//     console.log("creating a new object");
//     this.brand = brand;
//     this.milage = milage;
//   }
//   start() {
//     console.log("Start");
//   }
//   stop() {
//     console.log("stop");
//   }
//   setBrand(brand) {
//     this.brandName = brand;
//   }
// }

// const audi = new car("audi", 20);
// console.log(audi);
// const marcedes = new car("marcedes", 14);
// console.log(marcedes);

class Parent {
  hello() {
    console.log("Helloooooooooooooooooooowwwwwwwwww");
  }
}
class Child extends Parent {}
let obj = new Child();

class Person {
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
}

class Engineer extends Person {
  work() {
    console.log("problem solving");
  }
}
