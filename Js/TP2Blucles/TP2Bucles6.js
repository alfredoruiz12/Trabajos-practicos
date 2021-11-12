/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
*/ 




for(escalon = 1; escalon <= 30; escalon++){
   let piramide = "<br>";
for(let duplicado = 0; duplicado < escalon; duplicado++){
piramide += escalon;
}
document.write(piramide)


}