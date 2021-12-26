let table = document.querySelector("table");
const startBtn = document.querySelector(".start");
const infoPanel = document.querySelector(".info-panel");
const resultInfo = document.querySelector(".result-info");
const winsInfo = document.querySelector(".wins-info");
const squares = document.querySelectorAll(".square");

let wins = 0;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let arrA = [];
let arrB = [];
let winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const circle = '<p><i class="far fa-circle"></i></p>';
const cross = '<p><i class="fas fa-times"></i></p>';

const choose = (object) => {
	object.innerHTML = cross;
	array.splice(array.indexOf(parseInt(object.id)), 1);
	arrA.push(parseInt(object.id));
};

const itMove = () => {
	let itIndex = Math.floor(Math.random() * array.length);
	let itSquare = document.getElementById(array[itIndex]);
	array.splice(itIndex, 1);
	itSquare.innerHTML = circle;
	arrB.push(parseInt(itSquare.id));
	console.log(arrB);
};

function checkResult(array) {
	for (let i = 0; i < winConditions.length; i++) {
		let condition = winConditions[i];
		if (
			array.includes(condition[0]) &&
			array.includes(condition[1]) &&
			array.includes(condition[2])
		) {
			return true;
		}
	}
	return false;
}

const moves = (a) => {
	choose(a);
	if (array.length < 9 && array.length != 0) {
		if (checkResult(arrA) == true) {
			wins++;
			setTimeout(endGame, 200, 'wygrana')
		} else {
			itMove();
			if (checkResult(arrB) == true) {
				setTimeout(endGame, 200, 'przegrana')
			}
		}
	} else if (array.length == 0) {
		if (checkResult(arrA) == true) {
			wins++
			setTimeout(endGame, 200, 'wygrana')
		} else {
			setTimeout(endGame, 200, 'remis')
		}
	} else {
		itMove();
	}
};

const reset = () => {
	squares.forEach((square) => {
		square.innerHTML = "";
	});
	array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	arrA = [];
	arrB = [];
};

const game = (e) => {
	if(infoPanel.style.display == "none"){
		const a = e.target.closest(".square");
		if (array.includes(parseInt(a.id))) {
			moves(a);
		}
	}
};

const endGame = (msg) => {
	resultInfo.textContent = msg;
	winsInfo.textContent = wins;
	infoPanel.style.display = "flex";
};

const startGame = () => {
	infoPanel.style.display = "none";
	reset()
};

startBtn.addEventListener("click", startGame);
table.addEventListener("click", game);
