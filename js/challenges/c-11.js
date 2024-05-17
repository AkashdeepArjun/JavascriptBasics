
const favSingers=["chainsmokers","lady gaga","atif aslam"];

console.log("my favourite singers are \n:",favSingers);

console.log("my first fav singer is ",favSingers[0]);

const favNumber=[108,786,2,5];

const info=["akash",31,favSingers,favNumber];
info.forEach((item, index) => {
    console.log(`mixed array item at ${index} is ${item}`);
});
