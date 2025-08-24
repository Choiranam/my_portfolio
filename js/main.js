// Initialize Theme
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    } else {
        body.classList.add('dark-mode');
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    }

    // Initialize Particles.js with correct theme colors
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: savedTheme === 'light' ? '#4f46e5' : '#00ffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: True, distance: 150, color: savedTheme === 'light' ? '#4f46e5' : '#00ffff', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
                modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
            }
        });
    }
};

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');

    // Update Particles.js colors
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: body.classList.contains('light-mode') ? '#4f46e5' : '#00ffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: body.classList.contains('light-mode') ? '#4f46e5' : '#00ffff', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
                modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
            }
        });
    }
});

// Modal Handling (only for portfolio.html)
if (document.querySelector('.portfolio-item')) {
    const modals = document.querySelectorAll('.modal');
    const modalTriggers = document.querySelectorAll('.portfolio-item');
    const closeButtons = document.querySelectorAll('.close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', e => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Form Validation and Submission (only for contact.html)
if (document.getElementById('contact-form')) {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert('Message sent! (Demo only)');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// New code for filtering portfolio items
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length > 0 && portfolioItems.length > 0) {
    const filterProjects = (filter) => {
        portfolioItems.forEach(item => {
            const itemType = item.getAttribute('data-type');
            const itemImage = item.querySelector('img');

            if (filter === 'all' || itemType === filter) {
                item.classList.add('visible');
                // Adjust image aspect ratio
                if (itemType === 'web') {
                    itemImage.classList.add('web');
                    itemImage.classList.remove('mobile');
                } else if (itemType === 'mobile') {
                    itemImage.classList.add('mobile');
                    itemImage.classList.remove('web');
                }
            } else {
                item.classList.remove('visible');
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const filter = e.target.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Initial filter on page load
    filterProjects('all');
}