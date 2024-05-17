class Developer{

    constructor(name,role){
        this.name=name;
        this.role=role;
    }

    develop=()=>{throw new Error("cant use abstract call message");}

}

class WebDeveloper extends Developer{


    constructor(name,role){

        super(name,role);


    }

    develop=()=>{return `HI  mr ${this.name} you must be good at ${this.role}`}
}


const d= new WebDeveloper("akash","designer developer");
console.log(d.develop());
const e = new Developer("akashdeep","web developer");

try{
    e.develop();
}catch(e){
    console.log(e.message);
}