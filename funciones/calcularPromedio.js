// Función para calcular el promedio y rendimiento
export function calcularPromedio(notas) {
    // Calcular la suma de las notas
    let suma = 0;
    // Calcular la suma de las notas
    for (let i = 0; i < notas.length; i++) {
        // Sumar cada nota al total
        suma += notas[i];
    }
    // Calcular el promedio
    let promedio = suma / notas.length;
    let rendimiento = '';
    if (promedio >= 4.5) {
        rendimiento = 'Alto';
    }
    // Evaluar el nivel de rendimiento basado en el promedio
    else if (promedio >= 3.0) {
        rendimiento = 'Medio';
    }
    // Si el promedio es menor a 3.0
    else {
        rendimiento = 'Bajo';
    }
    // Retornar un objeto con el promedio y el nivel de rendimiento
    return { promedio: promedio, rendimiento: rendimiento };
}
