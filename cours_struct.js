const a = 2;
let b = 4;
let multiab = 0;

while (0 < b) {
  multiab += a;
  b--;
}
console.log(multiab);

let cumul = 0;
for (let i = 0; i <= 100; i += 5) {
  cumul += i;
}
console.log(cumul);

const operator = "/";
const x = 5;
const y = 1;
const resope = 0;
function changeOperator(x, y, operator) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "x":
      return x * y;
    case "/":
      if (y === 0) return "impossaible";
      else return x / y;

    default:
      break;
  }
}

console.log(changeOperator(5, 6, "/"));
console.log(changeOperator(5, 6, "+"));
console.log(changeOperator(5, 6, "-"));
