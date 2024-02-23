const switcher = document.querySelector('.switcher');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger_menu');
const navMenu = document.querySelector('.header nav');
const accountBtn = document.querySelector('.account_btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');
const loginForm = document.querySelector('.login_form');

switcher.addEventListener('click', () => {
  switcher.classList.toggle('fa-toggle-off');
  switcher.classList.toggle('fa-toggle-on');
  header.classList.toggle('dark_mode');
});

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active')
});

accountBtn.addEventListener('click', () => {
  popup.classList.add('opened')
});


popupClose.addEventListener('click', () => {
  popup.classList.remove('opened')
})
//------------------------------
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('login');
})

let input1 = document.createElement('input');

let input2 = document.createElement('input');