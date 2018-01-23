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

 const saludarFamilia = (apellido) => {
	return  saludarMiembro = (nombre)=> {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}


function makePrefixer(prefijo){
	return function palabra (str){
		console.log(`${prefijo}${str}`)
	}
}

const makePrefixerArrow = (prefijo) => palabra = (str) => console.log(`${prefijo}${str}`)


const PrefijoRe = makePrefixer('re')
PrefijoRe('malo')


const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')
const saludarRomero = saludarFamilia('Romero');

saludarGomez("Pedro");

saludarPerez("Pedro");

saludarRomero("Alfredo");

///////////

