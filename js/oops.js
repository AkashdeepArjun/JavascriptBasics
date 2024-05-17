

console.log("welcome too oops concepts");


// console.log(this=== window);


// window.nickName="akashdeep";
// this.lastname="wadhwa";
// console.log(window);



const getWindow = ()=>this;



// console.log(getWindow());


const  developer={
name:"akash",
designation:"web developer graphic designer",
codechefRating:1087,


// getAllInfo:function(){ return `\n 
// name:${this.name}
// designation:${this.designation}
// codechefRating:${this.codechefRating}`     //

// }


getAllInfo:()=>this



}


// const fresher = developer.getAllInfo();

console.log(developer.getAllInfo());
