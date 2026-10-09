let deuda = 4500.00;
let pagoMensual= 800.00;
let mesesTranscurridos = 1;

console.log("::::::Cronograma de pagos:::::::")

while (deuda > 0){

if (deuda >= pagoMensual){
    deuda-=pagoMensual;
    console.log(`Mes ${mesesTranscurridos}: Pago de s/ ${pagoMensual.toFixed(2)}. Saldo restantes/ ${deuda.toFixed(2)}`);
    mesesTranscurridos++;
}else{
    console.log(`Mes ${mesesTranscurridos}: Pago Final de s/ ${deuda.toFixed(2)}. Saldo restantes/ 0.00`);
    deuda = 0;
}
console.log ("Deuda terminada en su totalidad")
}
