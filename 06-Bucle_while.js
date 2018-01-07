let hpSuperman = 100
let hpGoku = 100

let MIN_POWER =  5
let MAX_POWER = 12

let round = 0

const alive = () => hpSuperman > 0 && hpGoku > 0
const ataque = () => Math.round(Math.random()*(MAX_POWER - MIN_POWER)+MIN_POWER)
const gokuvivo = () => hpGoku > 0

while (alive()){
	round ++
	console.log(`round ${round}`)
	let atk_superman = ataque()
	let atk_goku = ataque()

	if (atk_goku>atk_superman) {
		console.log( `Goku ataca a Superman con un golpe de: ${atk_goku}pts`)
		hpSuperman -= atk_goku
		console.log(`Superman queda en ${hpSuperman}pts de vida`)
	}else{
		console.log( `Superman ataca a Goku con un golpe de: ${atk_goku}pts`)
		hpGoku -= atk_superman
		console.log(`Goku queda en ${hpGoku}pts de vida`)
	}
	console.log("") 
}

if (gokuvivo()) {
		console.log(`Goku gano la pelea. Su vida es de ${hpGoku}pts`)
	} else {
		console.log(`Superman gano la pelea. Su vida es de ${hpSuperman}pts`)
	}	
