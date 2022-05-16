$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        // autoplay: 1500,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1
                }
            },

        ]

        
    });
});
