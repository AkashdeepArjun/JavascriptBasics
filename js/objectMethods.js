

//way 1 OUTSIDE THE OBJECT

function perform(){

    console.log(`hi mr ${developer.name}
        there is lot of opportunity coming towards you`);
}

const developer={

    name:"akashdeep",
    role:"fullstack developer",
    perform,

};

console.log(developer.perform());



//WAY 2 INSIDE THE OBJECT

const uiDesigner ={

name:"Akashdeep Wadhwa",
role:"UI/UX designer",

skills_rating:function (){

    return ` name:${uiDesigner.name}\nrole:${uiDesigner.role}\n backend skills:8/10\n frontend skills:6/10`;

}
};

console.log("creating method inside object");

console.log(uiDesigner.skills_rating());
