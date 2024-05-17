console.log(`welcome akash`);

const li=document.querySelector('li');

console.log(li.parentElement.parentElement);


const ul=document.querySelector('ul');

console.log(ul.children);


console.log(`inner text of last element is ${ul.children[2].innerText}`);



console.log('lets talk about sibilings then ');


console.log(li.nextElementSibling.nextElementSibling.textContent);


const lastLi=document.querySelector('.special');

console.log(lastLi.textContent);

console.log('lets access previous sibling');

console.log(lastLi.previousElementSibling.textContent);
