/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.*/


let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

console.log(meses.length)

for(let mesesdelaño = 0; mesesdelaño < meses.length; mesesdelaño++){
    document.write("<br>"+meses[mesesdelaño])
}

