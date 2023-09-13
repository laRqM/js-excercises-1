/*
Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array.
Ejemplo:
    miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
console.log("================[EJERCICIO 22]================");
function usandoConsole22(array) {
    if (array.length === 0) {
        return "El array está vacío";
    }

    let numeroMasAlto = array[0];
    let numeroMasBajo = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > numeroMasAlto) {
            numeroMasAlto = array[i];
        }

        if (array[i] < numeroMasBajo) {
            numeroMasBajo = array[i];
        }
    }

    return [numeroMasAlto, numeroMasBajo];
}
const resultado22 = usandoConsole22([1, 4, 5, 99, -60]);
console.log(resultado22); // Esto imprimirá [99, -60]
console.log("==============================================\n\n\n");

function usandoHTML22() {
    const textarea = document.getElementById("array-mayor-menor");
    const ordenado = document.getElementById("array-mayor-menor-ordenado");

    textarea.addEventListener("input", function () {
        let texto = textarea.value;
        const lista = texto.split(" ");

        if (lista.length === 0 || lista[0] === "") { // Si el array es igual a 0 o igual a nada...
            ordenado.textContent = "El array está vacío";
            return; // Salimos de la función si el array está vacío o solo contiene cadenas vacías
        }

        let numeros = lista.map(function (elemento) { // numeros será igual a cada elemento del array como un propio array
            // Y cada elemento tiene asignada una función.
            // map sirve para transformar cada elemento de un array en un nuevo array.
            return parseInt(elemento); // Convertimos cada elemento en un número entero.
        });

        let numeroMasAlto = numeros[0];
        let numeroMasBajo = numeros[0];

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > numeroMasAlto) {
                numeroMasAlto = numeros[i];
            }

            if (numeros[i] < numeroMasBajo) {
                numeroMasBajo = numeros[i];
            }
        }

        ordenado.innerHTML = ""; // Limpiamos el contenido dentro del HTML

        numeros.forEach(function (elemento) {
            let li = document.createElement("li");
            li.className = "list-group-item list-group-item-action";
            li.textContent = elemento;
            ordenado.appendChild(li);
        });

        // Mostrar el número más alto y más bajo
        ordenado.innerHTML += '<hr>';
        ordenado.innerHTML += `<li class="list-group-item list-group-item-info">Número más alto: ${numeroMasAlto}</li>`;
        ordenado.innerHTML += `<li class="list-group-item list-group-item-info">Número más bajo: ${numeroMasBajo}</li>`;
    });
}

usandoHTML22();