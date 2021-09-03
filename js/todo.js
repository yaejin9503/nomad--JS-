const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input"); 
const toDoList = document.getElementById("todo-list"); 

const TODOS_KEY = "todos"; 

const data = localStorage.getItem(TODOS_KEY); 
let toDos = data ? JSON.parse(data) : [];  

function saveToDos(){   
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function paintToDo(newTodo){
    const $li = document.createElement("li"); 
    $li.id = newTodo.id;

    const $span = document.createElement("span"); 
    const $button = document.createElement("button"); 

    $span.innerText = newTodo.text; 
    $button.innerText = "x"; 

    $button.addEventListener("click", function(e){
        const li =  e.target.parentElement; 
        console.log(li.id); 
        let newData = toDos.filter(item => item.id !== parseInt(li.id)); 
        localStorage.setItem(TODOS_KEY, JSON.stringify(newData)); 
        li.remove(); 
    })

    $li.appendChild($span); 
    $li.appendChild($button);

    toDoList.appendChild($li); 
}


function handleToDoSubmit(event){ 
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";

    const newTodoObj = { 
        text: newTodo, 
        id: Date.now()
    }; 
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); 
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

if(data !== null){ 
    const parseTodos = JSON.parse(data); 
    parseTodos.forEach(element => {
        paintToDo(element);
    });
}