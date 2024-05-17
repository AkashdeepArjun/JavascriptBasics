function user(name,age,skills){

    return {
        name,
        age,
        skills,
        intro:()=>{console.log(`my name is ${name} and i am a ${skills}`);}
    };


}

const akash=user("akash",31,"full stack developer");
console.log(akash.intro());
