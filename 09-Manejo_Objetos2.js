
//Agregar funciones a objetos
const p1 = {
	x:0,
	y:4,
	//Otra forma de escribir la funcion dentro de un objeto
	moverEnX (x) {
		this.x += x
	},
	moverEnY (y) {
		this.y += y
	}
}

const p2 = {
	x:3,
	y:0,
	moverEnX: function (x) {this.x += x},
	moverEnY: function (y) {this.y += y}
}

const distancia = (punto1,punto2) => {
	const x = punto1.x - punto2.x
	const y = punto1.y - punto2.y

	return Math.sqrt((x*x)+(y*y))
}

// p1.moverEnX(10)
// distancia(p1,p2)
// p2.moverEnY(-4)
//distancia(p1,p2).toFixed(2)


