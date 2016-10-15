/*
Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales).
*/

var array = new Array(11);
var combinaciones = new Array(6);
for (var i = 0; i < 6; i++) {
	combinaciones[i] = new Array(6);
	iniciarArray(combinaciones[i]);
}
lanzamiento();

function lanzamiento () {
	iniciarArray(array);

	for (var i = 0; i < 36000; i++) {
		var dado1 = Math.floor(Math.random() * 6 + 1);
		var dado2 = Math.floor(Math.random() * 6 + 1);
		array[dado1 + dado2 - 2]++;
		combinaciones[dado1 - 1][dado2 - 1]++;
	}

	mostrarValores(array);
	mostrarCombinaciones(combinaciones);
}

function iniciarArray (array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = 0;
	}
}
function mostrarValores (array) {
	var valores = "";
	for (var i = 0; i < array.length; i++) {
		valores += (i + 2) + ": " + array[i] + " ";
	}
	alert(valores);
}

function mostrarCombinaciones (array) {
	var combinaciones = "";
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			combinaciones += (i + 1) + "-" + (j + 1) + ": " + array[i][j] + " ";
		}
	}
	alert(combinaciones);
}