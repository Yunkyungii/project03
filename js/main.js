$(function () {
    $('.mainSlide').slick({
        arrow: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        draggable: true,
    });

    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 담는다.
        let sct = $(window).scrollTop()
        console.log(sct);
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }

    });
})