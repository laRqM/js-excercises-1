/*
Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro).
Ejemplo:
    miFuncion(2002) devolverá true.
*/

console.log("================[EJERCICIO 10]================");
function usandoConsole10(numero) { //Creamos una función que recibe un argumento por valor
    let primero = numero.toString(); // Convertimos el número a String
    let validar = primero.split('').reverse().join('');
    // Con split() separamos la cadena en un array: Hola = {"H", "o", "l", "a"}
    // Con reverse() invertimos el array: {"H", "o", "l", "a"} = {"a", "l", "o", "H"}
    // Con join('') unimos a los elementos en el arreglo: {"a", "l", "o", "H"} = aloH

    return primero === validar;
}

let resultado10 = usandoConsole10(110); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado10); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");


function usandoHTML10() {
    function actualizarResultado() {
        const textarea = document.getElementById("texto10"); // Declaramos una variable para el textarea
        const capicua = document.getElementById("capicua");
        let texto = textarea.value.toString(); // Obtener el valor del textarea

        let validar = texto.split('').reverse().join('');

        if(texto === validar) {
            capicua.textContent = "Sí";
        } else {
            capicua.textContent = "No";
        }
    }

    document.getElementById("texto10").addEventListener("input", actualizarResultado);
    document.getElementById("capicua").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML10();