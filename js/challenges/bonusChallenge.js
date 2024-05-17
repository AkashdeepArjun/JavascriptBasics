
const products=[
{ name:"Redmi note 12 pro",category:"Electronics"},
{name:"Deadpool",category:"Movies"},
{name:"Hp victus ",category:"Electronics"},
{name:"javascript",category:"Coding Language"}


];

let product=products.find((item)=>item.name==="Deadpool");

console.log(`product category is ${product.category}`);
