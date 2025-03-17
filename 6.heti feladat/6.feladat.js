document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todoList');
        const newTodo = document.createElement('li');
        newTodo.textContent = todoText;

        newTodo.addEventListener('click', function() {
            newTodo.classList.toggle('completed');
        });

        todoList.appendChild(newTodo);
        input.value = '';
    }
});