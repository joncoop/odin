// Menu toggle/dismiss (with JQuery)
$(document).ready(function(){
  $(".menu-toggle").click(function(){
    $(".navbar-menu").toggleClass("menu-shown");
  });

  $("a, .menu-dismiss").click(function(){
    $(".navbar-menu").removeClass("menu-shown");
  });
});
