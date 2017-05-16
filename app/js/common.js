$(document).ready(function () {
    $(".sandwich").click(function() {
        $(".sandwich").find(".sw-bot, .sw-mid, .sw-top").animate({"background-color": "rgb(51, 51, 51)"}, 250);
        $(".sandwich").toggleClass("active", function () {
            $(".sandwich.active").find(".sw-bot, .sw-mid, .sw-top").animate({"background-color": "rgb(255, 255, 255)"}, 250);
        });
        $(".navbar-side").toggleClass("active");
    });


    $('.close-but').on('click', function () {
        $('.doc-swipe-1').fadeOut(200);
    });

    $('.close-but').on('click', function () {
        $('.doc-swipe-3').fadeOut(200);
    });

    $('.certificate-1').on('click', function () {
        $('.doc-swipe-1').fadeIn(200);
    });

    $('.navbar_cart-bag').on('click', function () {
        $('.doc-swipe-3').fadeIn(200);
    });


    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });

    $(document).on('scroll', function(){
        console.log(999);
        var a = $(document).scrollTop();
        if(a > 100){
            $('.navbar-menu').addClass('active');
            $('.navbar-logo img').attr('src', 'img/proj_img/logo-fixed.png');
            $('.navbar-cart img').attr('src', 'img/proj_img/bagWhite.png');
            $('.sw-top, .sw-mid, .sw-bot').css('background-color','rgb(255, 255, 255)');
        } else {
            $('.navbar-menu').removeClass('active');
            $('.navbar-logo img').attr('src', 'img/proj_img/logo.jpg');
            $('.navbar-cart img').attr('src', 'img/proj_img/bag.png');
            $('.sw-top').css('background-color','rgb(51, 51, 51)');
        }
    });



    $('.page').click(function() {
        $(this).removeClass('no-anim').toggleClass('flipped');
        $('.page > div').click(function(e) {
            e.stopPropagation();
        });
        reorder()
    });
    function reorder(){
        $(".book").each(function(){
            var pages=$(this).find(".page")
            var pages_flipped=$(this).find(".flipped")
            pages.each(function(i){
                $(this).css("z-index",pages.length-i)
            })
            pages_flipped.each(function(i){
                $(this).css("z-index",i+1)
            })
        });
    }
    reorder()
    $(".buy_color-item").hover( function() {

        $(this).find(".buy_hover").css("transition","1s");
        $(this).find(".buy_hover").css("opacity","1");
    }, function () {
        $(this).find(".buy_hover").css("transition","1s");
        $(this).find(".buy_hover").css("opacity","0");
    });

    $(".buy_hover-buy").hover( function() {

        $(this).css("transition","0.5s");
        $(this).css("background-color","#fff");
        $(this).css("color","#7cb342");
    }, function () {
        $(this).css("transition","0.5s");
        $(this).css("color","#fff");
        $(this).css("background-color","#7cb342");

    });
});