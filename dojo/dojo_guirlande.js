class Point {
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }

  render() {
    let style = "position: absolute;";
    style += "border-radius:50%;";
    style += `left:${this.x}vw;`;
    style += `top:${this.y}vh;`;
    style += `height:${this.r}px;`;
    style += `width:${this.r}px;`;
    style += `background:${this.c};`;
    return `<div style="${style}"></div>`;
  }
}

const randomOf = unit => Math.floor(Math.random() * unit);

const board = document.getElementById("board");
const circles = [];

const addCircle = () => {
  circles.push(
    new Point(
      randomOf(100),
      randomOf(100),
      randomOf(50),
      `rgb(${randomOf(256)},${randomOf(256)},${randomOf(256)})`
    )
  );

  board.innerHTML = "";
  for (let i = 0; i < circles.length; i++)
    board.innerHTML += circles[i].render();

  setTimeout(addCircle, randomOf(500));
};

const rmCircle = () => {
  circles.splice(randomOf(circles.length), 1);

  board.innerHTML = "";
  for (let i = 0; i < circles.length; i++)
    board.innerHTML += circles[i].render();

  setTimeout(rmCircle, randomOf(500));
};

addCircle();
rmCircle();
