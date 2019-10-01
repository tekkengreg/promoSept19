class Point {
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }

  render() {
    let style = "position:absolute;";
    style += `border-radius:50%;`;
    style += `left:${this.x}vw;`;
    style += `top:${this.y}vh;`;
    style += `width:${this.r}px;`;
    style += `height:${this.r}px;`;
    style += `background:${this.c}`;
    return `<div style="${style}"></div>`;
  }
}

const randomOf = unit => Math.floor(Math.random() * unit);
const updateView = () => {
  board.innerHTML = "";
  for (let i = 0; i < pointList.length; i++)
    board.innerHTML += pointList[i].render();
};
const board = document.getElementById("board");
const pointList = [];
const addPoint = () => {
  const point = new Point(
    randomOf(100),
    randomOf(100),
    randomOf(250),
    `rgb(${randomOf(256)},${randomOf(256)},${randomOf(256)})`
  );

  pointList.push(point);
  updateView();
  setTimeout(addPoint, randomOf(500));
};

const rmPoint = () => {
  pointList.splice(randomOf(pointList.length), 1);
  updateView();
  setTimeout(rmPoint, randomOf(1500));
};

addPoint();
rmPoint();
