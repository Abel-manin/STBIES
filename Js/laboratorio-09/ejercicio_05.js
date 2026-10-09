let PreciosArticulos = [70, 91,42, 0]
let baseScan = 0;
let PreciosTotales = 0;
let precioA;

do{
    precioA = PreciosArticulos[baseScan];
    baseScan++;

if (PreciosArticulos !==0) {
    PreciosTotales += PreciosArticulos;
    console.log("Se esta escaneando el producto producto... S/ ", precioA);
}else{
    console.log("No se pudo registrar su articulo...");
}
}while (precioA !==0){
    console.log("Compra realizada");
    console.log("Monto a pagar", precioA);
    
}
