//подключение обработчика кнопки
const button = document.querySelector("#order_button");
if (button) {
    button.addEventListener("click", () => {
        console.log("Button clicked!");
    });
}

//подключение обработчика button_advantages
const button_advantages = document.querySelector("#button_advantages");
if (button) {
    button_advantages.addEventListener("click", () => {
        console.log("Button clicked!");
    });
}