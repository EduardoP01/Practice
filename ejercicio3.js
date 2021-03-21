

const prompt = require('prompt-sync')();
var palabraOculta = [];
var palabraMostrada = ["-", "-", "-", "-"];

var contadorFallas = 4;
var contadorAciertos = 0;

palabraOculta[0] = prompt("Dame la letra numero 1: ");
palabraOculta[1] = prompt("Dame la letra numero 2: ");
palabraOculta[2] = prompt("Dame la letra numero 3: ");
palabraOculta[3] = prompt("Dame la letra numero 4: ");
//console.log(palabraOculta);

for(var i = 0; i < (palabraOculta.length * 2); i++){
    var intento = prompt("Ingresa una letra: ");
    switch(intento){
        case palabraOculta[0]:
            palabraMostrada[0] = palabraOculta[0];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
        case palabraOculta[1]:
            palabraMostrada[1] = palabraOculta[1];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
        case palabraOculta[2]:
            palabraMostrada[2] = palabraOculta[2];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
        case palabraOculta[3]:
            palabraMostrada[3] = palabraOculta[3];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
        default:
            console.log("Te equivocaste :(")
            contadorFallas--;
            console.log("Te quedan " + contadorFallas + " intentos!");
            console.log(palabraMostrada);
            break;
    }
    if (contadorAciertos == 4){
        console.log("Felicidades, Ganaste!");
        break;
    }
    else if (contadorFallas == 0){
        console.log("PERDISTE L");
        break;
    }
}