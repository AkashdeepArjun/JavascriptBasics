const m=new Map();

console.log(m);


const string_key="lolkey";

const key2={};

const key3=()=>{};

m.set(string_key," this is value of LOL");
m.set(key2,"curly braces as key");
m.set(key3,"function as a key");
console.log(m);
console.log(`size is ${m.size}`);

console.log(`deleting second key ${m.delete(key2
)}`);

console.log(m);
console.log(`size is ${m.size}`);

    console.log('\niterting map keys using for of\n');

for(let k of m.keys())
{
    console.log(`key is ${k}`);
}
console.log(`\n accessing map values using for of\n`);

for(let v of m.values()){
    console.log(`value is ${v}`);
}
