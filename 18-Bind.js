class Toggable{
	constructor(el){
		//inicalizar el estado interno
		this.el = el
		this.el.innerHTML = 'OFF'
		this.activated = false
		this.onclick = this.onclick.bind(this)
		this.el.addEventListener('click',this.onclick )
		//this.el.addEventListener('click', this.onclick.bind(this))
	}

	onclick(ev){
		//console.log('esto es lo que tiene this en el onClick',this)
		//cambiar el estado interno
		//llamar a toggleText
	this.activated = !this.activated
	this.toggleText()

	}

	toggleText(){
		//cambiar el texto
		this.el.innerHTML = this.activated ? 'ON' : 'OFF'
	}
}

const button = document.getElementById('boton')
const miBoton =  new Toggable(button)

// function saludar(nom,ape){
// console.log(`Hola ${nom} ${ape}!`)
// }
// undefined
// saludar('Beto','Villarejo')
// VM144:2 Hola Beto Villarejo!
// undefined
// const saludarBeto = saludar.bind(null,"Beto")
// undefined
// saludarBeto('Villarejo') 
// VM144:2 Hola Beto Villarejo!
// undefined
