let scrollConatiner = document.querySelector(".content4")
let backBtn = document.getElementById("backward")
let forBtn = document.getElementById("forward")
let nike = document.getElementById("main-head")
let popupBtn = document.getElementById("popupbtn")
let closer = document.querySelector("body")


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

popupBtn.addEventListener("click", ()=>{
    let popup = document.createElement('div')
    popup.classList.add("popup");
    popup.innerHTML = `<div id="hide" class="image"></div>
    <div class="img-content">
     <h1>NIKE<br>AIR JORDON LOW 1</h1>
     <div class="line"></div>
     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam.
     <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam.</h3>
     <h2><b>from $200</b></h2>
     <div class="button">BUY NOW</div>
    </div>`
    document.body.appendChild(popup)

})






