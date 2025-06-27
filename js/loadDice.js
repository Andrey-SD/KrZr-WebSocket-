var canvas = canvasHtml.getContext("2d");
var dices = [],
	field = [];

function empty() {
	this.row = "";
	this.col = "";
}

init();
mix();





function init() {
	let col = 0,
		row = 0;
	canvasHtml.width = 338;
	canvasHtml.height = 338;
	for (let index = 0; index < 16; index++) {
		dices[index] = "./img/numerals/" + (index + 1) + ".png";
	}
}

function mix() {
	for (let row = 0; row < 4; row++) {
		field[row] = [];
		for (let col = 0; col < 4; col++) {
			let random = Math.floor(Math.random() * dices.length);
			if (dices[random] == "./img/numerals/16.png") {
				empty.row = row;
				empty.col = col;
				field[row][col] = new Image();
				field[row][col].src = "./img/numerals/0.png";
			} else {
				field[row][col] = new Image();
				field[row][col].src = dices[random];
				field[row][col].onload = function () {
					this.xPosition = col * 70 + 27;
					this.yPosition = row * 70 + 27;
					canvas.drawImage(this, this.xPosition, this.yPosition);
				};
			};
			dices.splice(random, 1);
		}
	}
	if (!isSolution()){
			location.reload();
	};
}

function isSolution() {
	let index = 0;
	let linearArray = [];
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			let str = field[row][col].src;
			str = str.substr(str.indexOf('numerals/') + 9);
			linearArray[index++] = parseInt(str, 10);
		}
	}

	//	console.table(linearArray);
	let pair = 0;
	for (let index = 0; index < 15; index++) {
		for (let innerIndex = (index + 1); innerIndex < 16; innerIndex++) {
			if ((linearArray[index] > linearArray[innerIndex]) &&
				(linearArray[innerIndex] != 0)) pair++;
		}
	}
	console.log(pair + (empty.row + 1));
	if ((pair + (empty.row + 1))%2 == 0) return true; 

}