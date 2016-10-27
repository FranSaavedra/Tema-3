

class TresEnRayaModelo{
	constructor(){
		this.jugador1 = new Jugador(1,true);
		this.jugador2 = new Jugador(2,false);
        this.combinacionesGanadoras = [
            [[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]], //Horizontal
            [[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]], //Vertical
            [[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]] //Diagonal
        ];
	}


	marcar (fila,columna) {
		if (this.jugador1.miTurno) {
			if(TresEnRayaVista.pintarCelda(1,fila,columna)){
				this.jugador1.actualizarTurno = false;
				this.jugador2.actualizarTurno = true;
				this.jugador1.nuevaUbicacion(fila,columna);
				if(this.comprobarFinJuego(this.jugador1)){
					alert("Jugador 1 ha ganado");
					var boton = document.getElementById("botonReiniciar");
					boton.click();
				}
			}
		}else {
			if(TresEnRayaVista.pintarCelda(2,fila,columna)){
				this.jugador1.actualizarTurno = true;
				this.jugador2.actualizarTurno = false;
				this.jugador2.nuevaUbicacion(fila,columna);
				if(this.comprobarFinJuego(this.jugador2)){
					alert("Jugador 2 ha ganado");
					var boton = document.getElementById("botonReiniciar");
					boton.click();
				}
			}
		}
		if (this.jugador1.obtenerUbicaciones.length + this.jugador2.obtenerUbicaciones.length == 9) {
			alert("Los jugadores han empatado");
			var boton = document.getElementById("botonReiniciar");
			boton.click();
		}
	}

	comprobarFinJuego(jugador){
        if (jugador.obtenerUbicaciones.length >= 3) {
			for (var i = 0; i < this.combinacionesGanadoras.length; i++) {
				var cont = 0;
				for(var j = 0; j < this.combinacionesGanadoras[i].length; j++){
					for(var z = 0; z < jugador.obtenerUbicaciones.length; z++){
		                if(this.combinacionesGanadoras[i][j][0] == jugador.obtenerUbicaciones[z][0] && 
		                	this.combinacionesGanadoras[i][j][1] == jugador.obtenerUbicaciones[z][1]){
		                    cont++;
		                }

			            if(cont == 3){
			                return true;
			            };
			        }
		        }
			}
		}

        return false;

	}
	
}

class TresEnRayaVista{//Renderizar
	constructor(padre){//div
		this.padre = padre;
		this.table = document.createElement('table');
		this.modelo = new TresEnRayaModelo();
	}

	dibujarTablero () {
		this.table.setAttribute("id", "tablero");
		//Utilizo let en el bucle para guardar el ámbito de cada iteración de la variabl, guardando su valor y usándolo en el onclick.
		for (let i = 0; i < 3; i++){
		    var tr = document.createElement('tr');
		    tr.style.border = "thin solid #000";

		    var td0 = document.createElement('td');
		    td0.style.border = "thin solid #000";
		    td0.style.width = "60px";
			td0.style.height = "60px";
			td0.style.textAlign = "center";
		    td0.addEventListener("click", ()=>this.modelo.marcar(i,0));
		    var td1 = document.createElement('td');
		    td1.style.border = "thin solid #000";
		    td1.style.width = "60px";
			td1.style.height = "60px";
			td1.style.textAlign = "center";
		    td1.addEventListener("click", ()=>this.modelo.marcar(i,1));
		    var td2 = document.createElement('td');
		    td2.style.border = "thin solid #000";
		    td2.style.width = "60px";
			td2.style.height = "60px";
			td2.style.textAlign = "center";
		    td2.addEventListener("click", ()=>this.modelo.marcar(i,2));

		    tr.appendChild(td0);
		    tr.appendChild(td1);
		    tr.appendChild(td2);

		    this.table.appendChild(tr);
		}
		var iniciar = document.createElement('input');
		iniciar.type = "button";
		iniciar.value = "Iniciar nuevo juego";
		iniciar.setAttribute("id", "botonReiniciar");
		iniciar.addEventListener("click", ()=>this.modelo = new TresEnRayaModelo());
		iniciar.addEventListener("click", this.limpiarTablero);

		var elementoPadre = document.createElement(this.padre);
		elementoPadre.appendChild(this.table);
		elementoPadre.appendChild(iniciar);
		document.body.appendChild(elementoPadre);
	}

	static pintarCelda(idJugador,fila,columna){
		var tabla = document.getElementById("tablero");
		var listFilas = tabla.childNodes;
		var filaMarcada = listFilas[fila];
		var listColumnas = filaMarcada.childNodes;
		var celda = listColumnas[columna];
		if (celda.innerHTML == "") {
			if (idJugador == 1) {
				celda.innerHTML = "X";
			}else {
				celda.innerHTML = "O";
			}
			return true;
		}else {
			alert("Movimiento invalido");
			return false;
		}
	}

	limpiarTablero(){
		var tabla = document.getElementById("tablero");
		for (var i = 0; i < tabla.childNodes.length; i++) {
			for (var j = 0; j < tabla.childNodes[i].childNodes.length; j++) {
				tabla.childNodes[i].childNodes[j].innerHTML = "";
			}
		}
	}
	
}

class Jugador {
	constructor(id,turno){
		this.id = id;
		this.turno = turno;
		this.ubicaciones = [];
	}
	get miTurno(){
		return this.turno;
	}
	set actualizarTurno(turno){
		this.turno = turno;
	}
	get obtenerUbicaciones(){
		return this.ubicaciones;
	}
	nuevaUbicacion(fila,columna){
		this.ubicaciones[this.ubicaciones.length] = [fila,columna];
	}
}


function init () {
	var vista = new TresEnRayaVista("div");
	vista.dibujarTablero();
}


window.onload = init;