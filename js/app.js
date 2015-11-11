$(document).ready(function(){

  $("#to-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });

  $("#to-skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
  });

  $("#to-portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
  });

  $("#to-blog").click(function() {
    $('html, body').animate({
        scrollTop: $("#blog").offset().top
    }, 1000);
  });

  $("#to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });

    $("#contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });
})