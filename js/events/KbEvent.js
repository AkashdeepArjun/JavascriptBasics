console.log('welcome to keyboard event classd');


const ip =document.querySelector('input');

const es=document.querySelectorAll('.signal');

// ip.addEventListener("keypress",(e)=>{

//     es[0].classList.toggle("kp");
//     if(es[0].classList.contains("kp")){
//     es[1].classList.remove("kr");

//     }
//     // es[2].classList.remove("kp");

// });


// ip.addEventListener("keyup",(e)=>{

//         es[1].classList.add("kr")


// });

// ip.addEventListener("keydown",(e)=>{

//     es[2].classList.add("kp");

// });


ip.addEventListener("keypress",(e)=>{

es[3].textContent=`shift press:${e.shiftKey}`;

})