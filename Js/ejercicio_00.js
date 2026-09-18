//Declaracion de variabes y tipos de datos
const nombreProducto = "laptop gamer";
let precioOriginal= "4500.99";
const Descuento = 15; 
let stockDisponible =  "5";
let enOferta = "true";

//Calcular el precio con descuentos usando operadores
let precioFinal = precioOriginal - precioOriginal * Descuento / 100;

//Mostrar informacion del producto 
console.log("🔷 Producto:", nombreProducto);
console.log("🔷 precioOriginal: S/", precioOriginal);
console.log("🔷 Descuento:", Descuento, "%");
console.log("🔷 Precio Final: S/", precioFinal.toFixed(2));
console.log("🔷 stock Disponible:", stockDisponible);
console.log("🔷 En oferta:", enOferta ? "si" : "no");

//Simulacion compra y actualidad stock
let cantidadComprada = 2;

//Validar si hay suficiente stock
if (cantidadComprada <stockDisponible) {
    stockDisponible -= cantidadComprada;
    console.log("✅ Compra realizada  con exito.");
    console.log("📦 Stock actualizado:", stockDisponible);
}  else {
    console.log("❌ No hay suficiente stock disponible.");
}