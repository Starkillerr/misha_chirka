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