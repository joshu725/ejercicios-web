// Obtenemos los elementos del DOM
const chronometer = document.getElementById("chronometer");
const buttonStartPause = document.getElementById("button-start-pause");
const buttonRestart = document.getElementById("button-restart");

// Declaramos las variables que utilizaremos
let [hours, minutes, seconds] = [0, 0, 0];
let timeInterval;
let chronometerState = "pause";

// Función para actualizar el cronometro
function updateChronometer() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    const secondsFormated = setFormat(seconds);
    const minutesFormated = setFormat(minutes);
    const hoursFormated = setFormat(hours);

    chronometer.innerText = `${hoursFormated}:${minutesFormated}:${secondsFormated}`;
}

// Función para agregar un "0" a la izquierda en caso de ser menor a 10
function setFormat(time) {
    return time < 10 ? "0" + time : time;
}

// Función para actualizar el botón de inicio-pausa
function setButtonPause() {
    timeInterval = window.setInterval(updateChronometer, 1000);
    buttonStartPause.innerHTML = '<i class="bi bi-pause"></i>';
    buttonStartPause.classList.remove("start");
    buttonStartPause.classList.add("pause");
    chronometerState = "start";
}

// Función para actualizar el botón de inicio-pausa
function setButtonPlay() {
    window.clearInterval(timeInterval);
    buttonStartPause.innerHTML = '<i class="bi bi-play"></i>';
    buttonStartPause.classList.remove("pause");
    buttonStartPause.classList.add("start");
    chronometerState = "pause";
}

// Evento que permitirá iniciar o pausar el cronometro
buttonStartPause.addEventListener("click", () => {
    if (chronometerState === "pause") {
        setButtonPause();
    } else {
        setButtonPlay();
    }
});

// Evento que permitirá reiniciar el cronometro
buttonRestart.addEventListener("click", () => {
    window.clearInterval(timeInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    chronometer.innerText = "00:00:00";
    setButtonPlay();
});
