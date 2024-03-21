
    // Mobile Responsive Menu
    document.addEventListener("DOMContentLoaded", function() {
        // Your JavaScript code here
        const menubar = document.querySelector(".hum-menu");
        const open_menu = document.querySelector(".fa-bars");
        const close_menu =  document.querySelector(".fa-xmark");
        const menulist =  document.querySelector("nav ul");
    
        close_menu.style.display = "none";
    
        open_menu.addEventListener("click", () => {
            menulist.classList.toggle("showmenu");
            open_menu.style.display = "none";
            close_menu.style.display = "block";
            
        });
    
        close_menu.addEventListener("click", () => {
            menulist.classList.remove("showmenu");
            open_menu.style.display = "block";
            close_menu.style.display = "none";
            document.querySelector(".hum-menu").style.paddingRight = "0";
        }); 
    });


    // Scroll To Top 
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}