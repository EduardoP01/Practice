//Este es un ciclo/control iterativo regular
for (var i = 0; i <= 5; i++){
    console.log(i);
}

// Este es un ciclo que se ejecuta mientras la expresion sea verdadera
var contador = 5;
var contador2 = 10;
while(contador >= 0 && contador2 <= 15){
    console.log("Numero de Iteracion: " + contador + " y " + contador2);
    contador--;
    contador2++;
};

// Este es un ciclo que se ejecuta al menos una vez (do - while)
var contador3 = 0;
var condicion = "Hola";
/*
do {
    console.log("Entraste al ciclo do - while");
    if(contador3 == 2){
        condicion == "Adios";
    }
    contador3++;
}while(condicion == "Hola");
*/

var condicion2 = 25;
do{
    console.log("Valor: " + condicion2);
    condicion2 -= 5;
}while(condicion2 >= 5);

//Crear un programa que lea tantos numeros hasta un 0
const prompt = require('prompt-sync')();

var valores;
var suma = 0;

/*
do{
    var valores = prompt("Dame un numero: ");
    suma = suma + parseInt(valores);
 
}while(valores != 0);
*/

while(valores != 0){
    var valores = prompt("Dame un numero: ");
    suma = suma + parseInt(valores);
}

console.log("La suma total es: " + parseInt(suma));