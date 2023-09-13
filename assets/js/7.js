/*
Programa una función que valide si una palabra o frase dada es un palíndromo.
Ejemplo:
    miFuncion("Salas") devolverá true
*/

console.log("================[EJERCICIO 7]================");
function usandoConsole7(cadena) { //Creamos una función que recibe un argumento por valor
    let validar = cadena.toLowerCase().split('').reverse().join('');
    // Con split() separamos la cadena en un array: Hola = {"H", "o", "l", "a"}
    // Con reverse() invertimos el array: {"H", "o", "l", "a"} = {"a", "l", "o", "H"}
    // Con join('') unimos a los elementos en el arreglo: {"a", "l", "o", "H"} = aloH

    return cadena.toLowerCase() === validar;
}

let resultado7 = usandoConsole7("Salas"); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado7); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");


function usandoHTML7() {
    function actualizarResultado() { // Función para actualizar el resultado
        const textarea = document.getElementById("texto7"); // Declaramos una variable para el textarea
        const palindromo = document.getElementById("palindromo");
        let texto = textarea.value; // Obtener el valor del textarea

        let validar = texto.toLowerCase().split('').reverse().join('');

        if(validar === texto.toLowerCase()) {
            palindromo.textContent = "Sí";
        } else {
            palindromo.textContent = "No";
        }
    }

    // Agregar eventos input al campo de entrada "Valor inicial". Con esto el valor en el campo con id "recortado" podrá actualizarse
    // sin que tengamos que actualiza el textarea
    document.getElementById("texto7").addEventListener("input", actualizarResultado);

    actualizarResultado(); // Llamamos a la función de actualización
}

usandoHTML7();