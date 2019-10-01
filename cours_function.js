function sayHello() {
  console.log("hello world");
}
sayHello();

const echo = message => {
  return message;
};

console.log(echo("youpi"));

const doubler = (simple = 3, message = "toto") => simple * 2 + " " + message;
console.log(doubler(null, "tata"));

const score = 5656;
// for (let index = 0; index < 10; index++) {
//   console.log(doubler(score));
// }

const multi = (a, b) => {
  return a * b;
};
console.log(multi(3, 7));

const updateMsg = message => `*${message}*`;
console.log(updateMsg("jojo lapin"));
