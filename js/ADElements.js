console.log(`welcome akashdeep wadhwa`);

const body=document.querySelector("body");
//creating element
const s1=document.createElement("section");
s1.textContent="first section is created";
s1.classList.add("customSection");
// body.appendChild(s1);
console.log(s1.textContent);

//insert before demo

const list =document.querySelector('ul');
const newListItem=document.createElement('li');
newListItem.innerText="45";
newListItem.classList.add(".bigger");
const first_item=document.querySelector('li');

list.insertBefore(newListItem,first_item);


const firstP=document.querySelector("p");

const i=document.createElement("i");
i.innerText="lol look what i did";
i.style.color="pink";

// firstP.insertAdjacentElement("afterend",i);

const s=document.querySelector("section");

const h4=document.createElement("h4");

h4.textContent="lol this is h4 heading";

s.append(h4,i);

const ff=document.querySelector('.bigger');

list.remove();
