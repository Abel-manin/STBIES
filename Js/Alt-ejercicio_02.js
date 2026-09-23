let comp1 = 93;
let comp2 = 71;
let comp3 = 69;
let comp4 = 34;

let numMayor = comp1 > comp2 && comp2 > comp3 && comp3 > comp4;
let numMenor = comp1 < comp2 && comp2 < comp3 && num3 < comp4;

console.log("Comparativa de numeros");
console.log("Los numeros 71,34,69 y 93 seran los escaneados");

if (comp1 > comp2 && comp2 > comp3 && comp3 > comp4) {  
    numMayor = comp1;
    numMenor = comp4;
    console.log("El numero mayo es", numMayor, "y el menor termina siendo", numMenor);
} else {
   console.log("Error.. Fallo en la operacion..");
}