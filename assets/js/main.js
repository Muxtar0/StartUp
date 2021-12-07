const hamburger_icon = document.querySelector('.hamburger--collapse');
const mobile_open_menu = document.querySelector('.mobile_open_menu');
const header = document.getElementById('header');

hamburger_icon.addEventListener('click' , (e) => {
    hamburger_icon.classList.toggle('is-active');
    mobile_open_menu.classList.toggle('active')
    header.classList.toggle('active')
})
