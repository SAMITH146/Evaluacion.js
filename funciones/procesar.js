// Importamos la funcion declarada la que calcula el impuesto unitario
import { calcularImpuestoUnitario } from "./calcularImpuestoUnitario.js";

// Funcion expresada
// Procesa varios productos y acumula el impuesto total
export const procesarImpuestos = function () {
    // Solicitar la cantidad de productos
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
    // Variable para acumular el total de impuestos
    let totalImpuestos = 0;
    // Bucle para procesar cada producto
    for (let i = 1; i <= cantidad; i++) {
        // Solicitar valor y porcentaje de impuesto para cada producto
        let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}:`));
        let porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto del producto ${i}:`));

        // Usamos la funcion declarada
        const impuesto = calcularImpuestoUnitario(valor, porcentaje);
        // Acumular el impuesto al total
        totalImpuestos += impuesto;
    }
    // Retornar el total de impuestos acumulados
    return totalImpuestos;
};
