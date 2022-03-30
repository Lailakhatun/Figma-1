$(function(){
    'use strict'
    // venobox youtube video
   
        $('.venobox').venobox({
            spinner:'cube-grid',
            spinColor:'#FD5B2F',
            closeColor:'#fd5b2f',
        }); 

        // service slider
        $('.service_slider').slick({
            arrows:false,
            autoplay:false,
            speed:500,
            dots:true,
        });


        // back to top button
        $('.back-to-top').click(function(){
            $('html,body').animate({
                scrollTop:0,
            },500);

        });
        $(window).scroll(function(){
            var scrolling2 = $(this).scrollTop();
            if(scrolling2 > 150){
                $(".back-to-top").fadeIn();
            }else{
                $(".back-to-top").fadeOut();
            }

        });

        // // side bar
        $('.btn').click(function(){
          $(' .menu_left').toggleClass('side_bar');
        });
        
// mobile menu
      //   function openNav() {

      //     document.getElementById("myNav").style.width = "100%";
      
      
      // }
      
      // function closeNav() {
      
      //     document.getElementById("myNav").style.width = "0";
      
      
      // }



        // sticky menu
var navOff = $('.navigation').offset().top;
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > navOff) {
    $('.navigation').addClass('manu-fix');
  } else {
    $('.navigation').removeClass('manu-fix');
  }
});
      
      

});

$(window).scroll(function(){
    var scrolling2 = $(this).scrollTop();
    if(scrolling2 > 150) {
      $('.back-to-top').fadeIn();

    }else{
      $('.back-to-top').fadeOut();
    }
  });