
const getme4=(a,b,c,d)=>{

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

}
const colors=["red","pink","blue","green"];

getme4(...colors);      // spreads array into parameters

//APPLICATION OF SPREAD OPERATOR

const colors2=["magenta","yellow","skyblue","cyan"];

const combined =[...colors,...colors2];

console.log("combined array is ",combined);


console.log("potato",...colors2);


// console.clear();

const frontend={language:"css/html"};
const backend={languages:"js/mongodb"};

const fullstack={...frontend,...backend};

console.log("combined object is ",fullstack);
