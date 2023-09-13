/*
Programa una función que valide que un texto sea un nombre válido.
Ejemplo:
    miFuncion("Jonathan MirCha") devolverá verdadero.
*/
console.log("================[EJERCICIO 19]================");
function usandoConsole19(texto) {
    // Usamos una expresión regualar para verificar que el texto ingresado solo contenga letras
    const expresionRegular = /^[a-zA-Z\s]+$/;

    if (texto.length > 0 && expresionRegular.test(texto)) { // Si la longitud del texto es mayor a 0...
        return true; // El texto es un nombre válido
    } else {
        return false; // El texto no es un nombre válido
    }
}
const nombre = "Jonathan MirCha";
const esValido = usandoConsole19(nombre);
console.log(esValido); // Esto imprimirá false en la consola
console.log("==============================================\n\n\n");

function usandoHTML19() {
    function actualizarResultado() {
        const textarea = document.getElementById("texto19");
        const nombre = document.getElementById("nombre-valido");
        let texto = textarea.value; // Obtener el valor del textarea

        const expresionRegular = /^[a-zA-Z\s]+$/;

        if (texto.length > 0 && expresionRegular.test(texto)) { // Si la longitud del texto es mayor a 0 y cumple con la expresión regular...
            nombre.textContent = "El nombre es válido";
        } else {
            nombre.textContent = "El nombre no es válido";
        }
    }

    document.getElementById("texto19").addEventListener("input", actualizarResultado);
    document.getElementById("nombre-valido").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML19();