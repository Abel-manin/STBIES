let promedio = parseFloat(prompt("ingrese su promedio"));

if (promedio >= 18 && promedio <= 20) {
    console.log("Rendimiento excelente");
}else if (promedio >= 14){
    console.log("Rendimiento bueno");
}else if (promedio >= 11){
    console.log("Remdiiento malo");
}else if (promedio >=0){
    console.log("rendimiento pesimo");
}else{
    console.log("rendimiento inavilido");
}
