/*
<div id="task-man-container">
      <div id="new-task" class="flex fle-coloumn ali-center">
        <input type="text" id="new-input">
        <button id="new-btn">Add</button>
      </div>
      <div id="div-container" class="flex">
        <div id="todo-div" >

        </div>
        <div id="doing-div">
        </div>
        <div id="done">
        </div>
        <div id="trash">
          <button id="del-btn">Delete</button>
        </div>
      </div>
*/

const newBtn = document.getElementById('new-btn');
const newInput = document.getElementById('new-input');
const todoDiv = document.getElementById('todo-div');
const lists = document.querySelectorAll('.list');
var tasks = document.querySelectorAll('.task')
const delBtn = document.getElementById('delete');
const trash = document.getElementById('trash');
delBtn.addEventListener('click',()=>{
  trash.innerHTML = "";
}
);
function allowDrop(ev){ 
  ev.preventDefault();
}
function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text"); 
  ev.target.appendChild(document.getElementById(data));
}
function drag(ev){ 
  ev.dataTransfer.setData("text", ev.target.id);
}
var taskNum = 0;
newBtn.addEventListener('click', ()=>{
  const task = document.createElement('p');
  task.setAttribute('draggable','true');
  task.innerText = newInput.value;
  task.classList = 'task';
  task.classList.add('unselectable');
  task.setAttribute('ondragstart','drag(event)');
  task.id=`task-${taskNum}`;
  taskNum++;
  todoDiv.appendChild(task);
  var tasks = document.querySelectorAll('.task')
});

