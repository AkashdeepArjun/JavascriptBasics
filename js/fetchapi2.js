class Todo{
    
    constructor(user_id,id,title,completed){
    this.user_id=user_id;
    this.id=id;
    this.title=title;
    this.completed=completed;
    }

    getUserId=()=>this.user_id;
    getId =()=>this.id;
    getTitle=()=>this.title;
    getStatus=()=>this.completed;

}


getTodoList=()=>fetch("https://jsonplaceholder.typicode.com/todos");

let mytasks=[]

getMyTodos= async()=>{
    let todos_task=null;
    try{
        
        const d= await getTodoList()
        if(!d.ok) throw Error(d.statusText)
        todos_task=d.json();
       
    
    }catch(e){
        console.log(e);
     todos_task=null;
    }

    return todos_task;
}

const output=document.querySelector('.output');


getMyTodos().then((p)=>{

p.forEach(element => {
    

    const item =todoUI(element);

    output.appendChild(item);




});


});


const todoUI =(item)=>{

    const  parent = document.createElement("div");
    parent.style.backgroundColor=item.completed?"green":"#343a72";
    parent.classList.add("todo");
    const user_id_ui=document.createElement("p");
    const id_ui=document.createElement("p");
    const title_ui=document.createElement("p");
    const completed_ui=document.createElement("p");

    user_id_ui.textContent="User id:"+item.userId;
    id_ui.textContent="id: "+item.id;
    title_ui.textContent=" name:"+item.title;
    completed_ui.textContent="iscompleted:"+item.completed;

    parent.appendChild(user_id_ui);
    parent.appendChild(id_ui);
    parent.appendChild(title_ui);
    parent.appendChild(completed_ui);

    return parent;
}


// console.log(todos);

console.log("extra work is going on")


