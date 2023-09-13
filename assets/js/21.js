/*
Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado.
Ejemplo:
    mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
console.log("================[EJERCICIO 21]================");
function usandoConsole21(array) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] * array[i]);
    }

    return resultado;
}

const array21 = [2, 4, 6, 8];
const resultado21 = usandoConsole21(array21);

console.log(resultado21);
console.log("==============================================\n\n\n");

function usandoHTML21() {
    let textarea = document.getElementById("array-square"); //Declaramos una variable para el textarea
    let separado = document.getElementById("array-squared"); //Declaramos una variable para el texto recortado

    textarea.addEventListener("input", function () { //Creamos un eventListener que detecta cuando escribimos algo
        let texto = textarea.value; //La constante "texto" será igual al valor en textarea
        //texto = parseFloat(texto);
        const lista = texto.split(" "); //La constante "lista" será igual a "texto" separado en un array

        separado.innerHTML = ""; //Limpiamos el contenido dentro del HTML

        lista.forEach(function (elemento) { //Por cada elemento en el array "lista"...
            let li = document.createElement("li"); //Creamos un elemento HTML "<li></li>" y lo almacenamos en la variable "li"
            li.className = "list-group-item list-group-item-action"; // Añadimos la clase al elemento HTML "<li></li>"
            li.textContent = elemento * elemento; //Introducimos a "elemento" dentro del "<li></li>"
            separado.appendChild(li); //Agregamos el elemento "li" al elemento HTML "separado"
        });
    });
}

usandoHTML21();
