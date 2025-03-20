function toggleMenu() { var menu = document.getElementById("sideMenu"); var backdrop = document.getElementById("menuBackdrop"); if (menu && backdrop) { menu.classList.toggle("active"); backdrop.classList.toggle("active"); } } function closeMenu() { var menu = document.getElementById("sideMenu"); var backdrop = document.getElementById("menuBackdrop"); if (menu && backdrop) { menu.classList.remove("active"); backdrop.classList.remove("active"); } } // Handle internal links (Home and Community) with smooth scrolling document.querySelectorAll('.menu a[href^="#"]').forEach(link => { link.addEventListener('click', function(e) { e.preventDefault(); var target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } closeMenu(); // Already called via onclick, but kept here for consistency }); }); // External links use onclick="closeMenu()" in HTML to close the menu