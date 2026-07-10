/**
 * Vicent Manila — Site interactions (vanilla JS)
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM) return;

  VM.ui = {
    refreshIcons() {
      if (window.lucide) lucide.createIcons();
    },

    setTheme(dark) {
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem('vm-theme', dark ? 'dark' : 'light');
      document.querySelector('.icon-theme-dark')?.classList.toggle('hidden', dark);
      document.querySelector('.icon-theme-light')?.classList.toggle('hidden', !dark);
    },

    toggleTheme() {
      const dark = !document.documentElement.classList.contains('dark');
      this.setTheme(dark);
      this.refreshIcons();
    },

    openNav() {
      document.getElementById('nav-drawer')?.classList.add('is-open');
      document.getElementById('nav-overlay')?.classList.remove('hidden');
      document.getElementById('nav-toggle')?.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
      document.querySelector('.icon-menu')?.classList.add('hidden');
      document.querySelector('.icon-close')?.classList.remove('hidden');
    },

    closeNav() {
      document.getElementById('nav-drawer')?.classList.remove('is-open');
      document.getElementById('nav-overlay')?.classList.add('hidden');
      document.getElementById('nav-toggle')?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
      document.querySelector('.icon-menu')?.classList.remove('hidden');
      document.querySelector('.icon-close')?.classList.add('hidden');
    },

    toggleNav() {
      const open = document.getElementById('nav-drawer')?.classList.contains('is-open');
      open ? this.closeNav() : this.openNav();
    },

    initHeader() {
      const header = document.getElementById('site-header');
      if (!header) return;
      const onScroll = () => {
        const scrolled = window.scrollY > 24;
        header.classList.toggle('site-header--scrolled', scrolled);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    },

    initTheme() {
      const stored = localStorage.getItem('vm-theme');
      const dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.setTheme(dark);
      document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggleTheme());
    },

    initNav() {
      document.getElementById('nav-toggle')?.addEventListener('click', () => this.toggleNav());
      document.getElementById('nav-overlay')?.addEventListener('click', () => this.closeNav());
    },

    initReveal() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
        return;
      }
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
      document.querySelectorAll('.reveal:not(.in):not([data-reveal])').forEach(el => {
        el.dataset.reveal = '1';
        io.observe(el);
      });
    },

    initCounters() {
      const els = document.querySelectorAll('[data-count]:not([data-counted])');
      if (!els.length) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.dataset.counted) return;
          el.dataset.counted = '1';
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          if (isNaN(target)) return;
          const dur = 1400;
          const start = performance.now();
          const tick = now => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      }, { threshold: 0.4 });
      els.forEach(el => io.observe(el));
    },

    initTimeline() {
      const timeline = document.getElementById('timeline');
      const progress = document.getElementById('timeline-progress');
      if (!timeline || !progress) return;
      const update = () => {
        const rect = timeline.getBoundingClientRect();
        const start = rect.top + window.scrollY;
        const end = start + rect.height;
        const mid = window.scrollY + window.innerHeight * 0.45;
        const pct = Math.min(Math.max((mid - start) / (end - start), 0), 1);
        progress.style.height = (pct * 100) + '%';
      };
      window.addEventListener('scroll', update, { passive: true });
      update();
    },

    initBackToTop() {
      const btn = document.getElementById('back-to-top');
      if (!btn) return;
      window.addEventListener('scroll', () => {
        const show = window.scrollY > 500;
        btn.hidden = !show;
        btn.classList.toggle('is-visible', show);
      }, { passive: true });
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    },

    initTestimonials() {
      const track = document.getElementById('testimonial-track');
      if (!track) return;
      const slides = track.children;
      const dots = document.getElementById('testimonial-dots');
      let current = 0;
      let timer;

      if (dots) {
        for (let i = 0; i < slides.length; i++) {
          const d = document.createElement('button');
          d.type = 'button';
          d.className = 'h-2 rounded-full transition-all ' + (i === 0 ? 'bg-gold w-6' : 'bg-black/20 dark:bg-white/20 w-2');
          d.setAttribute('aria-label', 'Testimonial ' + (i + 1));
          d.addEventListener('click', () => go(i));
          dots.appendChild(d);
        }
      }

      const dotEls = dots ? dots.children : [];

      function go(i) {
        current = ((i % slides.length) + slides.length) % slides.length;
        track.style.transform = 'translateX(-' + (current * 100) + '%)';
        Array.from(dotEls).forEach((d, idx) => {
          d.className = 'h-2 rounded-full transition-all ' + (idx === current ? 'bg-gold w-6' : 'bg-black/20 dark:bg-white/20 w-2');
        });
      }

      function start() {
        clearInterval(timer);
        timer = setInterval(() => go(current + 1), 6000);
      }

      document.getElementById('testimonial-prev')?.addEventListener('click', () => { go(current - 1); start(); });
      document.getElementById('testimonial-next')?.addEventListener('click', () => { go(current + 1); start(); });

      const carousel = document.getElementById('testimonial-carousel');
      carousel?.addEventListener('mouseenter', () => clearInterval(timer));
      carousel?.addEventListener('mouseleave', start);
      start();
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    VM.ui.initTheme();
    VM.ui.initNav();
    VM.ui.initHeader();
    VM.ui.initBackToTop();
    VM.ui.refreshIcons();
  });
})();
