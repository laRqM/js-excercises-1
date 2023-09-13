/*
Programa una función que invierta las palabras de una cacena de texto.
Ejemplo:
    miFuncion("Hola Mundo"= devolverá "odnuM aloH"
*/

console.log("================[EJERCICIO 5]================");
function usandoConsole5(cadena) { //Creamos una función que recibe un argumento por valor
    return cadena.split('').reverse().join('');
    // Con split() separamos la cadena en un array: Hola = {"H", "o", "l", "a"}
    // Con reverse() invertimos el array: {"H", "o", "l", "a"} = {"a", "l", "o", "H"}
    // Con join('') unimos a los elementos en el arreglo: {"a", "l", "o", "H"} = aloH
}

let resultado5 = usandoConsole5("Hola mundo"); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado5); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");


function usandoHTML5() {
    function actualizarResultado() { // Función para actualizar el resultado
        let textarea = document.getElementById("texto5"); // Declaramos una variable para el textarea
        let invertido = document.getElementById("invertido"); // Declaramos una variable para el texto a repetir

        const texto = textarea.value; // Obtener el valor del textarea

        invertido.textContent = texto.split('').reverse().join(''); // A "invertido" le pasamos a "texto" ya invertido

        document.getElementById("texto5").addEventListener("input", actualizarResultado); // Añadimos un eventListener
        //para que al ingresar datos en el textarea, estos se actualicen
    }

    actualizarResultado(); // Llamamos a la función de actualización
}

usandoHTML5();