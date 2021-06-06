// Main js file

// another js file (example)
// import './validate.js'
// import './select.js'

window.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.header__hamburger').addEventListener('click', function () {
        const value = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        this.classList.toggle('active')
        if (this.classList.contains('active')) {
            document.body.style.paddingRight = `${value}px`;
        } else {
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        }
        document.querySelector('.header__inner').classList.toggle('show');
    });

    $('.slider').slick({
        responsive: [{
                breakpoint: 9999,
                settings: {
                    arrows: 'false',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"
            },
        ]
    });

    let slider = document.querySelector('.slider');
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && !slider.classList.contains('slick-initialized')) {
            $('.slider').slick({
                responsive: [{
                        breakpoint: 9999,
                        settings: {
                            arrows: 'false',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: "unslick"
                    },
                ]
            });
        }
    }, { passive: true } )

})