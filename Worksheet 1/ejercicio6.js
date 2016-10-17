/*
Crea una función para calcular potencias de un modo recursivo.
*/
var num = parseInt(prompt("Introduce un numero para calcular su potencia: ", ""));
var exponente = parseInt(prompt("Introduce su exponente: ", ""));
alert("La potencia es: " + calcularPotencia(num,exponente));

function calcularPotencia (num,exponente) {
	if (exponente != 0) {
		return num * calcularPotencia(num, --exponente);
	}else{
		return 1;
	}
}