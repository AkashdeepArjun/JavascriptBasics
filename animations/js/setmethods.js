gsap.set(".box",{
opacity:0,
background:"yellow"

})


gsap.to(".box",{
    opacity:1,
    background:"blue",
    duration:1,
    y:100,
    yoyo:true,
    repeat:-1
    
    })