/**
 * Vicent Manila — Site interactions (vanilla JS)
 * Mobile navigation, reveal, back-to-top.
 * The site ships a single light theme; the dark theme and its toggle
 * were removed deliberately.
 * Count-up, timeline animation and the testimonial carousel were removed:
 * see DESIGN.md §9 (motion) and documentation/CONTENT_VERIFICATION.md.
 * @see documentation/COMPONENT_DOCUMENTATION.md
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM) return;

  VM.ui = {
    refreshIcons() {
      if (window.lucide) lucide.createIcons();
    },



    _navScrollY: 0,
    _navLastFocus: null,
    _navKeyHandler: null,

    isNavOpen() {
      return document.getElementById('nav-drawer')?.classList.contains('is-open');
    },

    syncMobileHeaderHeight() {
      const header = document.getElementById('site-header');
      if (!header) return;
      const h = Math.ceil(header.getBoundingClientRect().height) || 64;
      document.documentElement.style.setProperty('--mobile-header-height', `${h}px`);
    },

    getNavFocusable() {
      const drawer = document.getElementById('nav-drawer');
      if (!drawer) return [];
      return Array.from(
        drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ).filter(el => !el.hasAttribute('disabled') && el.getClientRects().length > 0);
    },

    openNav() {
      const drawer = document.getElementById('nav-drawer');
      const overlay = document.getElementById('nav-overlay');
      const toggle = document.getElementById('nav-toggle');
      if (!drawer || this.isNavOpen()) return;

      document.querySelectorAll('.lightbox:not(.hidden)').forEach(lb => {
        lb.classList.add('hidden');
        lb.setAttribute('aria-hidden', 'true');
      });
      document.body.classList.remove('lightbox-open');

      this.syncMobileHeaderHeight();
      this._navLastFocus = document.activeElement;
      this._navScrollY = window.scrollY || window.pageYOffset || 0;

      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay?.classList.add('is-open');
      overlay?.removeAttribute('hidden');
      overlay?.setAttribute('aria-hidden', 'false');

      toggle?.setAttribute('aria-expanded', 'true');
      toggle?.setAttribute('aria-label', 'Close menu');
      document.querySelector('#nav-toggle .icon-menu')?.classList.add('hidden');
      document.querySelector('#nav-toggle .icon-close')?.classList.remove('hidden');

      document.body.classList.add('nav-open');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this._navScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';

      this._navKeyHandler = (e) => this.handleNavKeydown(e);
      document.addEventListener('keydown', this._navKeyHandler);

      this.refreshIcons();

      // Visibility is no longer transitioned (see design-system.css), so the
      // drawer is focusable the instant .is-open lands. The retries cover
      // throttled frames where the first attempt could still miss.
      const focusFirst = () => {
        const focusables = this.getNavFocusable();
        (focusables[0] || drawer).focus?.();
      };
      focusFirst();
      if (!drawer.contains(document.activeElement)) {
        requestAnimationFrame(focusFirst);
        setTimeout(focusFirst, 60);
      }
    },

    closeNav() {
      const drawer = document.getElementById('nav-drawer');
      const overlay = document.getElementById('nav-overlay');
      const toggle = document.getElementById('nav-toggle');
      if (!drawer || !this.isNavOpen()) return;

      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay?.classList.remove('is-open');
      overlay?.setAttribute('hidden', '');
      overlay?.setAttribute('aria-hidden', 'true');

      toggle?.setAttribute('aria-expanded', 'false');
      toggle?.setAttribute('aria-label', 'Open menu');
      document.querySelector('#nav-toggle .icon-menu')?.classList.remove('hidden');
      document.querySelector('#nav-toggle .icon-close')?.classList.add('hidden');

      document.body.classList.remove('nav-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, this._navScrollY || 0);

      if (this._navKeyHandler) {
        document.removeEventListener('keydown', this._navKeyHandler);
        this._navKeyHandler = null;
      }

      // Return focus to whatever opened the drawer. If that is no longer a
      // real focus target (document.body, or an element since re-rendered),
      // fall back to the toggle so focus never lands on the document.
      const prev = this._navLastFocus;
      const restore = (prev && prev !== document.body && document.contains(prev))
        ? prev
        : toggle;
      restore?.focus?.();
      this._navLastFocus = null;
    },

    toggleNav() {
      this.isNavOpen() ? this.closeNav() : this.openNav();
    },

    handleNavKeydown(e) {
      if (!this.isNavOpen()) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        this.closeNav();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusables = this.getNavFocusable();
      if (!focusables.length) return;

      const toggle = document.getElementById('nav-toggle');
      const cycle = toggle ? [toggle, ...focusables] : focusables;
      const first = cycle[0];
      const last = cycle[cycle.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === toggle)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    },

    initHeader() {
      const header = document.getElementById('site-header');
      if (!header) return;
      const onScroll = () => {
        if (this.isNavOpen()) return;
        const overProjectHero = document.body.dataset.page === 'project';
        const scrolled = window.scrollY > 24 || overProjectHero;
        header.classList.toggle('site-header--scrolled', scrolled);
        this.syncMobileHeaderHeight();
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      const syncViewport = () => {
        this.syncMobileHeaderHeight();
        if (window.matchMedia('(min-width: 900px)').matches && this.isNavOpen()) {
          this.closeNav();
        }
      };
      window.addEventListener('resize', syncViewport);
      window.addEventListener('orientationchange', syncViewport);
      window.visualViewport?.addEventListener('resize', syncViewport);
      onScroll();
    },


    initNav() {
      document.getElementById('nav-toggle')?.addEventListener('click', () => this.toggleNav());
      document.getElementById('nav-overlay')?.addEventListener('click', () => this.closeNav());

      document.querySelectorAll('.nav-mobile-link').forEach(link => {
        link.addEventListener('click', () => this.closeNav());
      });

      this.syncMobileHeaderHeight();
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

    initBackToTop() {
      const btn = document.getElementById('back-to-top');
      if (!btn) return;
      window.addEventListener('scroll', () => {
        const show = window.scrollY > 500;
        btn.hidden = !show;
        btn.classList.toggle('is-visible', show);
      }, { passive: true });
      btn.addEventListener('click', () => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      });
    },

  };

  document.addEventListener('DOMContentLoaded', () => {
    VM.ui.initNav();
    VM.ui.initHeader();
    VM.ui.initBackToTop();
    VM.ui.refreshIcons();
  });
})();
