/**
 * Vicent Manila Portfolio — Main JavaScript
 */
(function () {
    'use strict';

    // ── Theme Toggle (Dark Mode) ──
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const storedTheme = localStorage.getItem('vm-theme');

    if (storedTheme) {
        html.setAttribute('data-theme', storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-theme', 'dark');
    }

    themeToggle?.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('vm-theme', next);
    });

    // ── Mobile Navigation ──
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    navToggle?.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // ── Header Scroll Effect ──
    const header = document.getElementById('site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        header?.classList.toggle('scrolled', currentScroll > 50);
        lastScroll = currentScroll;
    }, { passive: true });

    // ── Active Nav Link on Scroll ──
    const sections = document.querySelectorAll('section[id]');

    const highlightNav = () => {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav__link[href="#${id}"]`);

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                link?.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });

    // ── Scroll Reveal Animations ──
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('visible'));
    }

    // ── Certifications Slideshow ──
    const certCarousel = document.querySelector('.cert-carousel');
    const certTrack = document.querySelector('.cert-carousel__track');
    const certDotsContainer = document.querySelector('.cert-carousel__dots');
    const certPrev = document.querySelector('.cert-carousel__btn--prev');
    const certNext = document.querySelector('.cert-carousel__btn--next');

    if (certCarousel && certTrack && certDotsContainer) {
        const uniqueCount = certTrack.children.length / 2;
        let activeIndex = 0;

        for (let i = 0; i < uniqueCount; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'cert-carousel__dot' + (i === 0 ? ' is-active' : '');
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to certification ${i + 1}`);
            dot.dataset.index = String(i);
            certDotsContainer.appendChild(dot);
        }

        const dots = certDotsContainer.querySelectorAll('.cert-carousel__dot');

        const getSlideWidth = () => {
            const first = certTrack.children[0];
            if (!first) return 0;
            const gap = parseFloat(getComputedStyle(certTrack).gap) || 20;
            return first.offsetWidth + gap;
        };

        const goToSlide = (index) => {
            activeIndex = ((index % uniqueCount) + uniqueCount) % uniqueCount;
            const offset = activeIndex * getSlideWidth();
            certTrack.style.animation = 'none';
            certTrack.style.transform = `translateX(-${offset}px)`;
            dots.forEach((dot, i) => dot.classList.toggle('is-active', i === activeIndex));
        };

        const resumeMarquee = () => {
            certTrack.style.animation = '';
            certTrack.style.transform = '';
            dots.forEach((dot, i) => dot.classList.toggle('is-active', i === 0));
            activeIndex = 0;
        };

        const pauseAuto = () => {
            certCarousel.classList.add('is-paused');
        };

        const startAuto = () => {
            certCarousel.classList.remove('is-paused');
            resumeMarquee();
        };

        const manualSlide = (direction) => {
            pauseAuto();
            goToSlide(activeIndex + direction);
            clearTimeout(certCarousel._resumeTimer);
            certCarousel._resumeTimer = setTimeout(startAuto, 6000);
        };

        certPrev?.addEventListener('click', () => manualSlide(-1));
        certNext?.addEventListener('click', () => manualSlide(1));

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                pauseAuto();
                goToSlide(parseInt(dot.dataset.index, 10));
                clearTimeout(certCarousel._resumeTimer);
                certCarousel._resumeTimer = setTimeout(startAuto, 6000);
            });
        });

        certCarousel.addEventListener('mouseenter', pauseAuto);
        certCarousel.addEventListener('mouseleave', () => {
            clearTimeout(certCarousel._resumeTimer);
            certCarousel._resumeTimer = setTimeout(startAuto, 800);
        });

        window.addEventListener('resize', () => {
            if (certCarousel.classList.contains('is-paused')) {
                goToSlide(activeIndex);
            }
        }, { passive: true });
    }

    // ── Contact Form (AJAX) ──
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn__text');
        const btnLoader = submitBtn.querySelector('.btn__loader');

        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        btnLoader.hidden = false;
        formMessage.hidden = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            formMessage.hidden = false;
            formMessage.textContent = data.message;
            formMessage.className = 'form-message ' + (data.success ? 'success' : 'error');

            if (data.success) {
                contactForm.reset();
            }
        } catch {
            formMessage.hidden = false;
            formMessage.textContent = 'Something went wrong. Please try again or email directly.';
            formMessage.className = 'form-message error';
        } finally {
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
            btnLoader.hidden = true;
        }
    });

    // ── Smooth anchor scrolling for older browsers ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
