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

// dropdown menu
  $('.dropdown-title').click(function(){
    $('.dropdown-content').fadeToggle(600);
    $(this).toggleClass('active');
});


// animate on scroll activate 
AOS.init({
  duration: 500
});


// code to show / hide button to top 

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
if (scrollContainer().scrollTop > showOnPx) {
  backToTopButton.classList.remove("hidden")
} else {
  backToTopButton.classList.add("hidden")
}
})

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
// progress bar
const pageProgressBar = document.querySelector(".progress-bar")
document.addEventListener("scroll", () => {
const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

pageProgressBar.style.width = `${scrolledPercentage}%`

if (scrollContainer().scrollTop > showOnPx) {
  backToTopButton.classList.remove("hidden");
} else {
  backToTopButton.classList.add("hidden");
}
});