/*document.getElementsByClassName("circle-green").onclick = function() {
	console.log("Hiciste click en el boton verde");
}*/
setInterval('getPosition()',700);

document.getElementsByClassName('circle-green')[0].addEventListener('click', clickGreen);
document.getElementsByClassName('circle-red')[0].addEventListener('click', clickRed);
document.getElementsByClassName('circle-yellow')[0].addEventListener('click', clickYellow);
document.getElementById('confirm').addEventListener('click', confirmInput);


var clicks = [];

var mayor = [0, 0, 1, 2, 0, 1, 0, 2];

var menor = [1, 2, 0, 1, 2, 0, 2, 1];

var resultado = [1, 1, 1, 2, 0, 2, 2, 2];

var positions = ["flex-start", "flex-end", "center"];

var number = getRandomInt(1, 101);


document.getElementById('number'). innerHTML = number;



function getPosition(){

	var containerGroup = document.getElementById("container-group");

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
	addCircle('green');

}


function clickRed() {

	clicks.push(1);
	addCircle('red');

}


function clickYellow() {

	clicks.push(2);
	addCircle('yellow');

}


function confirmInput() {
	
	if (clicks.toString().localeCompare(mayor.toString()) == 0) {

		
		showCard('Mayor', 'Has predicho que el proximo numero sera mayor', 'card-primary');
		console.log("mayor");	
	
	}else if (clicks.toString().localeCompare(menor.toString()) == 0) {

		showCard('Menor', 'Has predicho que el proximo numero sera menor', 'card-primary');
		console.log("menor");
	
	}else if(clicks.toString().localeCompare(resultado.toString()) == 0){

		showCard('resultado', 'El otro numero es '+ getRandomInt(1, 101) + ', fijate vos si ganaste o perdiste... MANEJATE!', 'card-primary');
		console.log("menor");

	}
	else{

		showCard('Error', 'Has tenido un error, mejora ese aim!', 'card-danger');
		console.log("Te equivocaste men");
	
	}
	resetContainerCircle();
}


//funcion auxiliar para ahorrarme repetir codigo
function showCard(textTitle, textMessage, type) {

	var card = document.getElementById('card');
	var titulo = document.getElementById('card-title')
	var mensaje = document.getElementById('card-message');

	
	card.classList.remove('card-danger');
	card.classList.remove('card-primary');
	card.classList.add(type);

	titulo.innerHTML = textTitle;
	mensaje.innerHTML = textMessage;

	card.style.display = 'block';
	card.style.opacity = 1;
	fade();
}


function addCircle(color) {
	var container = document.getElementById('container-circle');
	container.innerHTML += "<span class=\"icon icon-"+ color +"\"><i class=\"fas fa-circle\"></i></span>";
}


function resetContainerCircle() {
	var container = document.getElementById('container-circle');
	container.innerHTML = "";
	clicks = [];
}



// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}


//Una genialidad que encontre por ahi 
//funcion recursiva para desvanecer un elemento en base a ir disminuyendo la opacidad 
function fade(){

	var card = document.getElementById('card');
	(card.style.opacity-=.025)<0?card.style.display="none":setTimeout(fade,100);

	// (element.style.opacity-=.1)<0?element.style.display="none":setTimeout(fade,40); Por alguna razon no me funciona con parametro >(

}