/* Problema: Si un carro tiene un tanque de 40 litros. Usando gasolina y consumiendo todo el tanque se hace un camino de 480 kilómetros. ¿Cuál es el consumo de gasolina por kilómetro recorrido? Para calcular el consumo: divide la distancia recorrida entre la cantidad de litros gastados. Imprime el valor utilizando document.write. Organiza las cuentas en variables.*/

let capacidadTanque= 40;
let recorridoConGas= 480;

let consumoGas= recorridoConGas / capacidadTanque;
console.log(consumoGas);
                                            
document.write("Un carro tiene un tanque de 40 litros.<br>Usando gasolina y consumiendo todo el tanque sehace un camino de 480 kilometros.<br><br>¿Cuál es el consumo de gasolina?");

document.write("<br>");

document.write("<p><b><u>- " + " El consumo de gasolina por kilómetro es de: " + consumoGas + " km/l</u></b></p>");
document.write("<br>");
document.write("<br>");

let recorridoConAlcohol= 300;

let consumoAlcohol= recorridoConAlcohol /   capacidadTanque
console.log(consumoAlcohol);
document.write("<br>");
document.write("Por otro lado, con el alcohol: el mismo tanque es de:" + consumoAlcohol + "km/l</u></b></p>");