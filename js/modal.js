// Получаем ссылки на элементы
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var modal = document.getElementById('myModal');

// Открываем модальное окно
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// Закрываем модальное окно
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
