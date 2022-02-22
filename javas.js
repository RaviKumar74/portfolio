burger = document.querySelector(".burger");
navbar = document.querySelector(".nav-main");
navlogo = document.querySelector(".logo");
navul = document.querySelector(".navul")
// below are for skills 
viewskills = document.querySelector(".viewskills")
hiddenitems = document.querySelector(".grid-container1")
mainskills = document.querySelector(".grid-container")




burger.addEventListener('click',()=>{
    navbar.classList.toggle("h-nav-resp");
    navlogo.classList.toggle("v-class-resp");
    navul.classList.toggle("v-class-resp");

})
viewskills.addEventListener('click',()=>{
    hiddenitems.classList.toggle("item-hidden");
    if(viewskills.innerHTML=="View Less"){
        viewskills.innerHTML="View More Skills";
        mainskills.classList.toggle("item-hiddenon");

    }
    else{
        mainskills.classList.toggle("item-hiddenon");

        viewskills.innerHTML="View Less";
    }
})
