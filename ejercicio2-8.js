/*
Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.*/

var array = new Array(11);
lanzamiento();

function lanzamiento () {
	iniciarArray(array);

	for (var i = 0; i < 36000; i++) {
		var dado1 = Math.floor(Math.random() * 6 + 1);
		var dado2 = Math.floor(Math.random() * 6 + 1);
		array[dado1 + dado2 - 2]++;
	}

	mostrarValores(array);
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