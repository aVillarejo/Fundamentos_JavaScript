function platzom(str) {
	let translation = str

	const reverse = (str) => {
		return str.split('').reverse().join("")
	}

	const minMay = (str) => {
		const length =str.length
		let translation = '' 
		let capitalize = true

		for (let i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation+= capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize 
		}
		return translation
	}

	//si es palindromo, ninguna regla cuenta
	if (str == reverse(str)) {
		return minMay(str)
	}

	//si termina en "ar"
	//se quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')){
		translation = str.slice(0,-2)	
		//slice(), nos permite cortar cadenas
	}

	//si inicia con "z" se añade p
	if (str.toLowerCase().startsWith('z')){
		translation+='pe'
	}

	// si tiene 10 o mas letras, se divide con un guión
	if (translation.length >= 10) {
		firstHalf  = translation.slice(0,Math.round(translation.length/2))
		secondHalf = translation.slice(Math.round(translation.length/2))
		translation=`${firstHalf}-${secondHalf}`
	}
return translation
}