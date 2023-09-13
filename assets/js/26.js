/*
Programa una función que dado un arreglo de números obtenga el promedio.
Ejemplo:
    promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
console.log("================[EJERCICIO 26]================");
function usandoConsole26(array) {
    // Verificamos si el arreglo está vacío
    if (array.length === 0) {
        return "El arreglo está vacío";
    }

    const suma = array.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / array.length;
}
const arreglo26 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const resultado26 = usandoConsole26(arreglo26);
console.log(resultado26);
console.log("==============================================\n\n\n");

function usandoHTML26() {
    const textarea = document.getElementById("array-promedios");
    const promedio_resultado = document.getElementById("promedio-array");

    textarea.addEventListener("input", function () {
        const texto = textarea.value;
        const lista = texto.split(" ").map(Number); // Convertimos los elementos a números
        const suma = lista.reduce((acc, num) => acc + num, 0); // Sumamos los números
        const promedio = suma / lista.length; // Calculamos el promedio

        // Mostramos el resultado en el elemento "promedio-array"
        promedio_resultado.textContent = `El promedio es: ${promedio.toFixed(2)}`;
    });
}

usandoHTML26();
