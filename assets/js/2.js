/*
Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
Ejemplo:
    miFuncion("Hola mundo", 4) devolverá "Hola"
*/

console.log("================[EJERCICIO 2]================");
function usandoConsole2(cadena) {
    //return cadena.substring(4); //De acurdo a MDN, esto ya no se debe usar
    return cadena.slice(0, 4);
}

let resultado2 = usandoConsole2("Hola Mundo");
console.log(resultado2); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");

function usandoHTML2() {
    let textarea = document.getElementById("texto2"); // Declaramos una variable para el textarea
    let recortado = document.getElementById("recortado"); // Declaramos una variable para el texto recortado

    function actualizarResultado() { // Función para actualizar el resultado
        const inicio = parseInt(document.getElementById("start").value); // Declaramos la constante "inicio" para obtener el valor inicial
        const final = parseInt(document.getElementById("end").value); // Declaramos la constante "inicio" para obtener el valor final
        const texto = textarea.value; // Obtener el valor del textarea

        if (!isNaN(inicio) && !isNaN(final)) { // Validamos que los valores "inicio" y "final" sean números válidos
            recortado.textContent = texto.slice(inicio, final); // Actualizamos el resultado
        } else { // Si no son números válidos...
            recortado.textContent = "Valores no válidos"; // Mostrar un mensaje de error si los valores no son números válidos
        }
    }

    // Agregar eventos input a los campos de entrada "Valor inicial" y "Valor final". Con esto el valor en el campo con id "recortado" podrá actualizarse
    // sin que tengamos que actualiza el textarea
    document.getElementById("start").addEventListener("input", actualizarResultado);
    document.getElementById("end").addEventListener("input", actualizarResultado);

    actualizarResultado(); // Llamamos a la función de actualización
}

usandoHTML2();

/*function usandoHTML2() {
    let textarea = document.getElementById("texto"); // Declaramos una variable para el textarea
    let recortado = document.getElementById("recortado"); // Declaramos una variable para el texto recortado

    textarea.addEventListener("input", function () { // Creamos un eventListener que detecta cuando escribimos algo
        const inicio = parseInt(document.getElementById("start").value); // Obtener el valor inicial en cada cambio
        const final = parseInt(document.getElementById("end").value); // Obtener el valor final en cada cambio
        const texto = textarea.value; // La constante "texto" será igual al valor en textarea

        // Validamos que los valores de inicio y final sean números válidos
        if (!isNaN(inicio) && !isNaN(final)) {
            recortado.textContent = texto.slice(inicio, final); // A "recortado" le pasamos el resultado de slice
        } else {
            recortado.textContent = "Valores no válidos"; // Mostrar un mensaje de error si los valores no son números válidos
        }
    });
}*/

usandoHTML2();

/*function usandoHTML2() {
    let inicio = document.getElementById("start");
    let final = document.getElementById("end");

    let textarea = document.getElementById("texto"); //Declaramos una variable para el textarea
    let recortado = document.getElementById("recortado"); //Declaramos una variable para el texto recortado

    textarea.addEventListener("input", function () { //Creamos un eventListener que detecta cuando escribimos algo
        const texto = textarea.value; //La constante "texto" será igual al valor en textarea
        recortado.textContent = texto.slice(inicio, final); //A "recortado" le pasamos el resultado de slice
    });
}

usandoHTML2();*/