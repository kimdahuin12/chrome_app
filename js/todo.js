const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let todos = [];

function deleteTodo(e){
    const li = e.target.parentElement;
    todos = todos.filter((t)=> t.id !== parseInt(li.id));
    li.remove();
    savingTodo();
}

function savingTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodo.id;
    span.innerText = newTodo.content;
    button.innerText = "✖"
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = {id:Date.now() , content:todoInput.value};
    todos.push(newTodo);
    todoInput.value = '';
    paintTodo(newTodo);
    savingTodo();
}

const savingTodos = localStorage.getItem(TODOS_KEY);
if(savingTodos){
    todos = JSON.parse(savingTodos);
    todos.forEach(paintTodo);
}
todoForm.addEventListener("submit", handleToDoSubmit);