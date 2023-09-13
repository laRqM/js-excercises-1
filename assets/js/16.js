/*
Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada.
Ejemplo:
    miFuncion(1000, 20) devolverá 800.
*/

console.log("================[EJERCICIO 16]================");
function usandoConsole16(monto, porcentaje) { //Creamos una función que recibe dos argumentos por valor
    const descuento_decimal = porcentaje / 100; // Convertimos el pocentaje de descuento a decimal

    const descuento = monto * descuento_decimal; // Calculamos el descuento

    return monto - descuento; // Calculamos el monto a pagar con el descuento ya aplicado
}

let resultado16 = usandoConsole16(1000, 20); //Creamos la variable "resultado" y llamamos a la función "usandoConsole" pasándole una String
console.log(resultado16); //Imprimimos la variable "resultado" en consola.
console.log("==============================================\n\n\n");

function usandoHTML16() {
    function actualizarResultado() {
        const textarea = document.getElementById("monto"); // Declaramos una variable para el textarea
        const descuento = document.getElementById("descuento-aplicar");
        const resultadoDescuento = document.getElementById("descuento"); // Agrega un elemento para mostrar el resultado
        let texto = textarea.value; // Obtener el valor del textarea
        let texto2 = descuento.value; // Obtener el valor del textarea

        texto = parseFloat(texto); // Utiliza parseFloat para números decimales
        texto2 = parseFloat(texto2); // Utiliza parseFloat para números decimales

        if (!isNaN(texto) && !isNaN(texto2)) { // Verifica que ambos valores sean números válidos
            const descuento_decimal = texto2 / 100; // Convertimos el porcentaje de descuento a decimal

            const descuentoCalculado = texto * descuento_decimal; // Calculamos el descuento

            resultadoDescuento.textContent = texto - descuentoCalculado.toFixed(2); // Muestra el resultado con dos decimales
        } else {
            resultadoDescuento.textContent = "Ingrese valores numéricos válidos";
        }
    }

    document.getElementById("monto").addEventListener("input", actualizarResultado);
    document.getElementById("descuento").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML16();