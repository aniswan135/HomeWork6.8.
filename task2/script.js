const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Диалоговое окно с запросом на ввод текста');
})

document.querySelector('#alert').onclick = function() {
    alert('Показывает диалоговое окно сообщением и кнопкой ОК');
    }