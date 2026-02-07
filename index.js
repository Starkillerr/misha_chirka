'use strict';
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const close = document.getElementById('close');

burger.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.add('active');
  document.documentElement.classList.add('menu-open');
});

close.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.remove('active');
  document.documentElement.classList.remove('menu-open');
});

const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const cartClose = document.getElementById("cartClose");

cartBtn.addEventListener("click", () => {
    cartPopup.style.display = "flex"; // показать корзину
});

cartClose.addEventListener("click", () => {
    cartPopup.style.display = "none"; // закрыть
});

cartPopup.addEventListener("click", (e) => {
    if(e.target === cartPopup) {
        cartPopup.style.display = "none"; // закрытие при клике на фон
    }
});
