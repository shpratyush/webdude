window.addEventListener('scroll', checkNavPlacement);
window.addEventListener('load', checkNavPlacement);

function checkNavPlacement() {
    var topbar = document.getElementById('navbar');
    var header = document.getElementById('headBG');
    if (window.scrollY > (header.offsetHeight - 100)) {
        topbar.classList.add('solid');
    } else {
        topbar.classList.remove('solid');
    }
}
