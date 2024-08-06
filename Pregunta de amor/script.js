const buttonNo = document.querySelector("#no");
const buttonYes = document.querySelector("#yes");

let fontSize = 1;

let messagesNo = ["Nunca", "Jamás", "Un poquito", "A veces", "No mucho"];

buttonNo.addEventListener("click", () => {
    fontSize++;
    buttonYes.style.fontSize = `${fontSize}rem`;

    const randomIndex = Math.floor(Math.random() * messagesNo.length);

    buttonNo.textContent = messagesNo[randomIndex];
});

buttonYes.addEventListener("click", () => {
    document.querySelector(".final-message").style.display = "flex";
});
