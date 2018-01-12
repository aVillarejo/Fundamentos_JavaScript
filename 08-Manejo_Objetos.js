const p1 = {
	x:0,
	y:4
}

const p2 = {
	x:3,
	y:0
}

const distancia = (punto1,punto2) => {
	const x = punto1.x - punto2.x
	const y = punto1.y - punto2.y

	return Math.sqrt((x*x)+(y*y))
}

console.log(distancia(p1,{ x:20, y:-7}))