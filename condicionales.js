
const StarWars7 = " Pelicula 7"
const PG = 13


const nameBeto = 'Beto'
const edadBeto = 26

const nameSalomon = 'Salomon'
const edadSalomon = 12

function VerPeli(A,B) {
	if (B>13){
		console.log(`${A} Puedes ver la pelicula, porque tu edad es:${B}`)
	}else{
		console.log(`${A} No puedes ver la pelicula, porque tu edad es:${B}`)
	}
}


console.log(VerPeli(nameBeto, edadBeto))
console.log(VerPeli(nameSalomon, edadSalomon))



// const Beto = {

// 	name: "Beto",
// 	edad: 26
// }

// console.log(Beto.name)
// console.log(Beto.edad)