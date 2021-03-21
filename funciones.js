//Declaracion de Funcion
function multiplica(primerOperando){
    var resultado = primerOperando * 2;
    console.log("El resultado es: " + resultado);
}

multiplica(12);

//Sin parametros
function multiplica3(){
    var resultado3 = 2 * 2;
    console.log("El resultado es: " + resultado3);
}

multiplica3();

//Con multiples parametros
function multiplica4(primerOperando, segundoOperando){
    var resultado = primerOperando * segundoOperando;
    console.log("El resultado es: " + resultado);
}
multiplica4(30, 2);

//Funcion como expresion
var resultado2 = function multiplica2(primerOperando){
    return 2 * primerOperando;
}

console.log(resultado2(25));


//Funcion Flecha => Para funciones cortas

var saludaPersona = (nombre) => console.log("Hola " + nombre);
saludaPersona("Prado");

const suma = (numero) => console.log(numero * 12);
suma(2);


//Ejercicio
function determinaNumero(numero){
    if((numero % 2) == 1){
        console.log("El resultado es impar");
    }
    else if((numero % 2) == 0){
        console.log("El numero es par");
    }
}

determinaNumero(15);

//Ejercicio2

function determinaTexto(texto){
    if (texto == texto.toUpperCase()){
        console.log("El texto esta en mayusculas");
    }
    else if (texto == texto.toLowerCase()){
        console.log("El texto esta en Minusculas");
    }
    else if (texto == texto.toLowerCase() && text.toUpperCase){
        console.log("El texto esta en Mayusculas y Minusculas");
    }
}

determinaTexto("Hola");

console.log("Parte 2 ---------------------");

//Ejercicio 3
var nombreProducto = "Celular";
var precioProducto = 200;

function precioTotal(precio, nombreProducto){
    var resultado = 0;
    if(precio <= 399){
        console.log("Factura");
        console.log("Costo del " + nombreProducto + "es: " + precio)
        console.log("Costo envio: 100");
        resultado = precio + 100;
        console.log("El total a pagar es: " + resultado);
    }
    else if (precio > 399){
        resultado = precio;
        console.log("El total a pagar es: " + resultado);
    }
}

precioTotal(precioProducto, nombreProducto);
precioTotal(500, "Libro");


//Ambito de una funcion
//Variable Local (variableVar)
function ambitoVar(){
    const i = 1;
    if (i == 1){
        var variableVarL = "Ambito de variable Local";
    }
    console.log(variableVarL);
}

var variableVarG = "Ambito de variable Global";

//Variable let (Declara variables de manera moderna)
let VariableLet = "Prado";
VariableLet = "Eduardo";
console.log(VariableLet);

function ambitoLet(){
    const i = 1;
    if(i == 1){
        let variableLet = "Ambito de variable Let";
        console.log(variableLet);
    }
}

ambitoLet();


//Se puede llamar una funcion antes de declararla

multiplicar(12);

function multiplicar(primerOperando){
    var resultado = 3 * primerOperando;
    console.log("El resultado es: " + resultado);
}