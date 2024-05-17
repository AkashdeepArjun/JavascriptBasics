

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

const myfavOnes=heros.filter((item)=>item.rating==10);
for(let h of myfavOnes){
    console.log(`hero is ${h.name}`);
}
