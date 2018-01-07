
const nombre = 'Alberto'
const dias = [
	'lunes',
	'martes',
	'miercoles',
	'jueves',
	'viernes',
	'sabado',
	'domingo'
	]

	const Correr = () => {
		//retorna un valor Aleatorio entre 5 y 15
		const min = 5
		const max = 15
		
		return Math.round(Math.random() * (max-min)) + 5
	}

	
	let totalKms = 0
	const length= dias.length
	for (let i = 0; i <length; i++) {
		const kms = Correr()
		totalKms+=kms
		console.log(`Èl dia ${dias[i]}, ${nombre} corrio ${kms} kms`)
	}
	const prom = totalKms/length
	console.log(`En promedio ${nombre} corrio ${prom.toFixed(2)} kms`)
