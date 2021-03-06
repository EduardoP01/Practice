//Primer programa JavaScript

var Nota1 = "Sesion 1----------------------------";
console.log(Nota1);

//Las constantes no se pueden cambiar
const nombre = "Eduardo";
//Las variables si cambian
var numero = 365;

//Usamos consola para ejecutar
console.log(numero);

//Para ejecutar en la terminal escribimos "node (el nombre de programa sin parentesis)"

//---------------------------------------------------------------------------------//
//Código de la Sesión 1 del Módulo 2
//Introducción a JavaScript y Node.js

//Declaración de una Variable
var numero = 360;
console.log( numero );
//Cambio de valor de la variable "numero"
numero = 5000;
//Impresión del valor de la variable "Numero" 
console.log( numero );

//Declaración de una Constante
const mensaje = "Monterrey";
//Comentamos la línea donde tratamos de cambiar el valor de una constante
//mensaje = "Bienvenido a Ciudad Rio Claro"; 
//Impresión del valor de la constante "Mensaje"
console.log( mensaje );

//Características de una persona
const apellidoPaterno = "Prado";
const apellidoMaterno = "Flores";
var edad = 15;
const lugarNacimiento = "México";
//----------------------------------------------------------------------------------
//Ejemplo: 5 datos caracteristicos de un coche
var velocidad = 100;
var tamano = "grande";
var placa = "AXN-135";
const marca = "Ford";
const modelo = "X1";

console.log(velocidad);


//Tipos de Datos JS -----------------------------------------------------------------
var Nota2 = "Sesion 2--------------------------------";
console.log(Nota2);

//Number (Numero)
var numero1 = 100;
var numero2 = 1;

//String (Cadena de Texto)
var texto1 = "Texto";
var texto2 = "Integilente";

//Boolean (True/False)
var BooleanoVerdadero = true;
var BooleanoFalso = false;

//Null (Nada)
var Condicion = null;
console.log(Condicion);

//Undefined (Valor Indefinido)
var ValorIndefinido;
console.log(ValorIndefinido);

//Arreglo (Guardar Grupos de Valores)
const ArregloNumeros = [1,3,7,5];
const ArregloNombres = ["Eduardo, Alejandro, Andres"];
const ArregloMixto = [1, "Eduardo", 10];
console.log(ArregloMixto);

//Objeto (Representacion de Cosas/Objetos Reales)
var auto = {Marca:"Toyota",Modelo:"Corolla",Anio:2010};
//Poner un enter y "tab" hace el codigo mas reconocible y facil de entender
var persona = {
    nombre: "Eduardo",
    apellidoPaterno: "Prado",
    apellidoMaterno: "Flores",
    edad: 16,
    lugarNacimiento: "Mexico"
}


//Operadores --------------------------------------------------------------------------
var Nota3 = "Sesion 3-----------------------------";
console.log(Nota3);

//Suma
var operandoSuma = 5 + 5;
console.log("Suma: " + operandoSuma);

//Resta
var operandoResta = 5 - 5;
console.log("Resta: " + operandoResta);

//Multiplicacion
var operandoMult = 5 * 5;
console.log("Multiplicacion: " + operandoMult);

//Division
var operandoDiv = 5/5;
console.log("Division: " + operandoDiv);

//Operador Incremento (agrega 1 a la variable)
var operandoIncr = 5;
operandoIncr++;
console.log("Incremento: " + operandoIncr);

//Operaciones con Variables
var resultado = operandoSuma + operandoMult;
console.log("Operaciones con Variable: " + resultado);


//Operadores de Asignacion (Se usan para reducir codigo)
var Operando1 = 5;
var Operando2 = 10;
var Operando3 = 3;

//Operador =
Operando1 = Operando2;
console.log("De igualdad: " + Operando1);

//Operador += (Sobreescribe sumando ambas variables)
Operando1 += Operando2;
console.log("Overwrite y adicion: " + Operando1);


//Operadores de comparacion
var NCompa1 = 5;
var NCompa2 = 5;
var resultadoComparacion = (NCompa1 == NCompa2);
console.log("Comparacion: " + resultadoComparacion);

var Nota4 = "Sesion 4--------------------------------";
console.log(Nota4);

//Resultado Operador &&
//(true) && (OpLogico1 < OpLogico2) = True
//True && True = True
//False && False = False
//False && True = False
//True && False = False

//Resultado operador ||
//True || True = True
//False || False = False
//False || True = True
//True || False = True

//Resultado operador !


//Operadores Logicos
var OpLogico1 = 5;
var OpLogico2 = 20;
var OpLogico3 = 30;

//Operador && ("AND" o "Y") [Ambas se deben Cumplir]
var OpResultadoAND = (OpLogico1 < OpLogico2) && (OpLogico2 < OpLogico3);
console.log("El resultado del operador AND es: " + OpResultadoAND);

//Operador || ("OR" o "O") [Solo 1 se debe cumplir]
var OpResultadoOR = (OpLogico1 < OpLogico2) || (OpLogico2 < OpLogico3);
console.log("El resultado del operador OR es: " + OpResultadoOR);

OpLogico2 = 50;
var OpResultadoAND = (OpLogico1 < OpLogico2) && (OpLogico2 < OpLogico3);
var OpResultadoOR = (OpLogico1 < OpLogico2) || (OpLogico2 < OpLogico3);
console.log("El resultado cambiado AND ---> " + OpResultadoAND);
console.log("El resultado cambiado OR: " + OpResultadoOR);


//Operador ! ("Negacion" o "NOT") [Da el opuesto]
var OpResultadoNOT = !OpResultadoAND;
console.log("El resultado del operador NOT es: " + OpResultadoNOT);


//Condicionales ----------------------------------
if ( (OpLogico1 < OpLogico2) && (OpLogico2 < OpLogico3)) {
    console.log("Entraste al condicional");
}
else{
    console.log("El IF fue Falso");
}

if (OpLogico1 > OpLogico2) {
console.log("Entraste al IF (2)");
}
else if (OpLogico1 < OpLogico3){
    console.log("Entraste al ELSE IF");
}
else{
    console.log("Entraste a otro ELSE (2)");
}

var Nota5 = "Sesion 5--------------------------------";
console.log(Nota5);