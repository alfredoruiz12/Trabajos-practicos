/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/
let numero1 = parseInt(prompt("escriba numero 1"));
let numero2 = parseInt(prompt("escriba numero 2"));
console.log(numero1)
console.log(numero2)

if(numero1 > numero2)
{
document.write("numero 1 es mayor " +numero1);
}
else{ 

    if(numero1 == numero2){
        document.write("ambos numeros son iguales" +numero1);
    }
      else{ document.write("el numero 2 es mayor " +numero2);
}
}

/*dentro del else van las opciones que tengamos
se puede preguntar las veces que sea necesaria.*/