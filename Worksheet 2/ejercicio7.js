/*
Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios*/
var array = new Array(10);
iniciarArray(array);
mostrarValores(array);
addValue(array);
mostrarValores(array);

function iniciarArray (array) {
	for (var i = 0; i < 10; i++) {
		array[i] = 0;
	}
}
function addValue (array) {
	for (var i = 0; i < array.length; i++) {
		array[i]++;
	}
}
function mostrarValores (array) {
	var valores = "";
	for (var i = 0; i < array.length; i++) {
		valores += array[i] + " ";
	}
	alert(valores);
}