// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"100%",
//     repeat:"-1",
//     yoyo:true
// })

// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"0%",
//     repeat:"-1",
//     yoyo:true
// })

// gsap.from("h1",{
//     opacity:0,
//     color:"red",
//     duraation:5,
//     delay:1,
//     stagger:0.3,
// })


var tl = gsap.timeline()

tl.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"100%",
})

tl.to("#box2",{
    x:1000,
    duration:2,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"0%",
})