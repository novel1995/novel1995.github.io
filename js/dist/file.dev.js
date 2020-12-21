"use strict";

$(document).ready(function () {
  $('.multiple-items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
      }
    }]
  });
  /* Меню */

  $('ul.menu a[href^="#"').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 10000);
    $('ul.menu a[href^="#"').css({
      'color': '#212121'
    });
    $(this).css({
      'color': '#004bee'
    });
    return false;
  });
  $('.menu-icon').click(function () {
    $('.nav-bar').slideToggle(500);
    $('ul.menu').css({
      'display': 'flex',
      'flex-direction': 'column'
    });

    if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars"></i>');
    }
  });
});