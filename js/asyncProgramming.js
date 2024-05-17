
const mylogicMainThread=()=>{
    console.log(`it is running on main thread lol`);
}

console.log("start of main");
mylogicMainThread();
console.log("end of main");



console.log(" start main");
setTimeout(()=>{

    console.log("logic will execute after 2 seconds");

},2000);

console.log("back to main thread");
