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
/* Borrar esta para el codigo del ejercicio

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

//Arreglos
var arregloNumerico = [1, 2, 3, 4, 5];
console.log (arregloNumerico);

var arregloTexto = ["Hola", "Eduardo", "Interesante"];
console.log(arregloTexto);

var arregloMixto = ["Hola", 20, ,"Eduardo", 10, "AIM"];
console.log(arregloMixto);

console.log( arregloTexto[0] );