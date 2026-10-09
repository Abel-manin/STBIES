const tablaMultiplicar = 9;
const limite = 12;

console.log(`:-:-: Tabla de multiplicar del ${tablaMultiplicar} :-:-:`);

for (let i=1; i <= limite; i++){
    let resultado = tablaMultiplicar * i;

    console.log(`${tablaMultiplicar} X ${i} = ${resultado}`);
}