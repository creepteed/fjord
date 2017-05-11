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
});