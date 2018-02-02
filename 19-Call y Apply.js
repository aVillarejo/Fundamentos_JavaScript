const fredy = {
	nombre:'Alfredo',
	apellido: 'Medina'
}

function saludar(veces) {
	for (let i = 0; i< veces; i++) {
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}


// Utilizando call y apply 
function saludar2(veces,uppercase){
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str

	for (let i = 0; i< veces; i++) {
		console.log(str)
	}
}

saludar.call(fredy,4)


const params = [3,true]
saludar2.call(fredy, ... params)
saludar2.apply(fredy,[3,true])
