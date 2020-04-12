var OpenButton = document.querySelector('.toggle-button');
var MobileBackground = document.querySelector('.mobile-background');
var MobileMenu = document.querySelector('.mobile-menu');

OpenButton.addEventListener('click', function() {
    MobileBackground.classList.add("open")
    MobileMenu.classList.add("open");
});

MobileBackground.addEventListener('click', function(){
    MobileBackground.classList.remove("open")
    MobileMenu.classList.remove("open")
});