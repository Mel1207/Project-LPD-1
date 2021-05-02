// $('.carousel').carousel()
// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

$(document).ready(function(){
    // NAV CONDITIONING
    $(window).scroll(() => {
        if($(this).scrollTop() > 50) {
            $('nav').addClass('coloredNav');
        } else {
            $('nav').removeClass('coloredNav');
        }
    })



    $('.multiple-items').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            // settings: "unslick"
        ]
    });

    $('.client-container').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});