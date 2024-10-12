//     <div class="todo-container">
//       <div class="todos-div"></div>
//       <div class="input-div">
//         <input type="text" id="input-element" name="todo-description">
//         <button id="Add-button">Add</button>
//       </div>
//       <div class="done-todos-div"></div>
//
// const data ={
//
//   key:'summer'
// };
// localStorage.setItem('myData',JSON.stringify(data));
//
// const storedData = localStorage.getItem('myData');
// if(storedData){
//   const parsedData = JSON.parse(storedData);
//   console.log(parsedData);
// }
const todosDiv = document.getElementById('todos-div');
const inputElement = document.getElementById('input-element');
const addButton = document.getElementById('add-button');
const doneTodosDiv = document.getElementById('done-todos-div');
const clear = document.getElementById('clear');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
// const data =[
//   {status:'todo', description:'social hw'},
//   {status:'done', description: 'english hw'}
// ];
//
clear.addEventListener('click', () => {
  let storedData = JSON.parse(localStorage.getItem('myTodo')); // Use let instead of const
  const indexOfFiDone = storedData.findIndex(object => object.status === 'done');

  if (indexOfFiDone >= 0 && indexOfFiDone < storedData.length) {
    storedData = storedData.slice(0, indexOfFiDone); // Use slice() instead of substring()
    localStorage.setItem('myTodo', JSON.stringify(storedData));
    updateDisplay();
  }
});


function todoChecked(id) {
  const clickedIdInt = parseInt(id.replace(/\D/g, ''), 10);
  const storedData = JSON.parse(localStorage.getItem('myTodo'));
  const indexOfFiDone = storedData.findIndex(object => object.status === 'done');

  if (indexOfFiDone < 0) {
    storedData[clickedIdInt].status = "done";
    localStorage.setItem('myTodo', JSON.stringify(storedData));
    updateDisplay();
  } else {
    storedData.splice(indexOfFiDone, 0, storedData[clickedIdInt]);
    storedData[indexOfFiDone].status = "done";
    storedData.splice(clickedIdInt + 1, 1); // Remove the element from the original position
    localStorage.setItem('myTodo', JSON.stringify(storedData));
    updateDisplay();
  }
}

//
addButton.addEventListener('click',()=>{
  if(inputElement.value!=""){
    const storedData = JSON.parse(localStorage.getItem('myTodo'));
    const newObject ={status: 'todo', description: inputElement.value};
    storedData.unshift(newObject);
    localStorage.setItem('myTodo',JSON.stringify(storedData));
    updateDisplay();
  }
});

function updateDisplay(){
  doneTodosDiv.innerHTML = "";
  todosDiv.innerHTML = "";
  const storedData = JSON.parse(localStorage.getItem('myTodo'));
  storedData.forEach((object,index)=>{
    const taskDiv = document.createElement('div');
    const todoSpan = document.createElement('span');
    todoSpan.textContent = object.description;
    if(object.status=="todo"){
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.id="todo-" + index;
      checkBox.setAttribute("onclick", "todoChecked(this.id)");
      taskDiv.appendChild(checkBox);
      taskDiv.appendChild(todoSpan);
      todosDiv.appendChild(taskDiv);
    } else{
      taskDiv.appendChild(todoSpan);
      doneTodosDiv.appendChild(taskDiv);
    }
  });
}
updateDisplay();

