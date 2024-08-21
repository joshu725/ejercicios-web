// Obtenemos los elementos
const inputRed = document.getElementById("red");
const inputGreen = document.getElementById("green");
const inputBlue = document.getElementById("blue");

const textRed = document.getElementById("red-text");
const textGreen = document.getElementById("green-text");
const textBlue = document.getElementById("blue-text");
const textHex = document.querySelector(".hex");

// Variables para almacenar el valor de los input
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

// Actualizamos el texto de los parrafos
textRed.innerText = red;
textGreen.innerText = green;
textBlue.innerText = blue;
textHex.innerText = rgbToHex(
    // Se utiliza el parseInt para mandar a la función los valores como enteros
    parseInt(red, 10),
    parseInt(green, 10),
    parseInt(blue, 10)
).toUpperCase();

// Función para canbiar el color del fondo
function changeColor(red, green, blue) {
    const colorRGB = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = colorRGB;
    textHex.innerText = rgbToHex(
        // Se utiliza el parseInt para mandar a la función los valores como enteros
        parseInt(red, 10),
        parseInt(green, 10),
        parseInt(blue, 10)
    ).toUpperCase();
}

// Funcion para convertir RGB a Hex
function rgbToHex(r, g, b) {
    // Función para convertir un valor decimal a hexadecimal
    const componentToHex = (c) => {
        const hex = c.toString(16);
        // Aseguramos que tenga dos carácteres
        return hex.length === 1 ? "0" + hex : hex;
    };

    // Regresamos el valor del color hex
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Event Listeners para los input
inputRed.addEventListener("change", () => {
    red = inputRed.value;
    textRed.innerText = red;
    changeColor(red, green, blue);
});

inputGreen.addEventListener("change", () => {
    green = inputGreen.value;
    textGreen.innerText = green;
    changeColor(red, green, blue);
});

inputBlue.addEventListener("change", () => {
    blue = inputBlue.value;
    textBlue.innerText = blue;
    changeColor(red, green, blue);
});
