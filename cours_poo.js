class Vehicle {
  constructor(branda, colorb, wheelsNb) {
    this.brand = branda;
    this.color = colorb;
    this.wheelsNb = wheelsNb;
  }

  displayColor() {
    console.log(`My color is ${this.color}`);
  }
  displayBrand() {
    console.log(`My color is ${branda} ou ${this.brand}`);
  }
  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Moto extends Vehicle {
  constructor(z, q) {
    super(z, q, 2);
  }

  displayColor() {
    console.log(`My color is ${this.color} but i am a moto`);
  }
}

class Car extends Vehicle {
  constructor(z, q) {
    super(z, q, 4);
  }
}

const suzuki = new Moto("suzuki", "white");
suzuki.displayColor();
const ferrari = new Car("ferrari", "red");
ferrari.displayColor();

const rolls = new Vehicle("RR", "glitter blue", 4);
console.log(`my color is is is ${rolls.color}`);
rolls.setColor("glitter orange");

// console.log(`my color is is ${rolls.getColor()}`);
console.log(`my color is is is ${rolls.color}`);
