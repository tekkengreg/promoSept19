const passCommand = (ticket, cb) => {
  let pizza = "";
  setTimeout(() => {
    pizza += "ticket done après 5 min";
    cb(pizza);
  }, 1000);
};

const dring = pizza => {
  console.log(pizza);
};
// passCommand("calzone", dring);

//************************* */

const familly = ["toto", "tata", "titi", "tutute"];

familly.forEach(f => console.log(f));

const newFamilly = familly
  .map(f => f.slice(0, 1).toUpperCase() + f.slice(1))
  .join(" youpi je suis le meilleur ");
console.log(newFamilly);

console.log([1, 2, 3].join());

const filtered = familly.filter(f => f.indexOf("t") >= 0);
console.log(filtered);

const finded = familly.find(f => f.indexOf("t") >= 0);
console.log(finded);
console.log("**************");
console.log(
  [12, 30, 6, 78].sort((a, b) => {
    console.log(a, b);
    return b - a;
  })
);

const board = [];
for (let i = 0; i < 80; i++) {
  board[i] = [];
  for (let j = 0; j < 80; j++) {
    board[i][j] = `${String.fromCharCode(i + 97)}-${j + 1}`;
  }
}
console.log(board);
