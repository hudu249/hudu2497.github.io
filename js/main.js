$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle'); 
              
        if($(window).scrollTop() > '20'){
            $('.heading').css({'background':'#0FCBDA','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4'});
        
        }else{
            $('.heading').css({'background':'none','box-shadow':'none'});
        }
    });
});


$("img.lazy").lazyload();


wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
