// hamburger
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(600);
    $(this).toggleClass('active');
});
// side nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }


  window.addEventListener("DOMContentLoaded", () => {
    const link = document.querySelector('[data-menu]');
    
    link.addEventListener("click", (e) => {
      const submenu = e.currentTarget.nextElementSibling
      submenu.classList.toggle("is-visible");
    });
  });