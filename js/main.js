$(function () {
    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        draggable: true,
    });

    $('.best_model').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        draggable: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]

    });

    $('.awards_content').slick({
        arrows: false,
        // fade: true,
        // vertical: true,
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.awards .dots li').on('click', function () {
        //내가 클릭한 요소의 번호를 알려줘...
        let idx = $(this).index();
        console.log(idx);
        $('.awards_content').slick('slickGoTo', idx);

        $(this).addClass('on').siblings().removeClass('on');

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

    $('html, body').stop().animate({ scrollTop: '-=300' });

});



