/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/

let numero1 = parseInt(prompt("escriba numero1"));
let numero2 = parseInt(prompt("escriba numero2"));
let numero3 = parseInt(prompt("escriba numero3"));

if(numero1 > numero3 && numero1 > numero2){
    document.write("el numero 1 es mayor "+numero1);
}
else if (numero2 > numero3){
    document.write("el numero 2 es mayor "+numero2);
}else if (numero1 == numero2 && numero2 == numero3) {
    document.write("todos los numeros son iguales "+numero2)
}
else {
    document.write("el tercer numero es mas grande "+numero3)
}
    
    
    
    
    /*para colocar mas "condiciones logicas" colocar &&*/



