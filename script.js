const toggleMockupsButton = document.getElementById('toggleMockups');
const extraMockups = document.getElementById('extraMockups');
const menuToggle  = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

 // Initially show the extra mockups
    toggleMockupsButton.addEventListener('click', () => {
        if(extraMockups.hidden) {
            extraMockups.hidden = false;
            toggleMockupsButton.textContent = 'Hide Applications';
        } else {
            extraMockups.hidden = true;
            toggleMockupsButton.textContent = 'View Applications';
        }
    });

// Initially to toggle nav button
    menuToggle.addEventListener('click', function() {

        navMenu.classList.toggle('active');

        if(navMenu.classList.contains('active')) {
            menuToggle.innerHTML = '✕';
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.setAttribute('aria-label', 'Close navigation menu')
        } else {
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        }

    });

//Close menu when a navigation link is clicked
const navLinks = document.querySelectorAll('.nav-links a, .talk-btn');

navLinks.forEach(function(link) {

    link.addEventListener('click', function(){

        navMenu.classList.remove('active');

        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
    })
})