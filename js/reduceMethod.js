

const arr=[1,2,3,108,4,5,6];


const sum =arr.reduce((prev,curr)=>{
    return curr*prev;
},1);

console.log(`sum is ${sum}`);


// find the highest num

const highest_num=arr.reduce((prev,curr)=>{

return (prev>=curr?prev:curr);

},-1);

console.log(`highest num is ${highest_num}`);

const superheros = ["deadpool",
"moon knight",
"spiderman",
"iron man",
"spiderman",
"iron man",
"deadpool"
];


const freq_word=superheros.reduce((freq_map,word)=>{
        freq_map[word]=freq_map[word] || 0+1;
        return freq_map;
},{});

console.log(freq_word);
