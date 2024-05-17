

const mylogic=(arr)=>{
    return arr.reduce((p,c)=>{return p*c;},1);
}

const test_array=[1,2,3,4,5];

const result = mylogic(test_array);

console.log(`result is ${result}`);
