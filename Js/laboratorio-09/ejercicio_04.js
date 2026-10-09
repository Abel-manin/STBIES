//Declaracion de variabes y tipos de datos
const articulosD = {
    "laptopLenovo" : 2799,
    "camara" : 1159,
    "parlantes" : 150
};

let articuloNd = {
    "teclado" : 59,
    "mouse" : 70,
    "audifonos" : 80
}

let articulosD1 = "laptopLenovo";
let articulosD2 = "camara";
let articulosD3 = "parlantes";
let articulosNd1 = "teclado";
let articulosNd2 = "mouse";
let articulosNd3 = "audifonos";


// Lista del comprador//
let productoSellectd = articulosD[articulosD1, articulosD2] ;
let productoSellectnd = articuloNd[articulosNd2 , articulosNd3];
const descuento = 15;
let total = articulosD[articulosD1] + articulosD[articulosD2] * 15 / 100 + articuloNd[articulosNd3] + articuloNd[articulosNd3];

console.log("Gracias por preferirnos");
console.log("Se seleccionaron los productos", articulosD1, articulosD2, articulosNd2, "y", articulosNd3);
console.log("Se le dara un descuento unitarios a productos mayores a 100 soles");
console.log("precio total", total );
console.log("gracias por su compra");




