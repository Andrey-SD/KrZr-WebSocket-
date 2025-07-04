const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvasHeight = 640;
const cellSize = canvasWidth / 3;

const imgCross = new Image(cellSize, cellSize);
imgCross.src = "img/cross.png";

const imgZero = new Image(cellSize, cellSize);
imgZero.src = "img/zero.png"


// imgCross.onload = () => {
//   drawPLayer(0, 0, 1);
// };

// imgZero.onload = () => {
//   drawPLayer(1, 1, 2);
// };

function drawField() {

  for (let x = 1; x < 3; x++) {
    ctx.moveTo(cellSize * x, 0);
    ctx.lineTo(cellSize * x, cellSize * 3);
    ctx.stroke();
  }
  for (let y = 1; y < 3; y++) {
    ctx.moveTo(0, cellSize * y);
    ctx.lineTo(cellSize * 3, cellSize * y);
    ctx.stroke();
  }
}

function drawPLayer(col, row, pl) {
  const x = col * cellSize;
  const y = row * cellSize;
  ctx.moveTo(col * cellSize, row * cellSize);
  if (pl == 1) {
    ctx.drawImage(imgCross, x, y, cellSize, cellSize);
  } else {
    ctx.drawImage(imgZero, x, y, cellSize, cellSize);
  }
}

function clickDetecter(event) {
  const offsetCellSize = canvas.offsetWidth / 3;
  const x = event.offsetX;
  const col = Math.floor(x / offsetCellSize);
  const y = event.offsetY;
  const row = Math.floor(y / offsetCellSize);
  drawPLayer(col, row, 1);
}

canvas.addEventListener("click", clickDetecter);

drawField();
