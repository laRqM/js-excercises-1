/*
Programa una función que dado un arreglo de elementos, elimine los duplicados.
Ejemplo:
    miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
console.log("================[EJERCICIO 25]================");
function usandoConsole25(array) {
    // Utilizamos un Set para almacenar elementos únicos
    const elementosUnicos = new Set(array);

    // Convertimos el Set de nuevo en un arreglo
    return Array.from(elementosUnicos);
}
const arreglo25 = ["x", 10, "x", 2, "10", 10, true, true];
const resultado25 = usandoConsole25(arreglo25);
console.log(resultado25);
console.log("==============================================\n\n\n");

function usandoHTML25() {
    const textarea = document.getElementById("array-duplicados");
    const array_eliminados = document.getElementById("array-eliminados");

    textarea.addEventListener("input", function () {
        const texto = textarea.value;
        const lista = texto.split(" ").map(Number); // Convertimos los elementos a números

        const elementosUnicos = new Set(lista);

        array_eliminados.innerHTML = "";

        elementosUnicos.forEach(function (elemento) {
            const li = document.createElement("li");
            li.className = "list-group-item list-group-item-action";
            li.textContent = elemento;
            array_eliminados.appendChild(li);
        });
    });
}

usandoHTML25();