function suma1(... numbers) {
	let acum=0
	
	for (let i = 0; i < numbers.length; i++) {
		acum+=numbers[i]
	}
	return acum
}
function dobles1(... numbers) {
	const resultado = []
	for (let i = 0; i < numbers.length; i++) {
		resultado[i]=numbers[i]*2
	}
	return resultado
}
//
function suma(... numbers) {
	return numbers.reduce(function(acum,numero) {
		acum+=numero
		return acum
	}, 0)	
}


function dobles(... numbers) {
	return numbers.map(function(numero){
		return numero*2		
	})
}


function pares1(...numbers) {
	const resultado = []
	for (let i = 0; i < numbers.length; i++) {
		const numero = numbers[i]
		if (numero % 2 ==0) {
			resultado.push(numero)
		}
	}
	return resultado
}

function pares(...numbers) {
	return numbers.filter(function(numero){
			return (numero % 2 ==0)
	})
}


const sumaArrow = (... numbers) => {
	return numbers.reduce((acum,numero) => {
		acum+=numero
		return acum
	}, 0)	
}

const doblesArrow = (... numbers) => numbers.map((numero) => numero * 2)

const paresArrow = (...numbers) => numbers.filter((numero)=>(numero % 2 ==0))




numbers.filter(callbackfn: Function, thisArg?: any)



console.log(suma1(1,2,3))

console.log(dobles1(1,2,3))



