// Función para validar acceso basado en edad y contraseña
export const validarAcceso = function(edad, contrasenaIngresada) {

    // Contraseña correcta predefinida
    const contrasenaCorrecta = "SENA2024";

   // Validaciones individuales
   // Validar si es mayor de edad
    const esMayor = edad >= 18;
    // Validar si la contraseña es correcta
    const claveValida = contrasenaIngresada === contrasenaCorrecta;

    // Se retorna mensaje depende de las validaciones
    // Acceso Permitido
    if (esMayor && claveValida) {
        // Acceso Permitido
        return "Acceso concedido. Bienvenido.";
        // Acceso Denegado
    } else if (!esMayor && claveValida) {
        return "Acceso denegado. Debe ser mayor de edad.";
        // Acceso Denegado
    } else if (esMayor && !claveValida) {
        return "Acceso denegado. Contraseña incorrecta.";
        // Acceso Denegado
    } else {
        return "Acceso denegado. No cumple ninguna condicion.";
    }
};
