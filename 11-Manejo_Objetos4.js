
function Punto(x,y) {
	this.x=x
	this.y=y
}

Punto.prototype.moverEnX = function moverEnX(x) {
	this.x += x
}

Punto.prototype.moverEnY = function moverEnY(y) {
	this.y += y
}

Punto.prototype.distancia = function(p) {
	
};
//Agregar funciones a objetos
const p1 = new Punto(0,4)

const p2 = new Punto(0,4)
	

const distancia = (punto1,punto2) => {
	const x = punto1.x - punto2.x
	const y = punto1.y - punto2.y

	return Math.sqrt((x*x)+(y*y))
}

// p1.moverEnX(10)
// distancia(p1,p2)
// p2.moverEnY(-4)
//distancia(p1,p2).toFixed(2)


