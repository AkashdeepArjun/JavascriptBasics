const heros=["deadpool","batman","ironman","superman","soldier boy"];


const newHeros=heros.map(item=>item=="deadpool"?item+" cool":item+" lol");

console.log(`new array is ${newHeros}`);



//application of mapfunction

const marvel_shows=[
    {name:"loki",
    seasons:2,
    episodes:16
},
    {
        name:"moon knight",
        seasons:1,
        episodes:8
    },

    {
        name:"captain america",
        seasons:1,
        episodes:11


    }

]

const shows=marvel_shows.map((show)=>{
return  [show.name,show.seasons];
}
);

console.log(shows);
