/*
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});  */

const textArray = [
    "Ph: 8851464267",
    "Online Sessions also available"
  ];


let index = 0;
let isHovered = false;
const textContainer = document.getElementById('textContainer');

function changeText() {
  if (!isHovered) {
    textContainer.innerHTML = textArray[index];
    index = (index + 1) % textArray.length;
  }
}

setInterval(changeText, 2000); // Adjust the interval (milliseconds) as needed

textContainer.addEventListener('mouseenter', function () {
  isHovered = true;
});

textContainer.addEventListener('mouseleave', function () {
  isHovered = false;
});


document.addEventListener("DOMContentLoaded", function() {
  const aboutLink = document.querySelector('a[href="#about"]');
  const servicesLink = document.querySelector('a[href="#services"]');
  const contactLink = document.querySelector('a[href="#contact"]');
  const contactbutton = document.querySelector('a[href="#button"]');
  const aboutSection = document.querySelector('.About');
  const servicesSection = document.querySelector('.services');
  const contactSection = document.querySelector('.contact-container');

  aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  servicesLink.addEventListener('click', function(event) {
    event.preventDefault();
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  });

  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });

  contactbutton.addEventListener('click', function(event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});

