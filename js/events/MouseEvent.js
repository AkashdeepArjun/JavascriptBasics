console.log("lol you are welcome");


// const redBox=document.querySelector('.red');
// const yellowBox=document.querySelector('.yellow');
// const greenBox=document.querySelector('.choclate');
// const pinkBox=document.querySelector('.pink');
// const aquaBox=document.querySelector('.aqua');
// const choclateBox=document.querySelector('.choclate');

const boxes =document.querySelectorAll('.item');

for(let box of  boxes ){
        box.addEventListener("click",(e)=>{
            box.classList.toggle("default");
            // console.log("box was clicked!!");
        });
        
}


for(let b of boxes){

    b.addEventListener("contextmenu",()=>{
        b.classList.toggle("rc");
        console.log("right mouse click was used");
    });


}


for(let b of boxes){

    b.addEventListener("dblclick",(e)=>{

        b.classList.toggle("dc");
        console.log("double clicked");

    });



}

for(let b of boxes){

    b.addEventListener("mousedown",(e)=>{

        b.classList.toggle("md");
    });


}


for(let b of boxes){

    b.addEventListener("mouseenter",(e)=>{

        b.classList.toggle("me");

    });


}



for(let b of boxes){

    b.addEventListener("mouseleave",(e)=>{

        b.classList.toggle("rc");

    });


}




for(let b of boxes){

    b.addEventListener("mousemove",(e)=>{

        b.textContent="lol";

    });


}


const div_mouse=document.querySelector('.mouse');


for(let b of boxes){

    b.addEventListener("mouseout",(e)=>{

                div_mouse.classList.toggle("mo")   ;     

    });


}

for(let box of boxes){

box.addEventListener("mouseover",(e)=>{
box.classList.toggle("mo");

});


}


for(let box of boxes){

        box.addEventListener("mouseup",(e)=>{
            
            box.classList.toggle("mu");
                
        });

}

