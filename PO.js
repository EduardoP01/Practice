//Programacion orientada a objetos

//Creacion de un objeto 
//variable = {nombreCaracteristica: Valor}
var celular = {
    color: "Azul",
    peso: "80 g",
    numCamaras: 2,
    sistema: "IOS",
    duracionBateria: 10
}

//Acceder a una propiedad de un objeto
console.log(celular.color);

console.log(celular["numCamaras"]);

//Clase (No es un objeto, es un "molde")

class galleta{
    constructor(tamano, forma, sabor){
        this.tamano = tamano;
        this.forma = forma;
        this.sabor = sabor;
    }
}

//Para llamar una clase

let galletaChocolate = new galleta("5x5 cm", "Cuadrado", "Chocolate");

var galletaVainilla = new galleta("2x2 cm", "Circulo", "Vainilla");

console.log(galletaChocolate);
console.log(galletaVainilla);

console.log(galletaChocolate.sabor);
console.log(galletaVainilla["Sabor"]);