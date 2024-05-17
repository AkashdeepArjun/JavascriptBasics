


function Engineer(name,rating){

    this.name=name;
    this.rating=rating;


}

Engineer.prototype.design=()=>{


return `criticle thinking and logical mindset with solution oriented approach`;

}



function SoftwareDeveloper(name,rating,skills){

    Engineer.call(this,name,rating);
    this.skills=skills;



}

SoftwareDeveloper.prototype = Object.create(Engineer.prototype);
const d1=new SoftwareDeveloper("akash",1,"UI/UX design full stack development");

console.log(d1);



console.log(d1.design());