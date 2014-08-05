// Juego piedra , papel , tijera

//Genera un numero aleatorio dentro de un rango de numeros
function aleatorio(minimo , maximo){
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra","Papel","Tijera"];
var resultado = ["Ganastes","Perdistes","Empate"];
var res;
var opcionUsuario;
var opcionMaquina=aleatorio(0,2);

opcionUsuario = prompt ("¿Que eliges?"+"\nPiedra : 0"+
	"\nPapel:1"+"\nTijera:2",0);

if (opcionUsuario == piedra){
	if(opcionMaquina == piedra){
		alert("Empate!");
		res=2;

	}else if (opcionMaquina == papel){
		alert("Perdistes");
		res=1;
	}else {
		alert("Ganastes!");
		res=0;
	}
}
if(opcionUsuario == papel){
	if(opcionMaquina == piedra){
		alert("Ganastes!");
		res=0;
	}else if (opcionMaquina == papel){
		alert("Empate");
		res=2;
	}else {
		alert("Perdistes!");
		res=1;
	}
}
if(opcionUsuario == tijera){
	if(opcionMaquina == piedra){
		alert("Perdistes!");
		res=1;
	}else if (opcionMaquina == papel){
		alert("Ganastes");
		res=0;
	}else {
		alert("Empate!");
		res=2;
	}
}

h1 = document.getElementsByTagName('h1');

h2 = document.createElement('h5');
h2.id ="etiquetaA";

h1[0].appendChild(h2);

document.getElementById('etiquetaA').innerHTML = "Resultado del Game:<br>Tu elegistes "
	+opciones[opcionUsuario]+ "<br>JavaScript Pickeo : " +opciones[opcionMaquina]
	+"<br> Resultado : "+resultado[res];