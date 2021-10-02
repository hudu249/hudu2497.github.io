$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle'); 
        
        if($(window).scrollTop() > 30){
            $('.headin').css({'background':'#0FCBDA','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4'});
        
        }else{
            $('.headin').css({'background':'none','box-shadow':'none'});
        }
    });
});
