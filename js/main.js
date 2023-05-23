$(function () {
    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        draggable: true,
    });

    $('.play').on('click', function () {
        $('.mainSlide').slick('slickPlay');
    });
    $('.pause').on('click', function () {
        $('.mainSlide').slick('slickPause');
    });

    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 담는다.
        let sct = $(window).scrollTop()
        console.log(sct);
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    });

});



