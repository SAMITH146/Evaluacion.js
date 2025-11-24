// Importar la función procesarImpuestos desde el archivo correspondiente
import { procesarImpuestos } from "../funciones/procesar.js";

// Llamar a la función para procesar los impuestos y obtener el total
const total = procesarImpuestos();
// Mostrar el resultado en consola y en una alerta
console.log("Impuesto total acumulado:", total);
alert(`Impuesto total acumulado: ${total}`);
