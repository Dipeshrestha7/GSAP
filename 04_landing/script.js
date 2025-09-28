// var main = document.querySelector("#main")


// main.addEventListener()


var tl = gsap.timeline()

tl.from("p", {
    duration: 1,
    color:"red"
});


var container = document.querySelector("#container")
var box = document.querySelector("#ball")

container.addEventListener("mousemove", (dets) =>{
    gsap.to(box,{
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "back.out",
        opacity: 1
    })
})