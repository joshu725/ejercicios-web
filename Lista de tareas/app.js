// Obtener elementos del DOM
const input = document.getElementById("task-input");
const button = document.querySelector("button");
const listTasks = document.getElementById("list-tasks");

// Función para agregar una tarea
function addTask() {
    // Si el input NO está vacio...
    if (input.value) {
        // Crear tarea
        let newTask = document.createElement("div");
        newTask.classList.add("task");

        // Texto del input
        let text = document.createElement("p");
        text.innerText = input.value;
        newTask.appendChild(text);

        // Contenedor de iconos
        let icons = document.createElement("div");
        icons.classList.add("icons");
        newTask.appendChild(icons);
        // Iconos
        let finish = document.createElement("i");
        finish.classList.add("bi", "bi-check-lg", "finish-icon");
        finish.addEventListener("click", finishTask);
        let delet = document.createElement("i");
        delet.classList.add("bi", "bi-x-lg", "delete-icon");
        delet.addEventListener("click", deleteTask);

        icons.append(finish, delet);

        // Agregar nueva tarea a la lista de tareas
        listTasks.appendChild(newTask);
        // Se elimina el contenido del input
        input.value = "";
    }
}

function finishTask(e) {
    // A través del icono de completar, vamos hacia el nodo abuelo, es decir, el div principal de la tarea
    let task = e.target.parentNode.parentNode;
    task.classList.toggle("finished");
}

function deleteTask(e) {
    let task = e.target.parentNode.parentNode;
    task.remove();
}

button.addEventListener("click", addTask);

// Evento para detectar la tecla Enter
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
