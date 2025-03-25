function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    var backdrop = document.getElementById("menuBackdrop");
    if (menu && backdrop) {
        menu.classList.toggle("active");
        backdrop.classList.toggle("active");
    }
}

function closeMenu() {
    var menu = document.getElementById("sideMenu");
    var backdrop = document.getElementById("menuBackdrop");
    if (menu && backdrop) {
        menu.classList.remove("active");
        backdrop.classList.remove("active");
    }
}

document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeMenu();
    });
});