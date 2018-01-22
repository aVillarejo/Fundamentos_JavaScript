
// function saludarGomez(nombre) {
// 	console.log(`Hola ${nombre} Gomez`)
// }


// function saludarPerez(nombre) {
// 	console.log(`Hola ${nombre} Perez`)
// }

function saludarFamilia(apellido) {
	return function saludarMiembro(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

function saludarFamilia(apellido) {
	return function saludarMiembro(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')

const saludarRomero =saludarFamilia('Romero');

saludarGomez("Pedro");
saludarGomez('Juan');
saludarGomez("Beto");

saludarPerez("Pedro");
saludarPerez('Juan');
saludarPerez("Beto");

saludarRomero("Alfredo");

