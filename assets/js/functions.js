/*document.getElementsByClassName("circle-green").onclick = function() {
	console.log("Hiciste click en el boton verde");
}*/
setInterval('getPosition()',500);

document.getElementsByClassName('circle-green')[0].addEventListener('click', clickGreen);
document.getElementsByClassName('circle-red')[0].addEventListener('click', clickRed);
document.getElementsByClassName('circle-yellow')[0].addEventListener('click', clickYellow);

var clicks = [];
var mayor = [0, 0, 1, 2, 0, 1, 0, 2];
var menor = [1, 2, 0, 1, 2, 0, 2, 1];

function getPosition(){

	var containerGroup = document.getElementById("container-group");
	var positions = ["flex-start", "flex-end", "center"];
	// var containerGroup = document.getElementById("container-group").children;
	// var countCircle = document.getElementById("container-group").childElementCount;
	for (var i = 0; i < containerGroup.childElementCount; i++) {
		var justifyContent = positions[getRandomInt(0, 3)];
		var alignItems = positions[getRandomInt(0, 3)];
		changePosition(containerGroup.children[i], justifyContent, alignItems);
	}
}

function changePosition(element, justifyContent, alignItems) {
	element.style.justifyContent = justifyContent;
	element.style.alignItems = alignItems;
}
function clickGreen() {
	clicks.push(0);
}
function clickRed() {
	clicks.push(1);
}
function clickYellow() {
	clicks.push(2);
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}