/*
Programa una función que valide que un texto sea un email válido.
Ejemplo:
    miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
console.log("================[EJERCICIO 20]================");
function usandoConsole20(email) {
    // Expresión regular para validar direcciones de correo electrónico
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Utiliza la expresión regular para verificar si el email es válido
    if (expresionRegular.test(email)) {
        return true; // El email es válido
    } else {
        return false; // El email no es válido
    }
}
const email = "jonmircha@gmail.com";
const esValido20 = usandoConsole20(email);
console.log(esValido20); // Esto imprimirá true en la consola
console.log("==============================================\n\n\n");

function usandoHTML20() {
    function actualizarResultado() {
        const textarea = document.getElementById("texto20");
        const email = document.getElementById("correo-valido");
        let texto = textarea.value; // Obtener el valor del textarea

        const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (texto.length > 0 && expresionRegular.test(texto)) { // Si la longitud del texto es mayor a 0 y cumple con la expresión regular...
            email.textContent = "El correo es válido";
        } else {
            email.textContent = "El correo no es válido";
        }
    }

    document.getElementById("texto20").addEventListener("input", actualizarResultado);
    document.getElementById("correo-valido").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML20();