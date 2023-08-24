// Function to add a new TODO item
function addTodo() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();

    if (task !== "") {
        const todoList = document.getElementById("todo-list");
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="removeTodo(this)">Delete</button>
        `;
        todoList.appendChild(li);
        input.value = "";
    }
}

// Function to remove a TODO item
function removeTodo(button) {
    const li = button.parentElement;
    li.remove();
}
