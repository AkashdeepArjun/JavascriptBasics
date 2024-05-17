let myset=new Set();

console.log(myset);


console.log('initializing set with array numbers');


const init_values=[1,2,2,2,2,3,3,3,4,4,4,3,3,3,3,9,9,9,108];
myset=new Set(init_values);

console.log(myset);

console.log('initializing set with string');

const str="ddeeababaaa";

myset=new Set(str);

console.log(myset);


console.log("testing insertion in sets");
myset= new Set();

myset.add("potato");
myset.add("potato");

console.log(myset);



console.log("testing if set have certain element");

console.log(`${myset.has("potato")}`);

myset.add("tomato");

myset.add("mommos");

console.log(`orignal set is \n`,myset);

console.log("lets test out deletion");

myset.delete("tomato");

console.log("modified set is \n",myset);

console.log("lets wipe out the set");

myset.clear();

console.log("set is \n",myset);

myset.add(["deadpool","superman","batman"]);

for(let item of myset){console.log(`item is ${item}\n`);}

console.log(myset);
