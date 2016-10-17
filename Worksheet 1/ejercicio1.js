/*
Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/

var num1 = parseInt(prompt("Introduce el primer numero: ", ""));
var num2 = parseInt(prompt("Introduce el segundo numero: ", ""));
var num3 = parseInt(prompt("Introduce el tercer numero: ", ""));
var num4 = parseInt(prompt("Introduce el cuarto numero: ", ""));
maximo(num1,num2,num3,num4);

function maximo (num1,num2,num3,num4) {
	alert("El numero mas alto es: " + Math.max(num1,num2,num3,num4));
}