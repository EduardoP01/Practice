//Haciendo un cambio en GitHub
//Esta es una practica para un PullRequest

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
