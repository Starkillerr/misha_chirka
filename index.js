'use strict';
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const close = document.getElementById('close');
const overlay = document.getElementById("overlay");

burger.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.add('active');
  document.documentElement.classList.add('menu-open');
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

close.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.remove('active');
  overlay.classList.remove("active");
  document.documentElement.classList.remove('menu-open');
});

const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const cartClose = document.getElementById("cartClose");

cartBtn.addEventListener("click", () => {
    cartPopup.style.display = "flex";  
});

cartClose.addEventListener("click", () => {
    cartPopup.style.display = "none";  
});

cartPopup.addEventListener("click", (e) => {
    if(e.target === cartPopup) {
        cartPopup.style.display = "none";  
    }
});
