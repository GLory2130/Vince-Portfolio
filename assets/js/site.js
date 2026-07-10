/**
 * Vicent Manila — Site Interactions
 */
function siteApp() {
  return {
    dark: false,
    scrolled: false,
    mobileOpen: false,

    init() {
      this.dark = localStorage.getItem('vm-theme') === 'dark' ||
        (!localStorage.getItem('vm-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.$watch('dark', v => localStorage.setItem('vm-theme', v ? 'dark' : 'light'));

      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 24;
      }, { passive: true });

      this.initReveal();
      this.initCounters();
      this.initTimeline();
      this.initBackToTop();
      this.initLucide();
    },

    initLucide() {
      const run = () => { if (window.lucide) lucide.createIcons(); };
      run();
      document.addEventListener('alpine:initialized', run);
      setTimeout(run, 100);
    },

    initReveal() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
        return;
      }
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    },

    initCounters() {
      const els = document.querySelectorAll('[data-count]');
      if (!els.length) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          if (isNaN(target)) return;
          const dur = 1400, start = performance.now();
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
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };
}

// Testimonial slider (vanilla)
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('testimonial-track');
  if (!track) return;
  const slides = track.children;
  const dots = document.getElementById('testimonial-dots');
  let current = 0, timer;

  if (dots) {
    for (let i = 0; i < slides.length; i++) {
      const d = document.createElement('button');
      d.className = 'w-2 h-2 rounded-full transition-all ' + (i === 0 ? 'bg-gold w-6' : 'bg-black/20 dark:bg-white/20');
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

  function next() { go(current + 1); }
  function start() { clearInterval(timer); timer = setInterval(next, 6000); }
  function stop() { clearInterval(timer); }

  document.getElementById('testimonial-prev')?.addEventListener('click', () => { go(current - 1); start(); });
  document.getElementById('testimonial-next')?.addEventListener('click', () => { go(current + 1); start(); });

  const carousel = document.getElementById('testimonial-carousel');
  carousel?.addEventListener('mouseenter', stop);
  carousel?.addEventListener('mouseleave', start);
  start();
});
