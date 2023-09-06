const menuItem = document.getElementById('menuitem');
menuItem.style.maxHeight = '0px';

function menuToggle() {
    if (menuItem.style.maxHeight == '0px') {
        menuItem.style.maxHeight = '200px';
    } else {
        menuItem.style.maxHeight = '00px';
    }
}

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const sobre = document.querySelector('.sobre');
const galeria = document.querySelector('.galeria');
const depoimentos = document.querySelector('.depoimentos');
const servicos = document.querySelector('.servicos');

sobre.addEventListener('click', function() {
    window.scrollTo(0, 1200);
});
galeria.addEventListener('click', function() {
    window.scrollTo(0, 2100);
});
depoimentos.addEventListener('click', function() {
    window.scrollTo(0, 4000);
});
servicos.addEventListener('click', function() {
    window.scrollTo(0, 800);
});