/*
Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. */
lanzamiento();

function lanzamiento () {
	alert("El resultado del dado ha sido: " + Math.floor(Math.random() * 6 + 1));
}