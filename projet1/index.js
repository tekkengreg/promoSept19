const players = {
  player1: {
    name: "toto",
    score: 0
  },
  player2: {
    name: "tata",
    score: 0
  }
};

let currentUser = "player1";

document.getElementById(currentUser).classList.add("playerturn");
document.getElementById("player1-name").innerHTML = players.player1.name;
document.getElementById("player1-score").innerHTML = players.player1.score;
document.getElementById("player2-name").innerHTML = players.player2.name;
document.getElementById("player2-score").innerHTML = players.player2.score;

const rawCards = [
  {
    id: 1,
    color: "red",
    image: "bg.jpg"
  },
  {
    id: 2,
    color: "green",
    image: "bg.jpg"
  },
  {
    id: 3,
    color: "blue",
    image: "bg.jpg"
  }
];

const randomColor = () => Math.floor(Math.random() * 256);

// for (let i = 0; i < 2; i++) {
//   rawCards.push({
//     id: i,
//     color: `rgb(${randomColor()},${randomColor()},${randomColor()})`
//   });
// }

const displayedCards = [...rawCards, ...rawCards].sort(
  () => Math.random() - 0.5
);

const board = document.getElementById("board");
board.innerHTML = "";
displayedCards.forEach((dc, i) => {
  board.innerHTML += `<div class="col card grey" id="card-${i}" onclick="selectCard(${i})"></div>`;
});
// for (let i = 0; i < displayedCards.length; i++) {
//   // displayedCards[i];
//   board.innerHTML += `<div class="col card grey" id="card-${i}" onclick="selectCard(${i})"></div>`;

// }

let selectedCards = [];
const selectCard = iiiiii => {
  const card = displayedCards[iiiiii];
  selectedCards.push(card);
  const domSelected = document.getElementById(`card-${iiiiii}`);
  domSelected.classList.add("selected");
  domSelected.style.backgroundColor = card.color;
  console.log("selectedCards.length", selectedCards.length);
  if (selectedCards.length === 2)
    setTimeout(() => {
      if (checkSelectedCards()) {
        changeTurn();
      }
    }, 1000);
};

const checkSelectedCards = () => {
  if (selectedCards[0].id !== selectedCards[1].id) {
    const domSelected = document.getElementsByClassName("selected");
    for (let i = domSelected.length - 1; i >= 0; i--) {
      domSelected[i].style.backgroundColor = "grey";
      domSelected[i].classList.remove("selected");
    }
    changeTurn();
  } else {
    players[currentUser].score++;
    document.getElementById(`${currentUser}-score`).innerHTML =
      players[currentUser].score;
    const domSelected = document.getElementsByClassName("selected");
    for (let i = domSelected.length - 1; i >= 0; i--) {
      domSelected[i].classList.remove("selected");
    }
  }
  selectedCards = [];
  checkIfEndOfGame();
};

const changeTurn = () => {
  document.getElementById(currentUser).classList.remove("playerturn");
  currentUser = currentUser === "player1" ? "player2" : "player1";
  document.getElementById(currentUser).classList.add("playerturn");
};

const checkIfEndOfGame = () => {
  console.log(players.player1.score, players.player2.score, rawCards.length);
  if (players.player1.score + players.player2.score === rawCards.length) {
    let message = "";
    if (players.player1.score > players.player2.score)
      message = `${players.player1.name} wins`;
    else if (players.player1.score < players.player2.score)
      message = `${players.player2.name} wins`;
    else message = `DRAW`;

    alert(message);
    document.location.reload(true);
  }
};
