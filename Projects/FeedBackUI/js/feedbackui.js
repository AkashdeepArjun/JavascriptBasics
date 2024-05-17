console.log("welcome to feedback ui");

const ratings=document.querySelectorAll(".rating");


const ratings_container=document.querySelector(".rating-container");


const submit_button=document.querySelector(".submit");


const panel=document.querySelector("#panel");

let selected="Happy";

ratings_container.addEventListener("click",(e)=>{

    if(e.target.parentNode.classList.contains("rating")){


        removeActive();
        e.target.parentNode.classList.add("active");
        selected=e.target.nextElementSibling.innerHTML;



    }

 


});

submit_button.addEventListener("click",()=>{


    panel.innerHTML=`
        <p class="heart">💓</p>
        <strong>thank you</strong>
        <br>
        <strong>feedback:${selected}</strong>

    `
});

const removeActive =()=>{
    for(let i=0;i<ratings.length;i++){
        ratings[i].classList.remove("active");
    }
}