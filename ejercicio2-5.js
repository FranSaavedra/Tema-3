/*
Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/
paresImpares();

function paresImpares () {
	var miArray = new Array(100);
	for (var i = 0; i < 100; i++) {
		miArray[i] = Math.floor(Math.random() * 1000 + 1);
	}
	miArray.forEach( function(element, index) {
		document.write(index + ": " + miArray[index] + "<br/>");
	});

	miArray.sort(function (a,b){
		return a % 2 - b % 2 || a - b;
	});
	document.write("Array ordenado: <br/>");
	miArray.forEach( function(element, index) {
		document.write(index + ": " + miArray[index] + "<br/>");
	});
}