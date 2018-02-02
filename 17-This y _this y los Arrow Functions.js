
class Persona {
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos		
		// operador o this.amigos = amigos || []
	}

	//El contexto de this se pierde dentro de la funcion y es necesario guardala en una variable
	listarAmigos1 (){
		const _this = this
		this.amigos.forEach( function(amigo) {
			console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
		})
	}
	//bind, es un metodo de las funciones se usa para setear el valor de this a una funcion, definir el contexto de esa funcion
	listarAmigos2 (){
		this.amigos.forEach(function(amigo) {
			console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		}.bind(this))
	}
	// las Arrow functions hacen el bind automaticamente 
	listarAmigosArrow (){
		this.amigos.forEach((amigo) => {
			console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		})
	}
}

const Beto = new Persona("Beto",['1','2','3'])


