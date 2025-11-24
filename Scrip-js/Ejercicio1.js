
// Importar la función calcularPromedio desde el archivo correspondiente
import { calcularPromedio } from "../funciones/calcularPromedio.js";

// Solicitar al usuario la cantidad de notas y las notas mismas
let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
let notas = [];
// Bucle para ingresar cada nota
for (let i = 0; i < cantidadNotas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    // Agregar la nota al arreglo
    notas.push(nota);
}
// Calcular el promedio y rendimiento utilizando la función importada
let resultado = calcularPromedio(notas);
console.log(`El promedio final es: ${resultado.promedio}`);
console.log(`El nivel de rendimiento es: ${resultado.rendimiento}`);

