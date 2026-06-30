// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,.9)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        nav.style.background = "rgba(0,0,0,.45)";
        nav.style.boxShadow = "none";
    }
});

// Cards Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=".8s";
    observer.observe(card);
});

// Smooth Buttons
document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("mouseenter",()=>{
        link.style.transform="scale(1.05)";
    });

    link.addEventListener("mouseleave",()=>{
        link.style.transform="scale(1)";
    });
});
// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach((element)=>{

const windowHeight = window.innerHeight;

const revealTop = element.getBoundingClientRect().top;

const revealPoint = 120;

if(revealTop < windowHeight - revealPoint){

element.classList.add("active");

}

});

});
