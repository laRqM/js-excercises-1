/*
Programa una función que dada una String te devuelva una Array de textos separados por cierto caracter.
Ejemplo:
    miFuncion(`hola que tal`, ``) devolverá [`hola`, `que`, `tal`]
*/
console.log("================[EJERCICIO 3]================");
function usandoConsole3(cadena) {
    return cadena.split(" ");
}

let resultado3 = usandoConsole3("Hola Mundo");
console.log(resultado3); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");

function usandoHTML3() {
    let textarea = document.getElementById("texto3"); //Declaramos una variable para el textarea
    let separado = document.getElementById("separado"); //Declaramos una variable para el texto recortado

    textarea.addEventListener("input", function () { //Creamos un eventListener que detecta cuando escribimos algo
        const texto = textarea.value; //La constante "texto" será igual al valor en textarea
        const lista = texto.split(" "); //La constante "lista" será igual a "texto" separado en un array

        separado.innerHTML = ""; //Limpiamos el contenido dentro del HTML

        lista.forEach(function (elemento) { //Por cada elemento en el array "lista"...
            let li = document.createElement("li"); //Creamos un elemento HTML "<li></li>" y lo almacenamos en la variable "li"
            li.className = "list-group-item list-group-item-action"; // Añadimos la clase al elemento HTML "<li></li>"
            li.textContent = elemento; //Introducimos a "elemento" dentro del "<li></li>"
            separado.appendChild(li); //Agregamos el elemento "li" al elemento HTML "separado"
        });
    });
}

usandoHTML3();