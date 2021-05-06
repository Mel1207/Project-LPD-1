// $('.carousel').carousel()
// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

const counters = document.querySelectorAll('.counter');
const speed = 800;

const animateCount = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count  = +counter.innerText;
    
            const inc = target / speed;
    
            if(count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 3);
            } else {
                count.innerText = target;
            }
        }
    
        updateCount();
    });
}



$(document).ready(function(){
    // NAV CONDITIONING
    $(window).scroll(() => {
        if($(this).scrollTop() > 100) {
            $('nav').addClass('coloredNav');
        } else {
            $('nav').removeClass('coloredNav');
        }

        if($(this).scrollTop() > 1100) {
            console.log('scrolled over 500')
            animateCount();
        }
    })

    // SLICK CONDITIONING
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

let addClassOnScroll = function () {
    let windowTop = $(window).scrollTop();
    $('section[id]').each(function (index, elem) {
        let offsetTop = $(elem).offset().top;
        let outerHeight = $(this).outerHeight(true);

        if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
            let elemId = $(elem).attr('id');
            $("nav ul li a.active").removeClass('active');
            $("nav ul li a[href='#" + elemId + "']").addClass('active');
        }
    });
};

$(function () {
    $(window).on('scroll', function () {
        addClassOnScroll();
    });
});