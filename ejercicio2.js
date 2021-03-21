//Given
var dinero = 100;
var codigo = "xc24";

//Chocolate
if (dinero >= 12.50 && codigo == "xc23"){
    console.log("Purchase has been successfully completed");

    if (dinero > 12.50){
        console.log(dinero - 12.50);
    }
}
else if (dinero >= 5.75 && codigo == "c4f2"){
    console.log("Thanks for purchasing a Lolypop!");
}
else if (codigo != "xc23" | "c4f2"){
    console.log("The code is incorrect. Try Again!");
}
else {
    console.log("Not enough Money!");
}