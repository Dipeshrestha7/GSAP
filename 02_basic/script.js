var initialPath = `M 10 100 Q 250 100 490 100`

var finalPath = `M 10 100 Q 250 100 490 100` 


main = document.querySelector("#main")


main.addEventListener("mousemove", (dets)=>{
    path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

main.addEventListener("mouseleave", (dets)=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})