

let timer =15;


    //set interval runs indefinetely
const timerId=setInterval(()=>{

    console.log("time left",timer);
    timer--;

},1000);


setTimeout(()=>{

clearInterval(timerId);
console.log("time is up jackass!!");
},16000);
