console.log("javascript load success!!");




gsap.set(".box",{

borderRadius:0,

})



gsap.to(".box",{
borderRadius:150,
duration:1,
y:-200,
ease:"power1",
repeat:-1,
yoyo:true,
stagger:{
    amount:4,
    // each:0.5,
    from:2
}

})