/*codigo para guardar entre botones el div*/

var btnMenu = document.getElementById('btn-icono');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', function() {
    nav.classList.toggle('mostrar');
})