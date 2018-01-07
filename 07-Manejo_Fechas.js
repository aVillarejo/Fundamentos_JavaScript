const nacimiento = new Date(1991,03,19)

nacimiento
Fri Apr 19 1991 00:00:00 GMT-0600 (CST)
const hoy = new Date()

hoy
Sat Jan 06 2018 17:18:50 GMT-0600 (CST)
const tiempo = hoy - nacimiento

tiempo
843239930063
const tiemposeg = tiempo/1000

tiemposeg
843239930.063

const tiempomin = tiemposeg/60

tiempomin
14053998.834383333
const tiempohr = tiempomin/60

tiempohr
234233.31390638888


const proximo = new Date(hoy.getFullYear(),nacimiento.getMonth(),nacimiento.getDate())

proximo

console.log(nacimiento.getDate())


const diasSemana = [
'Domingo',
'Lunes',
'Martes',
'Miercoles',
'Jueves',
'Viernes',
'Sabado'
]


console.log(diasSemana[proximo.getDay()])