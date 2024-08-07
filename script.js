const shareBtn = document.querySelector("#share-button");
const authorContainer = document.querySelector(".author");
const socialLinks = document.querySelector(".social-links");


shareBtn.addEventListener("click",()=>{
    if(window.innerWidth <=375){
        authorContainer.classList.toggle("hidden");
    }
    else{
        socialLinks.classList.toggle("desktop-shadow");
    }
    socialLinks.classList.toggle("hidden");
});