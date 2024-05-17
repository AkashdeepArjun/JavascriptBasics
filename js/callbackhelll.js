

const mycallbackhell = (callback)=>{setTimeout(()=>{

    const msg="inside callback hell"
    console.log(msg);
    callback(msg);
},2000);}



const firstLogic=(data,callback)=>{

    setTimeout(()=>{

        const processed=`processed data ${data}`
        console.log('inside first logic');
        callback(processed);
    },1000);


}

const mypersonalcallback = (data)=>{

    console.log(`callback called with ${data}`);
}

const secondLogic=(data,callback)=>{
    setTimeout(()=>{ const processed=`processed data ${data}`
    console.log('inside second logic');
    callback(processed)},1500
   );


}


mycallbackhell(mypersonalcallback);
firstLogic(2,mypersonalcallback);
secondLogic(3,mypersonalcallback);


//CALLBACKS ARE NOT ALWAYA ASYNCHRONOUS 

// Array.array.forEach(element => {
    // SEQUENTIAL CALLBACK
// });

