// Menu toggle/dismiss (with JQuery)
$(document).ready(function(){
  $(".menu-toggle").click(function(){
    $(this).closest(".navbar").find(".navbar-menu").toggleClass("menu-shown");
  });

  $("a, .menu-dismiss").click(function(){
    $(this).closest(".navbar").find(".navbar-menu").removeClass("menu-shown");
  });
});
