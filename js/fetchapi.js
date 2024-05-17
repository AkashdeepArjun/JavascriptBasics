
// console.log(fetch("/sampleData/data.json"));

const div_output = document.querySelector('div');

const getMyData = async ()=>{

    try{
    const d = await fetch("/sampleData/data.json");

    if(!d.ok) throw Error(d.statusText);

    console.log(("data fetch succes"));
    const t= await d.json();
    div_output.textContent=t.name;
    console.log(t);

    }catch(e){
        console.log(`lolwa`+e);
    }
}
console.log("main thread starts here ");
getMyData().then((m)=>{console.log(`success!! ${m}`)}).catch((f)=>{console.log`failed:${f}`})
console.log("main thread ends here ");