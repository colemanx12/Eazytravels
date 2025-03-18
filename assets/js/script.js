console.log("JavaScript Loaded - Contact Page Active");

'use strict';

/**
 * Navbar toggle functionality
 */
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];
const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};
navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * Sticky header and go to top button functionality
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * Contact form validation and submission
 */
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded Successfully");

  // Check if we are on contact.html
  if (!window.location.href.includes("contact.html")) {
    console.log("Not on contact.html, skipping form script.");
    return;
  }

  const contactForm = document.getElementById("contactForm");
  if (!contactForm) {
    console.error("Contact form not found. Ensure you are on contact.html.");
    return;
  }

  console.log("Contact form found!");

  const responseMessage = document.getElementById("formResponse");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      responseMessage.textContent = "Please fill in all fields.";
      responseMessage.style.color = "red";
      return;
    }

    responseMessage.textContent = "Message sent successfully!";
    responseMessage.style.color = "green";

    setTimeout(() => {
      contactForm.reset();
      responseMessage.textContent = "";
    }, 3000);
  });
});



