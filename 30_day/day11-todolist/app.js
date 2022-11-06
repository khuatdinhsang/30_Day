var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todoList = document.querySelector('.todos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let val = input.value.trim();
    // neu value co gia tri thi chay ham duoi
    if (val) {
        addTodoElement({
            text: val,

        })
        saveTodoList();

    }
    input.value = '';
})

//  tham so truyen vao la object
function addTodoElement(todo) {

    var li = document.createElement('li');
    li.innerHTML = `
    <span>${todo.text}</span>
                <i class="fa-solid fa-trash"></i>
    `
    if (todo.status == 'completed') {
        li.setAttribute('class', 'completed')
    }
    li.addEventListener('click', function(e) {
        this.classList.toggle('completed');
        saveTodoList();
    })

    li.querySelector('i').addEventListener('click', function(e) {
        this.parentElement.remove();
        saveTodoList();
    })
    todoList.appendChild(li);

}

function saveTodoList() {
    let todoList = document.querySelectorAll('li');
    let todoStorage = [];
    todoList.forEach(function(item) {
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class');
        todoStorage.push({
            // text: text, status:status vi cu phap moi 
            //  co theviet ngan nhu ben duoi
            text,
            status
        })

    })

    // local storage
    localStorage.setItem('todoList', JSON.stringify(todoStorage));
}

function init() {
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item) {
        addTodoElement(item);
    })
}
init();