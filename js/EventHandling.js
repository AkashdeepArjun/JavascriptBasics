console.log('welcome akashdeep!!!!');


console.log('another bad way is assigning logic yo onclick propoerty ');

const button_bad=document.querySelector('.bad');

const b=button_bad.nextElementSibling;


b.onclick=()=>{
    alert('lol wtf are you doing');
}

console.log('best way to write event handling logic is');


const good_button=document.querySelector('.good');


good_button.addEventListener("click",()=>{
    alert(" yo this was done using add event listener");
});


const p=document.querySelector('p');

p.addEventListener("click",(event)=>{

    console.log(event);
});

const ip=document.querySelector("form");
ip.addEventListener("submit",(event)=>{
    event.preventDefault();
    p.innerText="lol you submitted button!!";
});
