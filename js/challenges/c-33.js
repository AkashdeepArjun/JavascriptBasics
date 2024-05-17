let products=[

    
{ name:"checkers",category:"toys"},
{ name:"harry potter",category:"books"},
{ name:"iphone",category:"Electronics"},
{ name:"php",category:"books"}


];

let allProductsAreBooks=true;
let someProductsAreBooks=false;

allProductsAreBooks=products.every((p)=>p.category==="books");

someProductsAreBooks=products.some((p)=>p.category==="books");

console.log(`all products are books ${allProductsAreBooks}`);


console.log(`some products are books ${someProductsAreBooks}`);
