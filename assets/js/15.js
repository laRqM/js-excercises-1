/*
Programa una función para convertir números de base binaria a decimal y viceversa.
Ejemplo:
    miFuncion(100,2) devolverá 4 base 10.
*/

console.log("================[EJERCICIO 15]================");
function usandoConsole15(numero, tipo) {
    switch (tipo) {
        case 1:
            return parseInt(numero, 2); // Convertimos "numero" a integer con base 2 para convertir de binario a decimal
        case 2:
            // Convertimos de decimal a binario usando toString con base 2
            return (numero >>> 0).toString(2); // El operador de desplazamiento >>> convierte a número entero sin signo
            // El operador de desplazamiento >>> se usa para realizar un desplazamiento a la derecha sin signo de numero en 0 posiciones.
            // El resultado es que se convierte cualquier número negativo en su equivalente positivo (en complemento a dos) y deja inalterados
            // los números positivos. Esto se hace para asegurarse de que todos los bits estén establecidos como ceros o unos en la representación binaria.
        default:
            return;
    }
}
// BINARIO      DECIMAL
// 10           =    2
// 1110101      =  117
// 10001011     =  139
// 110110111    =  439
// 11111100111  = 2023

// 1 = convertir a decimal | 2 = convertir a binario
let resultado15 = usandoConsole15("110110111", 1); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado15); //Imprimimos la variable "resultado" en consola.
console.log("==============================================\n\n\n");

function usandoHTML15() {
    function actualizarResultado() {
        const selectElement = document.querySelector(".selector-sistema-numerico"); // Obtener el elemento <select>
        const num_conver = document.getElementById("numero-conversion");
        const convertido = document.getElementById("convertido");

        selectElement.addEventListener("change", function() {
            const selectedValue = selectElement.value; // Obtener el nuevo valor seleccionado

            switch (selectedValue) {
                case "2":
                    const binaryValue = (parseInt(num_conver.value) >>> 0).toString(2); // Convertimos num_conver a decimal
                    convertido.textContent = binaryValue;
                    break;

                case "1":
                    const decimalValue = parseInt(num_conver.value, 2); // Convertimos num_conver a decimal
                    convertido.textContent = decimalValue;
                    break;

                default:
                    convertido.textContent = "Número inválido";
            }
        });
    }

    document.getElementById("numero-conversion").addEventListener("input", actualizarResultado);
    document.getElementById("convertido").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML15();
