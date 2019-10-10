class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  getBrand() {
    return this.brand;
  }
}
Car.prototype.number = 34;
Car.prototype.getColor = function() {
  return this.color + " " + this.number;
};

const honda = new Car("honda", "red");
console.log(honda.getBrand());
console.log(honda.getColor());
