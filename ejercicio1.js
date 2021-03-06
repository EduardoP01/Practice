//Promedio de 4 practicas menos la de menor calificacion

//Establecemos las calificaciones de examen
var Examen1 = 80;
var Examen2 = 85;
var Examen3 = 90;
var Examen4 = 50;

//Buscamos la de menos calificacion
var ExamenMenor = Examen1;

if (Examen2 < ExamenMenor){
    ExamenMenor = Examen2;
}
else if (Examen3 < ExamenMenor){
    ExamenMenor = Examen3;
}
else if (Examen4 < ExamenMenor){
    ExamenMenor = Examen4;
}
//console.log(ExamenMenor);

//Obtener Promedio
var Promedio = (Examen1 + Examen2 + Examen3 + Examen4 - ExamenMenor);
var Promedio = (Promedio/3);
console.log("La calificacion final es: " + Promedio);