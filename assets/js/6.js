/*
Programa una función para contar el número de veces que se repite una palabra en un texto largo.
Ejemplo:
    miFuncion("hola mundo adios mundo"), "mundo") devolverá 2
*/

console.log("================[EJERCICIO 6]================");
function usandoConsole6(cadena, buscar) {
    const palabras = cadena.split(' '); // Separamos la cadena

    let contador = 0; // Contador para las ocurrencias de la palabra

    for (let i = 0; i < palabras.length; i++) { // Recorre todas las palabras en el array y cuenta las ocurrencias
        if (palabras[i] === buscar) { // Si la palabra en la posición i coincide en tipo de dato y valor con la cadena en buscar...
            contador++; // Anañdimos 1 al contador
        }
    }

    return contador; // Retornamos el contador
}

const texto = "hola mundo adios mundo alrededor del mundo sobre el mundo en el mundo";
const palabra = "mundo";
const resultado6 = usandoConsole6(texto, palabra);

console.log(resultado6); //Imprimimos la variable "resultado" en consola.
console.log("=============================================\n\n\n");

function usandoHTML6() {
    let textarea = document.getElementById("texto6");
    let ocurrencia = document.getElementById("ocurrencia");
    let ocurrencias = document.getElementById("ocurrencias");

    textarea.addEventListener("input", function () {
        const texto = textarea.value;
        const palabraBuscar = ocurrencias.value; // Obtener la palabra a buscar desde el campo de entrada

        if (palabraBuscar.trim() === "") {
            ocurrencia.textContent = "0"; // Si no se ingresa una palabra a buscar, establecer el contador a 0
            return;
        }

        const palabras = texto.split(' ');
        let contador = 0;

        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] === palabraBuscar) {
                contador++;
            }
        }

        ocurrencia.textContent = contador.toString();
    });
}

usandoHTML6();


/*function usandoHTML6() {
    function actualizarResultado() { // Función para actualizar el resultado
        let textarea = document.getElementById("texto"); //Declaramos una variable para el textarea
        let ocurrencia = document.getElementById("ocurrencia"); //Declaramos una variable para el contador
        let ocurrencias = document.getElementById("ocurrencias"); //Donde se imprime el resultado

        const texto = textarea.value; // Obtener el valor del textarea

        const palabras = texto.split('');

        let contador = 0;

        for (let i = 0; i < palabras.length; i++) { // Recorre todas las palabras en el array y cuenta las ocurrencias
            if (palabras[i] === ocurrencias) { // Si la palabra en la posición i coincide en tipo de dato y valor con la cadena en buscar...
                contador++; // Anañdimos 1 al contador
            }
        }

        ocurrencia.textContent = contador.toString();

        document.getElementById("texto").addEventListener("input", actualizarResultado); // Añadimos un eventListener
        //para que al ingresar datos en el textarea, estos se actualicen
    }

    actualizarResultado(); // Llamamos a la función de actualización
}

usandoHTML6();*/