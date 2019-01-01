$('.fa-shopping-bag').on('click',function(){

  if (toggleStatus == 1) {
    $(this).css('border-left','1px solid red');

  }else if (toggleStatus == 0) {
    $(this).css('border-left','none');
  

  }


});
$(document).ready(function(){
  $('.slickSlider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true, adaptiveWidth: true  });
  });
  