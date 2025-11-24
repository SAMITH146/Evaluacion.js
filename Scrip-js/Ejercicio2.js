
// • Mensaje de acceso.

// Importar la función calcularPromedio desde el archivo correspondiente

import { validarAcceso } from "../funciones/validarAcceso.js";
// Solicitar al usuario la edad y la contraseña
let edadUsuario = parseInt(prompt("Ingrese su edad:"));
let contrasenaUsuario = prompt("Ingrese su contraseña:");
// Validar el acceso utilizando la función importada
let mensajeAcceso = validarAcceso(edadUsuario, contrasenaUsuario);
console.log(mensajeAcceso);
