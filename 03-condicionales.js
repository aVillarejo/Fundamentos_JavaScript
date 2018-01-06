
const StarWars7 = " Pelicula 7"
const PG = 13


const nameBeto = 'Beto'
const edadBeto = 26

const nameSalomon = 'Salomon'
const edadSalomon = 12

function VerPeli(name,edad,isWhitAdult=false) {
	if (edad >= PG){
		alert(`${name} Puedes ver la pelicula, porque tu edad es:${edad} años`)
	}else if (isWhitAdult){
			alert(`${name} Puedes ver la pelicula, porque tu edad es:${edad} años 
pero vienes con un adulto`)

	} else{
		alert(`${name} No puedes ver la pelicula, porque tu edad es: ${edad} años`)
	}
}


//Reto Realizar la funcion anterior con funciones flecha
const VerPeli2 = (name,edad,isWhitAdult=false) => {
	if (edad >= PG){
		alert(`${name} Puedes ver la pelicula, porque tu edad es:${edad} años`)
	}else if (isWhitAdult){
			alert(`${name} Puedes ver la pelicula, porque tu edad es:${edad} años 
pero vienes con un adulto`)

	} else{
		alert(`${name} No puedes ver la pelicula, porque tu edad es: ${edad} años`)
	}
}

//console.log(VerPeli(nameBeto, edadBeto))
console.log(VerPeli(nameSalomon, edadSalomon ))
console.log(VerPeli2(nameSalomon, edadSalomon ))



// const Beto = {

// 	name: "Beto",
// 	edad: 26
// }

// console.log(Beto.name)
// console.log(Beto.edad)