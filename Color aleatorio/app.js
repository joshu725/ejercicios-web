// Seleccionar los elementos del DOM
const indicator = document.querySelector("#color-indicator");
const button = document.querySelector("#color-button");

// Función para generar un color aleatorio en formato HEX
function randomColorHEX() {
    let digits = "0123456789ABCDEF";
    let colorHEX = "#";

    // 6 iteraciones porque los colores HEX tienen 6 digitos
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        colorHEX += digits[random];
    }

    return colorHEX;
}

// Escuchador de eventos para el elemento del boton
button.addEventListener("click", () => {
    // Se crea variable con el color aleatorio llamando la funcion randomColorHEX()
    let colorHEX = randomColorHEX();
    // Actualizamos el texto
    indicator.textContent = colorHEX;
    // Actualizamos el estilo background-color del "body"
    document.body.style.backgroundColor = colorHEX;
});
