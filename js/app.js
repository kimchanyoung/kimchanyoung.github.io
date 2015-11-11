$(document).ready(function(){

  $("#to-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-box").offset().top
    }, 1000);
  });

  $("#to-skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills-box").offset().top
    }, 1000);
  });

  $("#to-portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-box").offset().top
    }, 1000);
  });

  $("#to-blog").click(function() {
    $('html, body').animate({
        scrollTop: $("#blog-box").offset().top
    }, 1000);
  });

  $("#to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-box").offset().top
    }, 1000);
  });
})