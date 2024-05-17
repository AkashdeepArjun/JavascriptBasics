


const getUserInfoDb =(name,dbcallback)=>new Promise((resolve,reject)=>{

    setTimeout(()=>{

        console.log('fetching userinfo');
        const userinfo=dbcallback(name);
        if(userinfo!=null){
            resolve(userinfo);
        }else{
            reject(' CANT FETCH INFO either user is invalid or user does not exist');
        }

    },10000);



});

const getUserHobbies=(name,callback)=>new Promise((resolve,reject)=>{

    setTimeout(()=>{

        console.log('fetching userhobbies');
        const userhobbyinfo=callback(name);
        if(userhobbyinfo!=null){
            resolve(userhobbyinfo);
        }else{
            reject(' CANT FETCH HOBBIESeither user is invalid or user does not exist');
        }

    },2000);



});


const userinfo=(name)=>name=="akash"?"woah its akash info":null;

const userhobbies=(name)=>name=="akash"?["code","music","game"]:null;



getUserInfoDb("akash",userinfo).then((m)=>{
    console.log(`USER INFO:${m}`);
}).catch((r)=>{
    console.log(`ERROR:${r}`);
})


getUserHobbies("AKASH",userhobbies).then((m)=>{

    console.log(`USER HOBBIES:${m}`);
}).catch((e)=>{

    console.log(`ERROR:${e}`);

})