'use strict';

// navbar toggle in mobile
const /* {node elment} */ $navbar = document.querySelector("[data-navbar]");
const /* {node elment} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));          

const /* {node elment} */ $header = document.querySelector("[data-header]"); 



// header scroll state
window.addEventListener("scroll", e => {
    $header.classList.toggle("active", window.scrollY > 50);
});



// add to favorite button toggle
const /* {nodelist} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});

