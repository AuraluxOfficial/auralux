// شاشة التحميل
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.display = "none";
        }
    }, 1000);
});

// تغيير لون شريط التنقل عند النزول
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,.95)";
    } else {
        nav.style.background = "rgba(0,0,0,.75)";
    }
});

// تأثير ظهور الأقسام
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);
});
