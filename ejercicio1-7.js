/*
Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.*/

var num = parseInt(prompt("Introduce un numero para calcular su factorial: ", ""));

document.write("<table border = 0 cellspacing = 2 bgcolor = 'black' width = 200>");
for (var i = 1; i <= 10; i++) {
	document.write("<tr bgcolor = 'white' height = 50>");
	for (var j = 0; j < 2; j++) {
		if (j == 0 ) {
			document.write("<td width = 50>" + i + "</td>");
		}else{
			document.write("<td width = 50>" + calcularFactorial(i) + "</td>");
		}
		
	}
	document.write("</tr>");
}
document.write("</table>");

alert("El factorial es: " + calcularFactorial(num));


function calcularFactorial (num) {
	if(num == 0) 
		return 1;

    return num * calcularFactorial(num - 1);
}