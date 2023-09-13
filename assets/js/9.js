/*
Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

console.log("================[EJERCICIO 9]================");
function usandoConsole9(min, max) { //Creamos una función que recibe un argumento por valor
    return Math.floor(Math.random() * (max - min) + min); //Retornamos el largo de "cadena".
}

let resultado9 = usandoConsole9(501, 600); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado9); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");

function usandoHTML9() {
    function actualizarResultado() {
        let inferiorInput = document.getElementById("limit-i");
        let superiorInput = document.getElementById("limit-s");
        let aleatorio = document.getElementById("aleatorio");

        let inferior = parseFloat(inferiorInput.value); // Convertimos el dato a Float
        let superior = parseFloat(superiorInput.value); // Convertimos el dato a Float

        if (isNaN(inferior) || isNaN(superior)) { // Si límite inferior y superior no son números...
            aleatorio.textContent = "Ingresa números válidos";
        } else if (inferior >= superior) { // Si límite inferior es mayor o igual que el límite superior...
            aleatorio.textContent = "El límite inferior debe ser menor que el límite superior";
        } else { // Si todo está bien...
            let numeroAleatorio = Math.floor(Math.random() * (superior - inferior + 1)) + inferior;
            aleatorio.textContent = numeroAleatorio; // Mandamos el resultado al HTML
        }
    }

    document.getElementById("limit-i").addEventListener("input", actualizarResultado);
    document.getElementById("limit-s").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML9();