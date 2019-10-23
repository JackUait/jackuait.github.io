let nav__icon = document.querySelector('.nav__icon');
let nav__list = document.querySelector('.nav__list');

nav__icon.addEventListener('click', function(event) {
    nav__list.classList.toggle('nav__list_is-opened');
});