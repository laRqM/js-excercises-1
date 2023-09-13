/*
Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy.
Ejemplo:
    miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

console.log("================[EJERCICIO 17]================");
function usandoConsole17(fechaNacimiento) { //Creamos una función que recibe un argumento por valor
    const fechaActual = new Date();
    const diferenciaEnMilisegundos = fechaActual - fechaNacimiento;

    // Calcular la diferencia en años
    return Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
}

const fechaNacimiento = new Date(1984, 4, 23);
const edad = usandoConsole17(fechaNacimiento);
console.log(`Han pasado ${edad} años.`)
console.log("==============================================\n\n\n");

function usandoHTML17() {
    function actualizarResultado() {
        const fechaComparar = document.getElementById("fecha-comparar").value; // Obtenemos la fecha del input
        const resultado_fecha = document.getElementById("tiempo_transcurrido");

        // Verificamos si se ha ingresado una fecha
        if (fechaComparar) {
            const fechaCompararDate = new Date(fechaComparar); // Convertimos la fecha ingresada en un objeto Date
            const fechaHoy = new Date(); // Obtenemos la fecha actual

            // Calculamos la diferencia en milisegundos entre las dos fechas
            const diferenciaMilisegundos = fechaHoy - fechaCompararDate;

            // Calculamos la diferencia en años
            const aniosTranscurridos = Math.floor(diferenciaMilisegundos / (365 * 24 * 60 * 60 * 1000));

            resultado_fecha.textContent = `Han pasado ${aniosTranscurridos} años desde la fecha ingresada.`;
        } else {
            resultado_fecha.textContent = ""; // Si no se ha ingresado una fecha, borramos el resultado
        }
    }

    document.getElementById("fecha-comparar").addEventListener("input", actualizarResultado);

    actualizarResultado();
}

usandoHTML17();