const todoTodos = document.getElementById("todo-todos");
const doneTodos = document.getElementById("done-todos");
const todoInput = document.getElementById("todo-input")

var arrayTodoTodos = [];
var arrayDoneTodos = [];

function addTodo() {
  arrayTodoTodos.push(todoInput.value);
  displayUpdate();
}

function displayUpdate() {
  todoTodos.innerHTML = "";
  doneTodos.innerHTML = "";

  arrayTodoTodos.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    const checkBox = document.createElement("input");
    const todoSpan = document.createElement("span");
    todoDiv.classList = "todo-div";
    todoSpan.textContent = todo;
    checkBox.type = "checkbox";
    checkBox.id = "todo-" + index;
    checkBox.setAttribute("onclick", "todoChecked(this.id)");
    todoDiv.appendChild(checkBox);
    todoDiv.appendChild(todoSpan);
    todoTodos.appendChild(todoDiv);
  });
  arrayDoneTodos.forEach((done) => {
    const doneDiv = document.createElement("div");
    const doneSpan = document.createElement("span");
    doneDiv.classList = "done-div";
    doneSpan.textContent = done;
    doneDiv.appendChild(doneSpan);
    doneTodos.appendChild(doneDiv);

  });
}
function todoChecked(checkBoxId) {
  console.log(checkBoxId);
  const checkBoxIdInt = parseInt(checkBoxId.replace(/\D/g, ''), 10);
  console.log(checkBoxIdInt);
  console.log(arrayTodoTodos[checkBoxIdInt]);
  arrayDoneTodos.push(arrayTodoTodos[checkBoxIdInt]);
  arrayTodoTodos.splice(checkBoxIdInt, 1);
  displayUpdate();
}
function clearDoneTodos() {
  arrayDoneTodos = [];
  displayUpdate();
}
