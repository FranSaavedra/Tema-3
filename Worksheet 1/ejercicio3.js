/*Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.*/

lanzamiento();

function lanzamiento () {
	var cont1 = 0;
	var cont2 = 0;
	var cont3 = 0;
	var cont4 = 0;
	var cont5 = 0;
	var cont6 = 0;
	for (var i = 0; i < 6000; i++) {
		var res = Math.floor(Math.random() * 6 + 1);
		switch (res) {
			case 1:
				cont1++;
				break;
			case 2:
				cont2++;
				break;
			case 3:
				cont3++;
				break;
			case 4:
				cont4++;
				break;
			case 5:
				cont5++;
				break;
			case 6:
				cont6++;
				break;
			default:
				break;
		}
	}

	alert("El 1 ha salido: " + cont1 + " veces, el 2 ha salido: " + cont2 + " veces, el 3 ha salido: " + cont3 + 
		" veces, el 4 ha salido: " + cont4 + " veces, el 5 ha salido: " + cont5 + " veces, el 6 ha salido: " + cont6 + " veces.");
}