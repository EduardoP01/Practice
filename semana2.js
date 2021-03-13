//Haciendo un cambio en GitHub

//Ejemplo
//Separa un numero en centenas decenas y unidades
//Revertir el numero al reves
//Imprime el numero final

var numeroCompleto = 738;
if (numeroCompleto <= 999 && numeroCompleto > 99){
    var centenas = parseInt (numeroCompleto / 100);
    //centenas = parseInt (738 / 100);
    console.log(centenas);

    var decenas = parseInt ((numeroCompleto % 100) / 10);
    //decenas = parseInt (38 / 10)
    console.log(decenas);

    var unidades = (numeroCompleto % 10);
    //unidades = (8)
    console.log(unidades);

    console.log("Numero original: " + centenas+decenas+unidades);
    console.log("Valor Final: " + unidades + decenas + centenas);

}
else {
    console.log("Ingresa un numero de 3 cifras");
}

var Nota1 = "Parte 2 --------------------------";
console.log(Nota1);
//Condicional Switch
var condicionalSwitch = "Prado";
var edad = 18;
switch (condicionalSwitch){
    case 2:
        console.log("El valor ingresado es: 2");
        break;
    case 6:
        console.log("El valor ingresado es: 6");
        break;
    case "Prado":
        console.log("Hola Prado!");
            if (edad < 18){
                console.log("Eres menor de edad");
            }

        break;
    default: 
        console.log("El valor ingresado es distinto");
        break;
}

console.log("Sesion 6 ------------------------------")

//Para Ingresar datos:
//En terminal: npm install prompt-sync
//const prompt = require('prompt-sync')();
//var nombre = prompt ("Ingresa tu nombre");
//console.log("Hola " + nombre);

//Ejercicio (Al ingresar la hora te dice que pasa en la cancha)

const prompt = require('prompt-sync')();
//var horaDia = prompt("Que horas son? ");
//console.log(horaDia);

/*
if (horaDia <= 3){
    console.log("Esta el equipo de Soccer entrenando");
}
else if ( (horaDia > 3) && (horaDia < 6) ) {
    console.log("Esta el equipo de Futbol entrenando");
}
else if ((horaDia > 6) && (horaDia <= 9)) {
    console.log("Esta el equipo de Atletismo entrenando");
}


//Ejercicio con Switch
/*
switch(horaDia <= 3){
    case true:
        console.log("Esta el equipo de Soccer entrenando");
        break;
    case false:
        console.log("Esta otro equipo entrenando");
        break;
}
*/

//Ejercicio inverso (Dado el deporte te da la hora)
/*
var deporte = prompt("Que deporte esta siendo jugado? ");
switch (deporte){
    case "Soccer":
        console.log ("Horario: 1 - 3 pm");
        break;
    case "Futbol":
        console.log ("Horario: 3 - 6 pm");
        break;
    case "Atletismo":
        console.log("Horario: 6 - 9 pm");
        break;
}
*/

console.log("Sesion 7 ----------------");

//Arreglos
var arregloNumerico = [1, 2, 3, 4, 5];
console.log (arregloNumerico);

var arregloTexto = ["Hola", "Eduardo", "Interesante"];
console.log(arregloTexto);

var arregloMixto = ["Hola", 20, ,"Eduardo", 10, "AIM"];
console.log(arregloMixto);

console.log( arregloTexto[0] );

//Para cambiar un elemento
arregloTexto[2] = "Rosa";

//Para borrar un elemento
delete arregloTexto[2];
console.log(arregloTexto[2]);

//Para saber cuantos elementos hay en un arreglo
//console.log("La cantidad de elementos es: " 
//          + arregloTexto.length () );

//Agregar Elementos sl Final del Arreglo
arregloTexto.push ("APS");
console.log(arregloTexto);

//Borrar el ultimo elemento
arregloTexto.pop();
console.log(arregloTexto);

//Sustituir un elemento
arregloTexto.splice(0, 1, "Kugelschreiber");
console.log (arregloTexto);

//Borrar Multiples elementos (Del 1 borrar 2)
arregloTexto.splice(1, 3);
console.log (arregloTexto);

/*
//Ejercicio
//Lea 5 calificaciones por teclado y muestre promedio

const prompt2 = require /('promt-sync');
var calificaciones = [];
calificaciones[0] = prompt("Cual es tu primera calificacion? ");
calificaciones[1] = prompt("2nda calif? ");
calificaciones[2] = prompt("3era calif? ");
calificaciones[3] = prompt("4ta calif? ");
calificaciones[4] = prompt("5ta calif? ");

console.log (calificaciones);

var calif1 = calificaciones[0];
var calif2 = calificaciones[1];
var calif3 = calificaciones[2];
var calif4 = calificaciones[3];
var calif5 = calificaciones[4];
//var resultado = (calificaciones[0] + calificaciones[1] + calificaciones [2] + calificaciones[3] + calificaciones [4]) / 5;
var resultado = ((parseInt(calif1) + parseInt(calif2) + parseInt(calif3) + parseInt(calif4) + parseInt(calif5)) / 5);

console.log(resultado);
*/

//Juntar/concatenar arreglos
var concatena1 = ["Hola", "Buenas", "Tardes"];
var concatena2 = ["Adios", "Buenas", "Noches"];
console.log(concatena1.concat(concatena2));

//Ordenar elementos
var Frutas1 = ["Naranja", "Fresa", "Uvas"];
var Frutas2 = ["Naranja", "Fresa", "Durazno", "Uvas"];
var ArregloN = [5000, 10, 200, 1000, 400];

Frutas1.sort();
Frutas2.sort();
ArregloN.sort();
console.log(Frutas1);
console.log(Frutas2);
console.log(ArregloN);

//Todos los arreglos se pueden encontrar en GitHub sesion 7

console.log("Repeat/Ciclos/For-------------");

for(var i = 0; i < 3; i++){
    console.log("Hola - Forma automatica / " + "i: " + i);
}

//console.log (ArregloN[3]);

for(var i = 0; i < ArregloN.length; i++){
    console.log("El valor del arreglo en la posicion "
    + i + " es: " + ArregloN[i]);
}

