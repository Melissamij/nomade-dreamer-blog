//hamburger button
$('.hamburger-button').click(function(){
  $('.mobile-menu').slideToggle();
  $(this).toggleClass('active');
});

// dropdown menu archive
$('.dropdown-title').click(function() {
  // Hide all dropdowns except the one clicked
  $('.dropdown-content').not($(this).next()).fadeOut(600);
  // Toggle the clicked dropdown
  $(this).next().fadeToggle(600);
});

 


window.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector('[dropdown-title]');
  
  link.addEventListener("click", (e) => {
    const submenu = e.currentTarget.nextElementSibling
    submenu.classList.toggle("is-visible");
  });
});



// animate on scroll activate 
AOS.init({
  duration: 500
});

// code to show / hide button to top 

const showOnPx = 30;
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