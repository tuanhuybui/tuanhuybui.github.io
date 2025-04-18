// Initialize AOS
        AOS.init({
            duration: 900,
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

        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.hover-link02, .btn')) {
                follower.classList.add('active');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('.hover-link02, .btn')) {
                follower.classList.remove('active');
            }
        });

        // Mobile Menu
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        const closeBtn = document.querySelector('.close-btn');
        const body = document.body;

        hamburger.addEventListener('click', () => {
            mobileNav.classList.add('active');
            hamburger.classList.add('active');
            body.classList.add('nav-open');
        });

        closeBtn.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('nav-open');
        });

        // Close menu when clicking a link
        mobileNav.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('nav-open');
            });
        });

        // Add scrolled class to nav on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
