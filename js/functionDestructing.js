const hero={
    name:"deadpool",
    speciality:"immortal",
    skills:"troll with kung fu",
    rating :10
};

const mymagic=({name,speciality,skills,rating})=>{

    console.log(`name:${name}\nspeciality:${speciality}\nrating:${rating}\nskills:${skills}`);

}


mymagic(hero);

console.clear();

const carrerOptions={career:"Android App development ",
skills:["java","kotlin","mongodb","firebase"]
};

const showOptions=({career,skills})=>console.log(`career is ${career} skills required ${skills}`);

showOptions(carrerOptions);


//rename

const showOPt=({career:ca,skills:[a,b,c,d,e]})=>console.log(`career is ${ca}\n skills are ${a}
    \n skills are ${b}
    \n skills are ${c}
\n skills are ${d}
\n skills are ${e}`
);

showOPt(carrerOptions);
