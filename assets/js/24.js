/*
Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos.
El primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente.
Ejemplo:
    miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
console.log("================[EJERCICIO 24]================");
function usandoConsole24(array) {
    // Clonamos el arreglo original para no modificarlo directamente
    const arregloAscendente = array.slice();
    const arregloDescendente = array.slice();

    // Ordenamos el arreglo ascendente y descendente
    arregloAscendente.sort((a, b) => a - b);
    arregloDescendente.sort((a, b) => b - a);

    // Creamos el objeto con los arreglos ordenados
    return {
        asc: arregloAscendente,
        desc: arregloDescendente,
    };
}
const arreglo24 = [7, 5, 7, 8, 6];
const resultado24 = usandoConsole24(arreglo24);
console.log(resultado24);
console.log("==============================================\n\n\n");

function usandoHTML24() {
    const textarea = document.getElementById("array-asc-desc");
    const ascendenteList = document.getElementById("array-asc");
    const descendenteList = document.getElementById("array-desc");

    textarea.addEventListener("input", function () {
        const texto = textarea.value;
        const lista = texto.split(" ").map(Number); // Convertimos los elementos a números

        // Ordenamos el arreglo ascendente y descendente
        const arregloAscendente = lista.slice().sort((a, b) => a - b);
        const arregloDescendente = lista.slice().sort((a, b) => b - a);

        // Limpiamos las listas HTML
        ascendenteList.innerHTML = "";
        descendenteList.innerHTML = "";

        // Agregamos los elementos ordenados a las listas HTML
        arregloAscendente.forEach(function (elemento) {
            const li = document.createElement("li");
            li.className = "list-group-item list-group-item-action";
            li.textContent = elemento;
            ascendenteList.appendChild(li);
        });

        arregloDescendente.forEach(function (elemento) {
            const li = document.createElement("li");
            li.className = "list-group-item list-group-item-action";
            li.textContent = elemento;
            descendenteList.appendChild(li);
        });
    });
}

usandoHTML24();