const mysymbol=Symbol("foo");

console.log(typeof mysymbol);


const obj={};

obj[mysymbol]="lol";


console.log(obj);

const marvelHero={
name:"deadpool",
rating:10,
speciality:"immortal"

}

for(let k in marvelHero ){console.log(`key is ${k}`);}
