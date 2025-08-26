// loader

$(window).on('load', function () {
    $(window).scrollTop(0);
    $('.logo-loader').fadeOut(500, function () {
        $('.half.left').css('transform', 'translateX(-100%)');
        $('.half.right').css('transform', 'translateX(100%)');
        $('.loader').fadeOut(500);
    });
});


// fixed_header_while_scrolling

window.addEventListener("scroll", function () {
    if (window.scrollY >= 150) {
        document.body.classList.add("fixed_header");
    } else {
        document.body.classList.remove("fixed_header");
    }
});


// back_to_top_bttn

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
    } else {
        $("#back-top").removeClass("show");
    }
});

$(document).on('click', '#back-top', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

var swiper = new Swiper(".cards_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

});

// end_back_to_top_bttn
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});

var swiper = new Swiper(".advantages_swiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },

});

var swiper = new Swiper(".blog_slidre", {
    spaceBetween: 30,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".next_button",
        prevEl: ".prev_button",
    },

});


// button_menue
$(document).ready(function () {
    $(".btn_menu").click(function (e) {
        e.preventDefault()
        $(".header__menu--navigation").addClass("show_menu");

    });
});

//X_menu_Action

$(document).ready(function () {
    $(".btn_close").click(function (e) {
        e.preventDefault()
        $(".header__menu--navigation").removeClass("show_menu");

    });
});

// when click on background div of menue remove the show_menu
$(document).ready(function () {
    $(".menu-backdrop").click(function (e) {
        e.preventDefault()
        $(".header__menu--navigation").removeClass("show_menu");

    });
});