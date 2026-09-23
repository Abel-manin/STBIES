<?php
$producto = "Zapatillas Adidas";
const curso = "Lógica y programación";
$precio = 350;
$descuento = 0.08;
$IGV = 0.18;

//fase logica: van operaciones y ecuaciones y asi 
$precioIGV = $precio * $IGV;
$precioDescuento = $precio * $descuento;
$precioFinal = $precioIGV - $precioDescuento;

//Fase de salida: impresiones con queso amigo

echo "El precio del producto es S/: ". $precio. "<br>";
echo "El IGV es: S/". $precioIGV. "<br>";
echo "El descuento es: S/". $precioDescuento. "<br>";
echo "EL precio final es: S/". $precioFinal. "<br>";

?>