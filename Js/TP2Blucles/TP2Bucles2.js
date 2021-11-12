/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

*/ 

 

let = valorDeNota = parseInt(prompt("Escriba un numero del 1 al 10"))


    if(valorDeNota <= 2)
    alert("muy deficiente")
   else if(valorDeNota <= 4)
   alert("insuficiente")
   else if(valorDeNota <=6)
   alert("suficiente")
   else if(valorDeNota == 7)
   alert("Bien")
   else if(valorDeNota <= 9)
   alert("Notable")
   else if(valorDeNota == 10)
   alert("Sobresaliente")
    else if(valorDeNota >= 11)
    document.write("NUMERO ERRONEO")
    else if (valorDeNota != valorDeNota)
    document.write("introduzca u numero valido")
