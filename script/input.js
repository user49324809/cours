//валидация формы регистрации

document.querySelector('.form_input').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы
    // Валидация имени
    const nameInput = document.querySelector("#name");
    const nameValue = nameInput.value;
    const nameErrorMessage = document.querySelector('#error-name');
    const namePattern = /^[A-ZА-Я][a-zа-я]+$/;
    if (namePattern.test(nameValue)) {
        nameErrorMessage.style.display = 'none';
        alert('Имя верное!');
    } else {
        nameErrorMessage.style.display = 'block';
    }
    //валидация имейл формы
    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value;
    const emailErrorMessage = document.querySelector('#error-email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(emailValue)) {
        emailErrorMessage.style.display = 'none';
        alert('Email правильный!');
    } else {
        emailErrorMessage.style.display = 'block';
    }
});
//обработчик нажатия на кнопку
const button_input = document.querySelector("#button_input");
if (button) {
    button_input.addEventListener("click", () => {
        console.log("Button clicked!");
    });
}