/*
Programa una función para convertir grados Celsius a Fahrenheit y viceversa.
Ejemplo:
    miFuncion(0,"C") devolverá 32°F.
*/

console.log("================[EJERCICIO 14]================");
function usandoConsole14(numero, tipo) { //Creamos una función que recibe un argumento por valor
    switch (tipo) {
        case "F":
            return Math.round((numero - 32) * (5/9)) + "°C";
            break;

        case "C":
            return Math.round((numero * (9/5)) + 32) + "°F";
            break;

        default:
            return "Símbolo inválido";
    }
}

let resultado14 = usandoConsole14(30, "C"); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado14); //Imprimimos la variable "resultado" en consola.
console.log("==============================================\n\n\n");

function usandoHTML14() {
    function actualizarResultado() {
        const selectElement = document.querySelector(".selector-temps"); // Obtener el elemento <select>
        const temp_grados = document.getElementById("temp-grados");
        const temps = document.getElementById("temps");

        // Obtener el valor del campo de temperatura como número
        let texto = parseFloat(temp_grados.value);

        selectElement.addEventListener("change", function() {
            const selectedValue = selectElement.value; // Obtener el nuevo valor seleccionado

            switch (selectedValue) {
                case "2": // Cambiado a cadena para que coincida con los valores de los options
                    temps.textContent = Math.round((texto - 32) * (5/9)) + "°C";
                    break;

                case "1": // Cambiado a cadena para que coincida con los valores de los options
                    temps.textContent = Math.round((texto * (9/5)) + 32) + "°F";
                    break;

                default:
                    temps.textContent = "Símbolo inválido";
            }
        });
    }

    document.getElementById("temp-grados").addEventListener("input", actualizarResultado);
    document.getElementById("temps").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML14();


/*function usandoHTML12() {
    function actualizarResultado() {
        const selectElement = document.querySelector(".selector-temps"); // Obtener el elemento <select>
        const temp_grados = document.getElementById("temp-grados");
        const temps = document.getElementById("temps");

        let texto = parseInt(temp_grados);

        selectElement.addEventListener("change", function() {
            const selectedValue = selectElement.value; // Obtener el nuevo valor seleccionado
            console.log(selectedValue); // Imprimir el nuevo valor seleccionado en la consola

            switch (selectedValue) {
                case 2:
                    temps.textContent = Math.round((texto - 32) * (5/9)) + "°C";
                    break;

                case 1:
                    temps.textContent = Math.round((texto * (9/5)) + 32) + "°F";
                    break;

                default:
                    return "Símbolo inválido";
            }
        });
    }

    document.getElementById("temp-grados").addEventListener("input", actualizarResultado);
    document.getElementById("temps").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML12();*/