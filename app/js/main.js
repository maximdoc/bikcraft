$(function () {

    $('.top__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        infinite: true,
        dots: false,
        prevArrow: '<button class="slider__btn slider__btn-left"><svg width="79" height="24" viewBox="0 0 79 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.939392 10.9393C0.353607 11.5251 0.353607 12.4749 0.939392 13.0607L10.4853 22.6066C11.0711 23.1924 12.0209 23.1924 12.6067 22.6066C13.1924 22.0208 13.1924 21.0711 12.6067 20.4853L4.12138 12L12.6067 3.51472C13.1924 2.92893 13.1924 1.97919 12.6067 1.3934C12.0209 0.807611 11.0711 0.807611 10.4853 1.3934L0.939392 10.9393ZM78.0264 10.5L2.00005 10.5V13.5L78.0264 13.5V10.5Z" fill="black"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="slider__btn slider__btn-right"><svg width="78" height="24" viewBox="0 0 78 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M77.087 13.0607C77.6728 12.4749 77.6728 11.5251 77.087 10.9393L67.541 1.3934C66.9552 0.807611 66.0055 0.807611 65.4197 1.3934C64.8339 1.97919 64.8339 2.92893 65.4197 3.51472L73.905 12L65.4197 20.4853C64.8339 21.0711 64.8339 22.0208 65.4197 22.6066C66.0055 23.1924 66.9552 23.1924 67.541 22.6066L77.087 13.0607ZM0 13.5L76.0263 13.5V10.5L0 10.5L0 13.5Z" fill="black"/>\n' +
            '</svg>\n</button>',
    });

    $('.test__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        infinite: true,
        dots: true,
        fade: true,
    });

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.header__menu-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

    $('.menu__list-item').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

});