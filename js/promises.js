//PROMISES HAVE 3 STATES INITIAL,COMPLETED,FAILED

//RESOLVED => .THEN.FINALLY

//REJECTED => .THEN.CATCH.FINALLY

//SYNTAX NEW PROMISE((resolve,reject)=>{

// })


const logic =(n)=>new Promise((resolve,reject)=>{

    n%2==0?resolve(`even number ${n} accepted`):reject(`${n} turns out to be odd`);

});







    logic(3).then(
        (message)=>console.log(`message recieved:${message}`)
        ).catch((msg)=>console.log(`oopsy got error message:${msg}`))
        
    
logic(37).then(
    (message)=>console.log(`message recieved:${message}`)
    ).catch((msg)=>console.log(`oopsy got error message:${msg}`))



    logic(4).then(
        (message)=>console.log(`message recieved:${message}`)
        ).catch((msg)=>console.log(`oopsy got error message:${msg}`))