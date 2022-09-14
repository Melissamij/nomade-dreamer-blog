
 // hamburger 
 $('.hamburger-button').click(function(){
  $('.mobile-menu').fadeToggle(100);
  $(this).toggleClass('active');
});

// side nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  