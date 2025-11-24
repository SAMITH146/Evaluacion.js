// funcion busqueda
// Busca un elemento en una lista y retorna true si lo encuentra, false si no
export const buscarElemento = (lista, elemento) => {
    // Recorrer la lista para buscar el elemento
    for (let i = 0; i < lista.length; i++) {
        // Comparar cada elemento con el buscado
        //si lo encuentra va a retornar true
        if (lista[i] === elemento) {
            return true;
        }
    }
    //si no lo encuentra va a retornar false
    return false; // no encontrado
};
