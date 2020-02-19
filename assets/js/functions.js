/*document.getElementsByClassName("circle-green").onclick = function() {
	console.log("Hiciste click en el boton verde");
}*/
setInterval('getPosition()',500);

document.getElementsByClassName('circle-green')[0].addEventListener('click', clickGreen);
document.getElementsByClassName('circle-red')[0].addEventListener('click', clickRed);
document.getElementsByClassName('circle-yellow')[0].addEventListener('click', clickYellow);
document.getElementById('confirm').addEventListener('click', confirmInput);

var clicks = [];

var mayor = [0, 0, 1, 2, 0, 1, 0, 2];

var menor = [1, 2, 0, 1, 2, 0, 2, 1];

function getPosition(){

	var containerGroup = document.getElementById("container-group");
	var positions = ["flex-start", "flex-end", "center"];

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

function confirmInput() {
	showCard('Se ha registrado un click', 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'secodary');
	
	if (clicks.toString() == mayor.toString()) {
		console.log("mayor");
	
	}else if (clicks.toString() == menor.toString()) {
	
		console.log("menor");
	
	}else{
		console.log("Te equivocaste men");
	}
}

//funcion auxiliar para ahorrarme repetir codigo
function showCard(textTitle, textMessage, type) {
	var card = document.getElementById('card');
	var titulo = document.getElementById('card-title')
	var mensaje = document.getElementById('card-message');
	card.style.display = 'block';
	titulo.innerHTML = textTitle;
	mensaje.innerHTML = textMessage;
	card.style.opacity = 1;
	fade(card);
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
//Una genialidad que encontre por ahi 
//funcion recursiva para desvanecer un elemento en base a ir disminuyendo la opacidad 
function fade(element){
	(element.style.opacity-=.1)<0?element.style.display="none":setTimeout(fade,40);
}