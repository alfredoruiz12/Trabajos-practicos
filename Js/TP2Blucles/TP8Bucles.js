/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
*/

let numero = parseInt(prompt("ingrese un numero del 1 al 50"))

while(isNaN(numero) || numero > 50 || numero < 1){
    alert("DATOS INCORRECTOS")
    Escalera =  parseInt(prompt("ingrese numero del 1 al 50"));
}

/*let Escalera = "";
for(let conteo = 1; conteo <= numero; conteo++){
    for()
}*/

