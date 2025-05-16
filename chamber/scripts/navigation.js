const hamburgerElement = document.querySelector('#menuButton');
const navElement = document.querySelector('#animated');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})


document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.menuLinks a');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});