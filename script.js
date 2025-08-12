// Typing Effect
const typingElement = document.getElementById("typing");
const texts = ["Web Developer", "CSE(AI) Student", "Problem Solver", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    currentText = texts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Mobile Menu Toggle
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}
