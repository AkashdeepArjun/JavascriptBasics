// from does not need specifi of initial value


// gsap.from(".box1",{
//     y:-200,
//     duration:1,
//     ease:"linear",
//     repeat:-1,
//     yoyo:true
// })
// gsap.from(".box2",{
//     y:-200,
//     duration:1,
//     ease:"linear",
//     delay:2,
//     repeat:-1,
//     yoyo:true
// })
// gsap.from(".box3",{
//     y:-200,
//     duration:1,
//     ease:"linear",
//     delay:4,
//     repeat:-1,
//     yoyo:true
// })

//fromto needs info of default and new value




gsap.fromTo(".box2",{
    y:200,
    opacity:0
},{
    opacity:1,
    y:-200,
    ease:"linear",
    duration:3,
    borderRadius:0,
    repeat:-1,
    yoyo:true


})