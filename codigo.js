//alert funcion
//() parametros

//var nombre = "Kevin";
//var edad = 20;
//var apellido ="Santacruz";

//alert(nombre + " "+apellido + "\n"+ edad + " años.");

//alert(2+5*8);

/**Peso en marte*/
var peso;
peso = prompt("¿Cual es tu peso en marte? (Kg)","70");
alert("Tu peso en marte es: "+ (parseInt(peso)/9.81) * 3.711 );

p = document.getElementsByTagName('p');

a = document.createElement('a');
a.id ="etiquetaA";

p[0].appendChild(a);