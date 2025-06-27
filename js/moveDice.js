function moveDice(e) {
	
	switch (e.keyCode) {
		case 38: //up
			
			if (empty.row < 3) {				
				field[empty.row][empty.col] = field[empty.row + 1][empty.col];
				field[empty.row + 1][empty.col] = '';
				empty.row++;
				slideDice();
			}
		break;

		case 40: //down
			if (empty.row > 0) {			
				field[empty.row][empty.col] = field[empty.row - 1][empty.col];
				field[empty.row - 1][empty.col] = '';
				empty.row--;
				slideDice();				
			}
		break;

		case 37: //left
			if (empty.col < 3) {				
				field[empty.row][empty.col] = field[empty.row][empty.col + 1];
				field[empty.row][empty.col + 1] = '';
				empty.col++;
				slideDice();
			}
		break;

		case 39: //right
			if (empty.col > 0) {				
				field[empty.row][empty.col] = field[empty.row][empty.col - 1];
				field[empty.row][empty.col - 1] = '';
				empty.col--;
				slideDice();
			}
		break;
	}
}


function slideDice(img, xDirection, yDirection) {
	canvas.clearRect(0, 0, canvasHtml.width, canvasHtml.height);
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			if (field[row][col] instanceof Image){
				canvas.drawImage(field[row][col], col * 70 + 27, row * 70 + 27);
			}
		}
	}
//	isCompleted();
}

addEventListener("keyup", moveDice);