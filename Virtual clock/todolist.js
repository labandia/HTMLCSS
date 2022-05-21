const todoInput = document.querySelector(".todoinput");
const todobutton = document.querySelector(".todobutton");
const todolist = document.querySelector(".todolist__list");

//EVENT LISTENER
document.addEventListener('DOMContentLoaded', getlocaltodos);
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletetodo);


function addtodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);
    //ADD TODO TO LOCALSTORAGE
    savelocaltodos(todoInput.value)

    //CHECK MARK BUTTON
    const completebutton = document.createElement('button');
    completebutton.innerHTML = '<i class="fa fa-check"></i>';
    completebutton.classList.add("complete-btn");
    todoDiv.appendChild(completebutton);

     //CHECK MARK BUTTON
     const deletebutton = document.createElement('button');
     deletebutton.innerHTML = '<i class="fa fa-trash"></i>';
     deletebutton.classList.add("trash-btn");
     todoDiv.appendChild(deletebutton);

     //APPEND TO LIST
     todolist.appendChild(todoDiv);

     //Clear todoinput value
     todoInput.value = "";
}

function deletetodo(e){
    const item = e.target;

    if(item.classList[0] == "trash-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        removelocaltodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function savelocaltodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getlocaltodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(element => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    
        const newTodo = document.createElement('li');
        newTodo.innerText = element;
        newTodo.classList.add('todo-item');
    
        todoDiv.appendChild(newTodo);

    
        //CHECK MARK BUTTON
        const completebutton = document.createElement('button');
        completebutton.innerHTML = '<i class="fa fa-check"></i>';
        completebutton.classList.add("complete-btn");
        todoDiv.appendChild(completebutton);
    
         //CHECK MARK BUTTON
         const deletebutton = document.createElement('button');
         deletebutton.innerHTML = '<i class="fa fa-trash"></i>';
         deletebutton.classList.add("trash-btn");
         todoDiv.appendChild(deletebutton);
    
         //APPEND TO LIST
         todolist.appendChild(todoDiv);
    });
}


function removelocaltodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}