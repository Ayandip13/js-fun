## Classes, objects and prototypes

[Prototype]
> A javascript object is an entity having state and behavior (properties and method).
> JS objects have a special properties called prototype..
> We can set prototype using `__proto__` this keyword

const employee = {
  companyName: "The insider",
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const ayandip = {
  salary: 50000,
};

ayandip.__proto__ = employee;

> This is how we can inharite the properties of one object to another using `__proto__`

>If object and prototype both have the same method, object's method will be always get priority


[Classes]

> Class is a program-code template for creating objects
> Those objects will have some state(variables) & some behaviour(functions) inside it.
class car {
  start() {
    console.log("Start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand){
    this.brandName = brand
  }
}

const audi = new car()      `this is How we create new instances of classes by creating objects`
audi.setBrand('benz')
console.log(audi.setBrand());


[Constructors]

>>Constructor() method is: 
>> Autometically invoked by new, means when we try to create a new objects like: `const audi = new car()`
>> `new` keyword search for the `constructor` method inside that class.. so when `constructor` method has not created inside the class, then `new` will already create a `constructor` inside that class.
>> Initializes object
>>So, the main working of the `constructor` method is to initialize the object. Means when we want to initialize or to set any property at the time of creation of the object then we need `constructor`

class car {
  constructor(brand, milage) {
    console.log("creating a new object");
    this.brand = brand;
    this.milage = milage;
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brandName = brand;
  }
}

const audi = new car("audi", 20);
console.log(audi);
const marcedes = new car("marcedes", 14);
console.log(marcedes);

>>And this is how we create the constructors and we initialize the values of constructors at the time of creation of objects


[Inharitance]

>Inharitance is passing down Properties & methods from parent class to child class.

