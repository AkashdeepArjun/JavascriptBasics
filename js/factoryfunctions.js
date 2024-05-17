console.log("welcome to lession of factory methods ");



let user={

    first_name:"Akashdeep",
    last_name:"wadhwa",
    designation:"engineer",
    getInfo:function(){

        return `Hi there!! my name is ${this.first_name} 
        last name is ${this.last_name}
        and designation is ${this.designation}    
        `;


    }
                            //creating 100 users that way will make code awkwerd
}                   


//SOLUTION :factory method way


const createUser=(fname,lname,dsgn)=> {

    return {
    fname,
    lname,
    dsgn,
    details: function(){
        return `name:${this.fname} ${this.lname}\ndesignation:${this.dsgn}
        `

    }


}

}



const u1=createUser("akash","wadhwa","graphic designer");


const u2=createUser("aman","potato","full stack developer");



console.log(u1);

