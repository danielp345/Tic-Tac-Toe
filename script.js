const table = document.querySelector("table");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrA = []
let arrB = []
let winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const circle = '<p><i class="far fa-circle"></i></p>';
const cross = '<p><i class="fas fa-times"></i></p>';

const choose = (e) => {
	const a = e.target.closest(".square");
	a.innerHTML = cross;
	array.splice(array.indexOf(parseInt(a.id)), 1);
    arrA.push(parseInt(a.id))
    if(array.length>0){
        itMove()
        console.log(arrA);
    }
};

const itMove = () => {
	let itIndex = Math.floor(Math.random() * array.length);
	let itSquare = document.getElementById(array[itIndex]);
	array.splice(itIndex, 1);
	itSquare.innerHTML = circle;
    arrB.push(itIndex)
    console.log(arrB);
};

const checkResult = () => {
    console.log('ok');
    winConditions.forEach(condition => {
        if(condition == arrA.sort()){
            console.log('win');
        }
    })
}

const game = (e) => {
    console.log(array);
    if(array.length>0) {
        choose(e)
    } else {
        winConditions.forEach(condition => {
            console.log(condition);
            if(arrA.includes(condition)) {
                console.log('win');
            }
        });
    }
}

table.addEventListener("click", game);
