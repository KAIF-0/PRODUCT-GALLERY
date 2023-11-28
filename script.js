let scrollConatiner = document.querySelector(".content4")
let backBtn = document.getElementById("backward")
let forBtn = document.getElementById("forward")
let nike = document.getElementById("main-head")


backBtn.addEventListener("click", (e)=>{
    scrollConatiner.scrollLeft -= 400;
})

forBtn.addEventListener("click", (e)=>{
    scrollConatiner.scrollLeft += 400;
})


nike.addEventListener("mouseover" , ()=>{
    let hover = nike.nextElementSibling.style
    hover.width = "230px";
    hover.transition = "all 0.3s"
})

nike.addEventListener("mouseout" , ()=>{
    let hover = nike.nextElementSibling.style
    hover.width = "100px";
    hover.transition = "all 0.3s"
})

