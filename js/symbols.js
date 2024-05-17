const mysymbol=Symbol("my custom symbol");

console.log(mysymbol);

const symbol1=Symbol("akash");

const symbol2=Symbol("akash");

console.log(`symbols equal:${symbol1===symbol2}`);

const obj={};

obj.age=31;
obj[symbol1]="potato";
obj[symbol2]="tomato";


console.log(obj);
