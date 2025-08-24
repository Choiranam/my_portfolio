/* Initialize AOS */
AOS.init({ duration: 800 });

/* Initialize Typed.js (only for home.html) */
if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
        strings: ['Choirul\'anam', 'a Junior Software Developer', 'a Web Developer', 'a Mobile Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#00ffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#00ffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
        }
    });
}

/* Initialize Swiper for Certificates (only for certificates.html) */
if (document.querySelector('.swiper-container')) {
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
}