
const heros= [
    {
        name:"deadpool",
        rating:10,
        universe:"marvel"

    },

    {
        name:"spiderman",
        rating:8,
        universe:"marvel"
    },
    {
        name:"batman",
        rating:9,
        universe:"dc"
    },
    {
        name:"flash",
        rating:7,
        universe:"dc"
    },{

        name:"scar predator",
        rating:10,
        universe:"Predators And Aliens"

    },{
        name:"praetorian",
        rating:10,
        universe:"Predators And Aliens"


    }

];

        //EVERY METHOD
const allGood=heros.every((hero)=>hero.rating>=10);
console.log(`status is ${allGood}`);


const atleastGood=heros.some((hero)=> hero.rating==7);
console.log(`status is ${atleastGood}`);
