//Fase de entrada :declaracion de variables:
const varones=255;
const mujeres=184;

//Fase de proceso:  La logica u operacion:
const totalPersonas = varones + mujeres;
let porcentajevarones = (varones / totalPersonas) * 100;
let porcentajemujeres= (mujeres / totalPersonas) * 100;

//Fase de salida: se hacen impresines en consolas.
console.log("total de colaboradores" , totalPersonas);
console.log("porcentaje de varones:", porcentajevarones.toFixed(2), "%");
console.log("porcentaje de mujeres:", porcentajemujeres.toFixed(2), "%");