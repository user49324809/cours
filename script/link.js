//обработчик нажатий на ссылку
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Ссылка была нажата!');
});