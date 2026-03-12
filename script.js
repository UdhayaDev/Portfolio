new Swiper('.swiper',{
loop:true,
autoplay:{
delay:2500,
},
slidesPerView:1
});

function toggleDesc(card){

let desc = card.querySelector(".project-desc")

desc.classList.toggle("show")

}