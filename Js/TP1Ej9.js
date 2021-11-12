/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen*/

let frase = prompt("Escriba una frase");

console.log(frase);
console.log(frase.length);
console.log(frase.charAt(1));



for(let posicion = 0; posicion < frase.length; posicion++ ) 
{
    if(frase.charAt(posicion) == "a" || frase.charAt(posicion) == "e" ||frase.charAt(posicion) == "i" || frase.charAt(posicion) == "o" || frase.charAt(posicion) == "u"){
        document.write("<br>estas son vocales: " +frase.charAt(posicion));
    }
} 


