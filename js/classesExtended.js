

//class daclaration


console.log("welcome to javascript lession of classes");


class Engineer{

    constructor(name,role,rating){


        this.name=name;
        this.role=role;
        this.rating=rating;

       

    }


    details=()=>{

        return `name:${this.name}\nrole:${this.role}\nrating:${this.rating} `;


    }
}

//INHERITENCE


class Developer extends Engineer{


    constructor(name,role,rating,expertise){

        super(name,role,rating);
        this.expertise=expertise;



    }

    details=()=>{

        return `name:${this.name}\nrole:${this.role}\nrating:${this.rating}\nexpertise:${this.expertise}`;


    }




}



const e1=new Engineer("akash","senior developer",1);

console.log(e1.details());

console.log(e1);


const d1 = new Developer("akash","developer",1,"ui/ux design");

console.log(d1.details());

console.log(d1);