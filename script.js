// Certificate slider
new Swiper('.swiper',{
loop:true,
autoplay:{
delay:2500,
},
slidesPerView:1
});

// Project description toggle

function toggleDesc(card){

// close all other project descriptions
document.querySelectorAll(".project-desc").forEach(desc=>{
desc.classList.remove("show")
})

// add blink animation
card.classList.add("blink")

setTimeout(()=>{
card.classList.remove("blink")
},300)

// open clicked project description
let desc = card.querySelector(".project-desc")
desc.classList.toggle("show")

}