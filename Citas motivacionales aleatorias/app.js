// Obtenemos los elementos del DOM
let button = document.getElementById("button-change-quote");
let quote = document.getElementById("quote");
let author = document.getElementById("author");

// Función que genera un numero aleatorio en el rango de numeros indicado
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Función para cambiar la cita
function changeQuote() {
    // Se genera un indice aleatorio entre los rangos proporcionados, esto para seleccionar aleatoriamente una cita
    let randomIndex = randomInt(0, quotes.length);
    quote.innerText = `"${quotes[randomIndex].quote}"`;
    author.innerText = quotes[randomIndex].author;
}

changeQuote();

// Evento que manda a llamar una función al dar click en el botón
button.addEventListener("click", changeQuote);
