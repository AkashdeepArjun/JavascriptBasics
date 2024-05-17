


const form =document.querySelector('form');
const input =document.querySelector('input');

const todos =document.querySelector('.todos');



const getTodo=(balue)=>{
    let todo=document.createElement("div");
    let text=document.createElement("span");


    text.innerHTML=balue;

    todo.appendChild(text);

    let closeEl=document.createElement('span');

    closeEl.innerHTML="&times;"
    closeEl.classList.add("delete");

    closeEl.addEventListener("click",(e)=>{
        todos.removeChild(todo);

    })


    todo.appendChild(closeEl);

    todo.classList.add("todo");
    return todo;
}


form.addEventListener("submit",(e)=>{
e.preventDefault();

let balu =input.value;

if(!balu.trim()) return;
    todos.appendChild(getTodo(balu));
    input.value="";

})