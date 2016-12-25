// Menu toggle/dismiss (with JQuery)
$(document).ready(function(){
  $(".menu-toggle").click(function(){
    $(this).closest(".navbar").find(".navbar-menu").toggleClass("menu-shown");
  });

  $("a, .menu-dismiss").click(function(){
    $(this).closest(".navbar").find(".navbar-menu").removeClass("menu-shown");
  });
});



// Toggle Nav with Raw JavaScript
/*
var mainNav = document.getElementById('mainNav');
var navToggle = document.getElementById('navToggle');

// Start by adding the class "collapse" to the mainNav
mainNav.classList.add('menu-shown');

// Establish a function to toggle the class "collapse"
function mainNavToggle() {
    mainNav.classList.toggle('menu-shown');
}

// Add a click event to run the mainNavToggle function
navToggle.addEventListener('click', mainNavToggle);
*/
