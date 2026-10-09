const pinCorrecto =1234;
const intentos = ["4762" ,"6231", "9831", "6751"];
let intentosRealizados = 0
const maxIntentos= 3;
let accesoConcedido = false;

do{
    let pinIngresado = intentos[intentosRealizados];
    intentosRealizados++;

    console.log(`Intento ${intentosRealizados}: Ingresando PIN...`);
    if(pinIngresado === pinCorrecto){
        console.log("PIN ACEPTADO. Bienvenido al sistema");
        accesoConcedido = true; 
    }
    else{
        console.log("PIN incorrecto.")
    }
}while(!accesoConcedido && intentos < maxIntentos )
if(!accesoConcedido){
    console.log("¡¡¡Tarjeta bloqueada!!!")
}
