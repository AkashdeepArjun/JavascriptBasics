

const professions =['clerk','comedian'];


const [o1,o2]=professions;
// console.log(o3);
// console.log(o4);
let a,b;
[a=1,b=2]=[6,3];
console.log(b);

console.clear();

const f=()=>[1,2];
let x,y;
[x,y] = f();
console.log("x is",x);
console.log("y is ",y);


console.clear();

const g=()=>[1,0,8];
let [t, ,u] =g();
console.log(t);
console.log(u);


console.clear();

const magic=()=>[108,786,364,5393];

let [p,...q]=magic();

console.log("p is ",p);
console.log("q is ",q);
