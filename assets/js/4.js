/*
Programa una función que repita un texto X veces
Ejemplo:
    miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo
*/
console.log("================[EJERCICIO 4]================");
function usandoConsole4(cadena) {
    return cadena.repeat(3);
}

let resultado4 = usandoConsole4("Hola Mundo");
console.log(resultado4); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");

function usandoHTML4() {
    function actualizarResultado() { // Función para actualizar el resultado
        let textarea = document.getElementById("texto4"); // Declaramos una variable para el textarea
        let repeticion = document.getElementById("repetir"); // Declaramos una variable para el texto a repetir
        const inicio = parseInt(document.getElementById("repetition").value); // Declaramos la constante "inicio" para obtener el valor inicial
        const texto = textarea.value; // Obtener el valor del textarea

        if (!isNaN(inicio)) { // Validamos que el valor "inicio" sea un número válido
            repeticion.textContent = texto.repeat(inicio); // Actualizamos el resultado
        } else { // Si no son números válidos...
            repeticion.textContent = "Valores no válidos"; // Mostrar un mensaje de error si los valores no son números válidos
        }
    }

    // Agregar eventos input al campo de entrada "Valor inicial". Con esto el valor en el campo con id "recortado" podrá actualizarse
    // sin que tengamos que actualiza el textarea
    document.getElementById("repetition").addEventListener("input", actualizarResultado);

    actualizarResultado(); // Llamamos a la función de actualización
}

usandoHTML4();

/*function usandoHTML4() {
    let textarea = document.getElementById("texto"); //Declaramos una variable para el textarea
    let repetido = document.getElementById("repetir"); //Declaramos una variable para el texto recortado

    textarea.addEventListener("input", function () { //Creamos un eventListener que detecta cuando escribimos algo
        const texto = textarea.value; //La constante "texto" será igual al valor en textarea
        repetido.textContent = texto.repeat(4); //A "repetido" le pasamos el resultado de slice
    });
}

usandoHTML4();*/