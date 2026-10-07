const pagaColaboradores = [
    1250, 1310, 1432, 1241, 2422, 2427, 2500, 2571, 2631, 2659, 
    2713, 2769, 2853, 2871, 2942, 3057, 3091, 3140, 3175, 3341,
    3387, 3410, 3461, 3514, 3547, 3586, 3637, 3672, 3752, 3814,
    3920, 4011, 4067, 4108, 4121, 4174, 4249, 4281, 4341, 4371,
    4651, 4711, 4913, 4951, 5001, 5121, 5312, 5419, 5551, 5719
]
const porcentual = 0.20

for (let i = 0; i < pagaColaboradores.length; i++) {
    let sueldoBase = pagaColaboradores[i];
    let aguinaldo = sueldoBase *porcentual;
    let totalPagar = sueldoBase + aguinaldo;
    
    console.log("Sueldo Base :", sueldoBase);
    console.log("Aguinaldo :", sueldoBase);
    console.log("Total a pagar :", sueldoBase);
};