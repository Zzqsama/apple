$(function () {
    $('.header .nav-phone .menu').on('click',function(){
        $(this).toggleClass('active');
        $('.nei-phone').toggleClass('active');
    });
    $('.header .header-inner .nav .search').on('click',function(){
        $('.sousuo').toggleClass('tanchu');
        $('.close').toggleClass('tanchu');
        $('.zhezhao').toggleClass('tanchu');
        $('.sousuo-nei').toggleClass('tanchu');
        $('.nav').toggleClass('suo');

    });
    $('.header .header-inner .close').on('click',function () {
        $('.sousuo').removeClass('tanchu');
        $('.close').removeClass('tanchu');
        $('.zhezhao').removeClass('tanchu');
        $('.sousuo-nei').removeClass('tanchu');
        $('.nav').removeClass('suo');
    })
    $('.zhezhao').on('click',function () {
        $('.sousuo').removeClass('tanchu');
        $('.close').removeClass('tanchu');
        $('.zhezhao').removeClass('tanchu');
        $('.sousuo-nei').removeClass('tanchu');
        $('.nav').removeClass('suo');

    })

    $(window).resize(function(){
        var width=($('.header').innerWidth())
        console.log(width)
        if(width<='768'){
            $('.nav').removeClass('suo');
            $('.sousuo').removeClass('tanchu');
            $('.close').removeClass('tanchu');
            $('.zhezhao').removeClass('tanchu');
            $('.sousuo-nei').removeClass('tanchu');
        }

    })






    var imgbox =$('.imgbox');
    var tu=$('li',imgbox);
    var widths = tu.eq(0).width();
    var butl = $('.butl');
    var butr = $('.butr');
    var num = 0;
    var next = 0;
    var t = setInterval(moveL,2000);
    var yuandian=$('div',$('.yuandian'));
    var lunbo=$('.lunbo');
    var flag = true;
    tu.eq(0).css({
        left:0
    });
    for(var i=0; i<tu.length; i++){
        if(i == 0){
            continue;
        }
        tu.eq(i).css({
            left:widths
        });
    }

    lunbo.on('mouseenter',function(){
        $('.butl , .butr').css({
            opacity:1
        });
        clearInterval(t);
    });
    lunbo.on('mouseleave',function(){
        $('.butl , .butr').css({
            opacity:0
        });
        t = setInterval(moveL,2000);
    });

    function moveL(){
        next++;
        if(next >= tu.length){
            next = 0;
        }
        tu.eq(next).css({
            left:widths,
        });
        yuandian.eq(num).removeClass('diandian');
        yuandian.eq(next).addClass('diandian');
        tu.eq(num).animate({
            left:-widths,
        });
        tu.eq(next).animate({
            left:0,
        },function(){
            flag = true;
        });
        num = next;
    }
    function moveR(){
        next--;
        if(next < 0){
            next = tu.length-1;
        }
        tu.eq(next).css({
            left:-widths,
        });
        yuandian.eq(num).removeClass('diandian');
        yuandian.eq(next).addClass('diandian');
        tu.eq(num).animate({
            left:widths,
        });
        tu.eq(next).animate({
            left:0,
        },function(){
            flag = true;
        });
        num = next;
    }
    butl.on('click',function(){
        if(flag){
            flag = false;
            moveR();
        }
    });
    butr.on('click',function(){
        if(flag){
            flag = false;
            moveL();
        }
    });
    yuandian.on('click',function(){
        if($(this).index() == num){
            return;
        }
        if( $(this).index() < num ){
            tu.eq($(this).index()).css({
                left:-widths,
            });
            tu.eq(num).animate({
                left:+widths
            });
        }else{
            tu.eq($(this).index()).css({
                left:widths,
            });
            tu.eq(num).animate({
                left:-widths
            });
        }
        tu.eq($(this).index()).animate({
            left:0
        });
        yuandian.eq($(this).index()).addClass('diandian');
        yuandian.eq(num).removeClass('diandian');
        next = $(this).index();
        num = $(this).index();
    });




})