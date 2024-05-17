const callbackhell=(logic)=>{

    return new Promise((resolve)=>{

        setTimeout(()=>{
            const msg=`inside callback hell function`
            logic(msg);
            resolve("callback hell resolved");
        },2000);

    })

    
}


const genuisLogic =(data)=>new Promise((resolve,reject)=>{

    setTimeout(()=>{

        const msg=`processed ${data} inside genius logic function`;

        resolve("genius logic resolved");

    },2000);


});


const animeLogic = (data)=>new Promise((resolve,reject)=>


{
    setTimeout(()=>{

        const msg=`processed ${data} inside anime logic function`;

        resolve("anime logic resolved");

    },1500);
}

    


);


const sampleLogic=(d)=>{console.log(`gotcha your data ${d}`);}




callbackhell(sampleLogic).then((message)=>
{
    genuisLogic(message).then((message)=>{

        console.log(message);
        animeLogic(message).then((m=>{
            console.log(`finaly recieved message ${m}`);
        }))
    })
});
