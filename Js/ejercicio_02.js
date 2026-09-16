let nombreProducto = "mouse óptico";
let precioProducto = 85.99;

const porcentajeDescuento = 0.08;
const porcentajeIgv = 0.18;

let Descuento = precioProducto * porcentajeDescuento;
let subTotal = precioProducto - Descuento
let montoIgv = subTotal * porcentajeIgv;
let totalPagar = subTotal + montoIgv

console.log("🛒Producto", mombreProducto);
console.log("💵 precio base S/ :", precioProducto);
console.log("💵descuento (8%) S/ : ", Descuento);
console.log("💵subTotal S/ :", subTotal);
console.log("💵IGV (18%) S/ :", montoIgv);
console.log("💵total a pagar S/ :", totalPagar);



