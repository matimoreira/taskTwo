/*document.getElementsByClassName("circle-green").onclick = function() {
	console.log("Hiciste click en el boton verde");
}*/
setInterval('getPosition()',500);

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
	console.log("Hiciste click en el boton verde");
}
function clickRed() {
	console.log("Hiciste click en el boton rojo");
}
function clickYellow() {
	console.log("Hiciste click en el boton amarillo");
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}