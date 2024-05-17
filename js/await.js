


fetchdata=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
        resolve("user data success")},5000)
   

});


 getUserdata=async()=>{

    try{

        const d= await fetchdata();
        console.log(`data after fetch is ${d}`);
       

    }catch(e){
        console.log(`oopsy`,e);
        return e;
    }


 }


 getUserdata()
 .then((m)=>{console.log(`success was ${m}`)}).catch((m)=>{console.log(`error was ${m}`)});

 console.log("dont have to waait we can work freeely here");