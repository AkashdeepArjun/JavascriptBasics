console.log("welcome to color interchange project mr akashdeep wadhwa");


const buttons=document.querySelectorAll('.btn');

const body = document.body;


buttons.forEach(b=>{
    b.addEventListener("click",()=>{

        bgValue=b.value;
        changeBg(bgValue);

    });
});


const changeBg=(bgValue)=>{
    body.classList="";
    switch(bgValue){
        
        case "purple":
            body.classList.add(bgValue);
            break;

        case "blue":
            body.classList.add(bgValue);
            break;

        case "red":
            body.classList.add(bgValue);
            break;

        case "green":
            body.classList.add(bgValue);
            break;

        default:
            break;


    }

}