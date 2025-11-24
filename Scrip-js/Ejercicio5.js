// se importa la funcion buscarElemento desde el archivo busqueda.js
import { buscarElemento } from "../funciones/busqueda.js";

// Solicitar al usuario la cantidad de elementos para el arreglo
const cantidad = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));

// Crear un arreglo y llenarlo con los elementos ingresados por el usuario
let lista = [];

// Bucle para ingresar los elementos
for (let i = 0; i < cantidad; i++) {
    let valor = prompt(`Ingrese el elemento ${i + 1}:`);
    // Agregar el valor al arreglo
    lista.push(valor);
}

// Solicitar al usuario el elemento a buscar
const elementoBuscado = prompt("Ingrese el elemento que desea buscar:");

// Usar la funcion buscarElemento para verificar si el elemento esta en el arreglo
const encontrado = buscarElemento(lista, elementoBuscado);

// Mostrar el resultado al usuario
if (encontrado) {
    alert(`El elemento "${elementoBuscado}" SI se encuentra en el arreglo.`);
    console.log("Resultado: encontrado");
} else {
    alert(`El elemento "${elementoBuscado}" NO aparece en el arreglo.`);
    console.log("Resultado: no encontrado");
}
