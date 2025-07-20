const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvasHeight = 640;
const cellSize = canvasWidth / 3;
let playerRound = true;
const imgCross = new Image(cellSize, cellSize);
imgCross.src = "img/cross.png";

const imgZero = new Image(cellSize, cellSize);
imgZero.src = "img/zero.png";

const fieldArray = [[], [], []];


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
  if (fieldArray[row][col] == undefined) {
    drawPLayer(col, row, playerRound);
    fieldArray[row][col] = playerRound;
    playerRound = !playerRound;
    if (checkWinner() == true) {
      showWinner("Хрести");
    } else if (checkWinner() == false) {
      showWinner("Нолики");
    }
  }
}

function checkWinner() {
  const size = 3;

  // Проверка строк
  for (let row = 0; row < size; row++) {
    if (
      fieldArray[row][0] === fieldArray[row][1] &&
      fieldArray[row][0] === fieldArray[row][2]
    ) {
      return fieldArray[row][0];
    }
  }

  // Проверка столбцов
  for (let col = 0; col < size; col++) {
    if (
      fieldArray[0][col] === fieldArray[1][col] &&
      fieldArray[0][col] === fieldArray[2][col]
    ) {
      return fieldArray[0][col];
    }
  }

  // Проверка главной диагоналі
  if (
    fieldArray[0][0] === fieldArray[1][1] &&
    fieldArray[0][0] === fieldArray[2][2]
  ) {
    return fieldArray[0][0];
  }

  // Проверка побочной диагоналі
  if (
    fieldArray[0][2] === fieldArray[1][1] &&
    fieldArray[0][2] === fieldArray[2][0]
  ) {
    return fieldArray[0][2];
  }

  // Если победителя нет
  return null;
}

function showWinner(player) {
  canvas.removeEventListener("click", clickDetecter);
  alert(`${player} перемогли!!!`);
}

canvas.addEventListener("click", clickDetecter);

drawField();

