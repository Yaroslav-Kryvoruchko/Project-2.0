var OpenButton = document.querySelector('.toggle-button');
var MobileBackground = document.querySelector('.mobile-background');
var MobileMenu = document.querySelector('.mobile-menu');


OpenButton.addEventListener('click', function() {
    MobileMenu.classList.add("open");
    MobileBackground.style.display = "block";
  setTimeout(function() {
    MobileBackground.classList.add ("open");
  }, 10);
});

MobileBackground.addEventListener('click', function(){
    MobileBackground.classList.remove("open")
    MobileMenu.classList.remove("open")
    MobileBackground.style.display = "none";
  setTimeout(function() {
    MobileBackground.classList.remove("open");
  }, 200);
});

