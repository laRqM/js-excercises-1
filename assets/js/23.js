/*
Programa una función que dado un array de números devuelva un objeto con 2 arreglos.
En el primero almacena los números pares y en el segundo los impares.
Ejemplo:
    miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
console.log("================[EJERCICIO 23]================");
function usandoConsole23(array) {
    const resultado = {
        pares: [],
        impares: [],
    };

    for (let i = 0; i < array.length; i++) {
        const numero = array[i];

        if (numero % 2 === 0) {
            resultado.pares.push(numero);
        } else {
            resultado.impares.push(numero);
        }
    }

    return resultado;
}
const array23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const resultado23 = usandoConsole23(array23);
console.log(resultado23);
console.log("==============================================\n\n\n");

function usandoHTML23() {
    const textarea = document.getElementById("array-pares-impares");
    const paresList = document.getElementById("array-pares");
    const imparesList = document.getElementById("array-impares");

    textarea.addEventListener("input", function () {
        let texto = textarea.value;
        const lista = texto.split(" ");

        const resultado = {
            pares: [],
            impares: [],
        };

        for (let i = 0; i < lista.length; i++) {
            const numero = lista[i];

            if (numero % 2 === 0) {
                resultado.pares.push(numero);
            } else {
                resultado.impares.push(numero);
            }
        }

        paresList.innerHTML = "";
        imparesList.innerHTML = "";

        resultado.pares.forEach(function (numero) {
            const li = document.createElement("li");
            li.className = "list-group-item list-group-item-action";
            li.textContent = numero;
            paresList.appendChild(li);
        });

        resultado.impares.forEach(function (numero) {
            const li = document.createElement("li");
            li.className = "list-group-item list-group-item-action";
            li.textContent = numero;
            imparesList.appendChild(li);
        });
    });
}

usandoHTML23();
