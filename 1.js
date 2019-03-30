$(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        
        $('.menuxanh').toggleClass('divao');
        $('.icon-1').toggleClass('andi');
       $('.icon-2').toggleClass('andi');
       
        
        
    });
    $('.m1').click(function (e) { 
        e.preventDefault();


        $('html').animate({
            scrollTop: $('.khoi1').offset().top 
        }, 500 );
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('andi');
        $('.icon-2').addClass('andi');
        
    });
    $('.m2').click(function (e) { 
        e.preventDefault();


        $('html').animate({
            scrollTop: $('.khoi2').offset().top 
        }, 500 );
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('andi');
        $('.icon-2').addClass('andi');
        
    });
    $('.m3').click(function (e) { 
        e.preventDefault();


        $('html').animate({
            scrollTop: $('.khoi3').offset().top 
        }, 500 );
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('andi');
        $('.icon-2').addClass('andi');
        
    });
    $('.m4').click(function (e) { 
        e.preventDefault();


        $('html').animate({
            scrollTop: $('.khoi4').offset().top 
        }, 500 );
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('andi');
        $('.icon-2').addClass('andi');
        
    });
    $('.m5').click(function (e) { 
        e.preventDefault();


        $('html').animate({
            scrollTop: $('.khoi5').offset().top 
        }, 500 );
        $('.menuxanh').removeClass('divao');
        $('.icon-1').removeClass('andi');
        $('.icon-2').addClass('andi');
        
    });


});