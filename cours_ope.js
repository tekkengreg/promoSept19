const john = 24;
const barbara = 28;
const patrick = 32;
const benji = 17;

const students = [
  {
    name: "John",
    age: 24
  },
  {
    name: "Barb",
    age: 28
  },
  {
    name: "Pat",
    age: 32
  },
  {
    name: "Benji",
    age: 17
  }
];

const sum = john + barbara + patrick + benji;
console.log(sum, sum / 4);

let sum2 = 0;
for (let index = 0; index < students.length; index++) {
  sum2 += students[index].age;
}
console.log(sum2, sum2 / students.length);

const students2 = [24, 28, 32, 17];
let sum3 = students2.reduce(function(a, b) {
  return a + b;
});
console.log("sum3", sum3);

if (patrick - benji > 10) console.log("vrai");
else console.log("faux");

patrick - benji > 10 ? console.log("vrai") : console.log("faux");

console.log(patrick - benji > 10);
