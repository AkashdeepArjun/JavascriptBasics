
    //way-1
let developer ={


    testSkills:function(){
        return `name:${this.name}\ndesignation:${this.designation}\ncodeChefRating:${this.codeChefRating}`
    }



}




const akash = Object.create(developer);

akash.name="Akashdeep Wadhwa";
akash.designation="Software Engineer";
akash.codeChefRating=5;

console.log(akash.testSkills());



//way-2

let designer={


    skills:function(){

        return `name:${this.name}\nrole:${this.role}`;
    }

}

const fresher = Object.create(designer,{

    name:{value:"akash"},
    role:{value:"UI/UX designer"}

})


console.log(fresher.skills());