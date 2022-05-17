$(function () {

    /*-- Fixet Header--*/


    let header = $("#header");
    let intro = $("#intro");
    let headerH = header.innerHeight();
    let jsburger = $("#burger");
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, headerH);

    $(window).on("scroll resize", function () {

        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, headerH);

    });

    function checkScroll(scrollPos, headerH) {
        if (scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /*-- Smooth scroll--*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");


        $("html, body").animate({
            scrollTop: elementOffset - 90


        }, 700);

    });


    /*-- Button--*/
    let nav = $("#nav");
    let navToggle = $("#navToggle")
    navToggle.on("click", function (event) {

        event.preventDefault();
        nav.toggleClass("show");
    });


    /*-- Reviews--*/

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true

    });




});
