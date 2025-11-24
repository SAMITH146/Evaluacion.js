// Importar la función generarTabla desde el archivo correspondiente
import { generarTabla } from "../funciones/generarTabla.js";

// Solicitar al usuario el número base para la tabla de multiplicar
const numero = parseInt(prompt("Ingrese el numero para generar la tabla de multiplicar:"));

// Generar la tabla de multiplicar utilizando la función importada
const tabla = generarTabla(numero);


// Mostrar en consola
console.log("Tabla de multiplicar del", numero);
console.log(tabla);

// Mostrar la tabla en una alerta
alert(tabla.join("\n"));
