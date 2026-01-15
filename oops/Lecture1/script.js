//Creating an object
let obj = {
  name: "Suyash Verma",
  branch: "Information Technology",
  duration: "2023 - 27",
  sum: function sum(a, b) {
    console.log(a + b);
  },
};
console.log(obj.name);
console.log(obj.sum(3, 5));
// Using this method
let obj1 = {
  name: "",
  age: 0,
  setName: function (name) {
    this.name = name;
  },
  setAge: function (age) {
    this.age = age;
  },
};
obj1.setName("Suyash");
obj1.setAge(21);
console.log(obj1.name);
console.log(obj1.age);
//Creatinh a class in js
class vechile {
  constructor(model, door) {
    this.door = door;
    this.model = model;
  }
  startingSound() {
    console.log("Burrrrrr.......");
  }
}
class maruti extends vechile {
  startingSound() {
    console.log("Freeeeeeee......");
  }
}
const vechile1 = new vechile("Maruti", 4);
vechile1.startingSound();
const maruti1 = new maruti();
maruti1.startingSound();
