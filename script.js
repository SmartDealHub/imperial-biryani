// =====================================
// Imperial Biryani - script.js
// =====================================

// Page Loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Imperial Biryani!");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Active Navigation
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(){
        links.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Button Animation
document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// Card Animation
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 12px 25px rgba(0,0,0,0.25)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
    });

});

// Contact Form
const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

}

// Footer Year
const footer = document.querySelector("footer p");

if(footer){
    footer.innerHTML =
    "&copy; " + new Date().getFullYear() +
    " Imperial Biryani. All Rights Reserved.";
}
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{
    navbar.classList.toggle("active");
});

}
