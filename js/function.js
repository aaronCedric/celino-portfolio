const line = document.querySelectorAll('.line');
const smallNav = document.querySelector('.small-nav-icon');
const phoneMenu = document.querySelector('.phone-menu');
const body = document.body;

let showMenu = false;


const toggleMenu = () => {
    if (!showMenu) {
        smallNav.classList.add('close');
        phoneMenu.classList.add('show');
        line.forEach(item => item.classList.add('show'));
        body.style.overflowY = 'hidden';
        showMenu = true;
    } else {
        smallNav.classList.remove('close');
        phoneMenu.classList.remove('show');
        line.forEach(item => item.classList.remove('show'));
        body.style.overflowY = 'auto';
        showMenu = false;
    }
}

smallNav.addEventListener('click', toggleMenu);

