// شاشة التحميل
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1500);
});

// تغيير خلفية شريط التنقل عند النزول
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.style.background = "rgba(0,0,0,.9)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";

    }else{

        nav.style.background = "rgba(0,0,0,.45)";
        nav.style.boxShadow = "none";

    }

});

// تأثير ظهور العناصر
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

document.querySelectorAll(".content").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition="1s";

observer.observe(el);

});

// تأثير زر الواتساب
const btn = document.querySelector(".btn");

setInterval(()=>{

btn.animate([
{transform:"scale(1)"},
{transform:"scale(1.05)"},
{transform:"scale(1)"}
],{

duration:1500

});

},2500);

// تغيير عنوان الصفحة عند مغادرتها
document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="👑 AURA LUX";

}else{

document.title="AURA LUX | Luxury Perfumes";

}

});

// رسالة في Console
console.log("%cAURA LUX","color:gold;font-size:40px;font-weight:bold;");
console.log("Luxury Inspired Perfumes");
