// impuestos.js

// Funcion declarada
export function calcularImpuestoUnitario(valor, porcentaje) {
    const impuesto = valor * (porcentaje / 100);
    return impuesto;
}
