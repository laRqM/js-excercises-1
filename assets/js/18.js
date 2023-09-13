/*
Programa una función que dada una cadena de texto cuente el número de vocales y consonantes.
Ejemplo:
    miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
console.log("================[EJERCICIO 18]================");
function usandoConsole18(cadena) {
    // Convierte la cadena a minúsculas para tratar todas las letras de la misma manera
    cadena = cadena.toLowerCase();

    // Define las variables para contar vocales y consonantes
    let contadorVocales = 0;
    let contadorConsonantes = 0;

    // Define una expresión regular para buscar letras (excluyendo números, espacios y otros caracteres)
    const expresionRegular = /[a-z]/;

    // Recorre la cadena de texto
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena.charAt(i);
        // Verifica si el caracter es una letra (excluyendo números, espacios y otros caracteres)
        if (expresionRegular.test(caracter)) {
            // Si es una vocal, aumenta el contador de vocales
            if ("aeiou".indexOf(caracter) !== -1) {
                contadorVocales++;
            } else {
                // Si no es una vocal, aumenta el contador de consonantes
                contadorConsonantes++;
            }
        }
    }

    // Crea un objeto con los resultados
    return {
        Vocales: contadorVocales,
        Consonantes: contadorConsonantes
    };
}
const texto18 = "Hola Mundo";
const resultado18 = usandoConsole18(texto18);
console.log(`Vocales: ${resultado18.Vocales}, Consonantes: ${resultado18.Consonantes}`);
console.log("==============================================\n\n\n");


function usandoHTML18() {
    function actualizarResultado() {
        const textarea = document.getElementById("texto18"); // Declaramos una variable para el textarea
        const consonantes = document.getElementById("consonantes");
        const vocales = document.getElementById("vocales");
        let texto = textarea.value; // Obtener el valor del textarea

        texto = texto.toLowerCase();

        // Define las variables para contar vocales y consonantes
        let contadorVocales = 0;
        let contadorConsonantes = 0;

        // Define una expresión regular para buscar letras (excluyendo números, espacios y otros caracteres)
        const expresionRegular = /[a-z]/;

        // Recorre la cadena de texto
        for (let i = 0; i < texto.length; i++) {
            const caracter = texto.charAt(i);
            // Verifica si el caracter es una letra (excluyendo números, espacios y otros caracteres)
            if (expresionRegular.test(caracter)) {
                // Si es una vocal, aumenta el contador de vocales
                if ("aeiou".indexOf(caracter) !== -1) {
                    contadorVocales++;
                } else {
                    // Si no es una vocal, aumenta el contador de consonantes
                    contadorConsonantes++;
                }
            }
        }

        consonantes.textContent = contadorConsonantes;
        vocales.textContent = contadorVocales;
    }

    document.getElementById("texto18").addEventListener("input", actualizarResultado);
    document.getElementById("vocales").addEventListener("input", actualizarResultado);
    document.getElementById("consonantes").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML18();