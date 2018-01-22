// Todas las variables que se declaran 
// en una funcion se suben a la primera linea
var nombre = "Alberto"

function saludar10() {
	var nombre
	if (true) {
		nombre = "James"
	}

	console.log(`Hola ${nombre}`)
}

saludar10()

function saludarBeto10() {
 	const nombre = 'Beto'
	
	for (let i = 0; i <10; i++) {
	console.log(`Hola ${nombre}`)
	}
}
// let: limita el SCOPE de las variables
// a la funcion o estructura donde fue declarada
saludarBeto10()

//Fin