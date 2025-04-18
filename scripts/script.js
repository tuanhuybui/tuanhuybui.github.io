// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.querySelectorAll('.hover-link02, .btn, .portfolio-item a').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        follower.classList.add('active');
    });
    elem.addEventListener('mouseleave', () => {
        follower.classList.remove('active');
    });
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('nav-open');
});

mobileNav.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('nav-open');
    });
});

// Filter Toggle
document.querySelectorAll('.filter-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const options = toggle.nextElementSibling;
        options.classList.toggle('active');
    });
});

// Basic Filter Functionality
document.querySelectorAll('.filter-options a').forEach(filter => {
    filter.addEventListener('click', (e) => {
        e.preventDefault();
        const filterValue = filter.getAttribute('data-filter');
        document.querySelectorAll('.portfolio-item').forEach(item => {
            const service = item.getAttribute('data-service');
            const sector = item.getAttribute('data-sector');
            if (filterValue === 'all' || service === filterValue || sector === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
