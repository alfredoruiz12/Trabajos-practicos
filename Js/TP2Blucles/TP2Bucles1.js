/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

let edad = parseInt(prompt("Escriba su edad"));
console.log(edad)
let conducir = 18;
    
if(edad >= conducir){
    document.write("es mayor, ya puede conducir: "+edad);
}
else if (conducir > edad){
    document.write("usted es menor de edad no puede conducir "+edad);
}

