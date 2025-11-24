// Función para generar la tabla de multiplicar de un número dado
export const generarTabla = (numero) => {
    // Arreglo para almacenar los resultados de la tabla
    let resultados = [];
    // Bucle para generar la tabla del 1 al 10
    for (let i = 1; i <= 10; i++) {
        // Calcular el resultado y agregarlo al arreglo
        resultados.push(`${numero} x ${i} = ${numero * i}`);
    }
    // Retornar el arreglo con los resultados
    return resultados;
};
