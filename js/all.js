$(document).ready(function () {
    //swiper
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    //下拉式選單
    $('.menu-course-item').click(function (e) { 
      e.preventDefault();
      $('.menu-course-item-detail').slideToggle();
      $(this).toggleClass('active');
      
    });

    //scrolltop
    $('.scrolltoTop a').click(function (e) { 
      e.preventDefault();
      $('html,body').animate({scrollTop:0},500);
      
    });

});