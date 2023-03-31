$('.menu-icon').click(function() {
    $(this).toggleClass('open');
    $('.menu').slideToggle();
    $('.menu-icon i').toggleClass('active');
  });