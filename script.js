const menu = document.getElementById('menu');
const closed = document.getElementById('closed');

menu.addEventListener('click', function() {
    next.classList.add('open');
});

closed.addEventListener('click', function() {
    next.classList.remove('open');
});