/*
Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3
    instancias de la clase de forma automatizada e imprime la ficha técnica
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
console.log("================[EJERCICIO 27]================");
class Pelicula {
    constructor(ID_IMDB, titulo, director, year, paises, generos, calificacion) {
        this.validacion_ID(ID_IMDB);
        this.validacion_Titulo(titulo);
        this.validacion_Director(director);
        this.validacion_Year(year);
        this.validacion_Paises(paises);
        this.validacion_Generos(generos);
        this.validacion_Calificacion(calificacion);

        this.ID_IMDB = ID_IMDB;
        this.titulo = titulo;
        this.director = director;
        this.year = year;
        this.paises = paises;
        this.generos = generos;
        this.calificacion = calificacion;
    }

    validacion_ID(ID_IMDB) {
        if (!/^[A-Za-z]{2}\d{7}$/.test(ID_IMDB)) {
            throw new Error("El ID no tiene un formato válido (2 letras seguidas de 7 números).");
        }
    }

    validacion_Titulo(titulo) {
        if (titulo.length > 100) {
            throw new Error("El título no puede ser mayor a 100 caracteres.");
        }
    }

    validacion_Director(director) {
        if (director.length > 50) {
            throw new Error("El nombre del director no debe ser mayor a 50 caracteres.");
        }
    }

    validacion_Year(year) {
        if (!Number.isInteger(year) || year < 1900 || year > new Date().getFullYear()) {
            throw new Error("El año de estreno debe ser un número entero de 4 dígitos.");
        }
    }

    validacion_Paises(paises) {
        if (!Array.isArray(paises) || paises.length === 0) {
            throw new Error("Debes proporcionar al menos un país de origen.");
        }
    }

    validacion_Generos(generos) {
        const generosAceptados = [
            "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary",
            "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical",
            "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport",
            "Talk-Show", "Thriller", "War", "Western"
        ];

        if (!Array.isArray(generos) || generos.length === 0) {
            throw new Error("Debes proporcionar al menos un género.");
        }

        for (const genero of generos) {
            if (!generosAceptados.includes(genero)) {
                throw new Error(`El género '${genero}' no es un género aceptado.`);
            }
        }
    }

    validacion_Calificacion(calificacion) {
        if (typeof calificacion !== "number" || calificacion < 0 || calificacion > 10) {
            throw new Error("La calificación debe ser un número entre 0 y 10.");
        }
    }

    static generosAceptados() {
        return [
            "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary",
            "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical",
            "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport",
            "Talk-Show", "Thriller", "War", "Western"
        ];
    }

    fichaTecnica() {
        return `
        <table class="table">
            <thead>
            <tr>
            <th scope="col">Dato</th>
            <th scope="col">Valor</th>
</tr>
</thead>
            <tr>
                <th scope='row'>Título:</th>
                <td>${this.titulo}</td>
            </tr>
            <tr>
                <th scope="row">Director:</th>
                <td>${this.director}</td>
            </tr>
            <tr>
                <th scope="row">Año de estreno:</th>
                <td>${this.year}</td>
            </tr>
            <tr>
                <th scope="row">Países de origen:</th>
                <td>${this.paises.join(", ")}</td>
            </tr>
            <tr>
                <th scope="row">Géneros:</th>
                <td>${this.generos.join(", ")}</td>
            </tr>
            <tr>
                <th scope="row">Calificación IMDB:</th>
                <td>${this.calificacion}</td>
            </tr>
        </table>
    `;
    }

}

const bladeRunner = new Pelicula("tt0083658", "Blade Runner", "Ridley Scott", 1982, ["USA", "UK"], ["Sci-Fi", "Thriller"], 8.1);
const bladeRunner2049 = new Pelicula("tt1856101", "Blade Runner 2049", "Denis Villeneuve", 2017, ["USA", "UK", "Canada"], ["Sci-Fi", "Thriller"], 8.0);
const interstellar = new Pelicula("tt0816692", "Interstellar", "Christopher Nolan", 2014, ["USA", "UK"], ["Sci-Fi", "Drama"], 8.6);

console.log("Ficha técnica de Blade Runner:");
console.log(bladeRunner.fichaTecnica());

console.log("\nFicha técnica de Blade Runner 2049:");
console.log(bladeRunner2049.fichaTecnica());

console.log("\nFicha técnica de Interstellar:");
console.log(interstellar.fichaTecnica());

console.log("==============================================\n\n\n");

// Mantener un seguimiento de las instancias de Pelicula y los toasts creados
const peliculas = [];
const toasts = [];

const toastStack = document.createElement("div");
toastStack.className = "toast-container position-static";

// Agregar el contenedor al documento
document.body.appendChild(toastStack);

// Función para crear una instancia de Pelicula y mostrar un toast
function crearPelicula() {
    try {
        const id = document.getElementById("pelicula-id").value;
        const titulo = document.getElementById("pelicula-titulo").value;
        const director = document.getElementById("pelicula-director").value;
        const year = parseInt(document.getElementById("pelicula-fecha-estreno").value);
        const paises = document.getElementById("pelicula-paises").value.split(",");
        const generos = document.getElementById("pelicula-generos").value.split(",");
        const calificacion = parseFloat(document.getElementById("pelicula-calificacion").value);

        // Crear una instancia de Pelicula
        const pelicula = new Pelicula(id, titulo, director, year, paises, generos, calificacion);

        // Agregar la instancia de Pelicula a la lista
        peliculas.push(pelicula);

        // Crear un nuevo elemento de toast de Bootstrap
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");
        toast.setAttribute("aria-atomic", "true");
        toast.setAttribute("data-bs-autohide", "false");
        toast.innerHTML = `
            <div class="toast-header">
                <strong class="me-auto">${titulo}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
                ${pelicula.fichaTecnica()}
            </div>
        `;

        // Inicializar el toast de Bootstrap
        const bootstrapToast = new bootstrap.Toast(toast);

        // Agregar un controlador de evento para eliminar la instancia de Pelicula cuando se cierra el toast
        toast.addEventListener("hidden.bs.toast", () => {
            peliculas.shift(); // Eliminar la primera instancia de Pelicula
        });

        bootstrapToast.show();

        // Agregar el toast al documento
        toastStack.appendChild(toast);

        // Limpiar los campos del formulario
        document.getElementById("pelicula-titulo").value = "";
        document.getElementById("pelicula-director").value = "";
        document.getElementById("pelicula-fecha-estreno").value = "";
        document.getElementById("pelicula-paises").value = "";
        document.getElementById("pelicula-generos").value = "";
        document.getElementById("pelicula-calificacion").value = "";

    } catch (error) {
        alert(error.message);
    }
}

// Agregar un controlador de evento al botón "Crear" para llamar a la función crearPelicula
document.getElementById("crear-objeto-pelicula").addEventListener("click", crearPelicula);
