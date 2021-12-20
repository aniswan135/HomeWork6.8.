const change = document.querySelector('#change');

change.addEventListener('click', function(event) {
    event.preventDefault();
    let operand = prompt('введите текст');
    this.textContent = operand;
})
