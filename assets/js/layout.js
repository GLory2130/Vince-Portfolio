/**
 * Shared layout — header, footer, contact CTAs
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM?.site) return;

  const S = () => VM.site;

  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  VM.layout = {
    contactCTAs(compact) {
      const c = S().contact;
      const cls = compact
        ? 'grid sm:grid-cols-3 gap-3'
        : 'grid sm:grid-cols-3 gap-4';
      return `
        <div class="${cls}">
          <a href="${c.whatsapp}" target="_blank" rel="noopener noreferrer" class="contact-cta contact-cta--whatsapp btn-lift">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span class="contact-cta__title">WhatsApp</span>
            <span class="contact-cta__sub">Chat instantly</span>
          </a>
          <a href="${c.tel}" class="contact-cta contact-cta--phone btn-lift">
            <i data-lucide="phone" class="w-4 h-4"></i>
            <span class="contact-cta__title">Call</span>
            <span class="contact-cta__sub">${esc(c.phone)}</span>
          </a>
          <a href="${c.mailto}" class="contact-cta contact-cta--email btn-lift">
            <i data-lucide="mail" class="w-4 h-4"></i>
            <span class="contact-cta__title">Email</span>
            <span class="contact-cta__sub">${esc(c.email)}</span>
          </a>
        </div>`;
    },

    renderHeader(currentPage) {
      const s = S();
      const navLinks = s.nav.filter(n => !n.cta).map(n => `
        <li><a href="${n.href}" class="nav-link px-3 py-2 text-sm font-medium rounded-lg transition-colors ${n.page === currentPage ? 'text-gold' : 'text-muted dark:text-zinc-400 hover:text-navy dark:hover:text-white'}">${esc(n.label)}</a></li>
      `).join('');

      const mobileLinks = s.nav.map(n => `
        <li><a href="${n.href}" class="nav-mobile-link block px-3 py-3 text-base font-medium rounded-lg transition-colors ${n.cta ? 'mt-4 bg-navy text-white text-center' : 'text-ink dark:text-zinc-300 hover:bg-canvas dark:hover:bg-navy-secondary'}">${esc(n.label)}</a></li>
      `).join('');

      return `
        <header class="site-header fixed inset-x-0 top-0 z-50 transition-all duration-300" id="site-header">
          <nav class="max-w-8xl mx-auto px-6 flex items-center justify-between transition-all duration-300 site-header__nav" aria-label="Main navigation">
            <a href="index.html" class="flex items-center gap-2.5 z-10 group">
              <span class="w-9 h-9 flex items-center justify-center bg-navy dark:bg-gold text-gold dark:text-navy rounded-lg text-xs font-bold">VM</span>
              <span class="hidden sm:block font-semibold text-sm text-navy dark:text-white">${esc(s.name)}</span>
            </a>
            <ul class="hidden lg:flex items-center gap-1" role="list">${navLinks}</ul>
            <div class="flex items-center gap-2">
              <button type="button" id="theme-toggle" class="w-9 h-9 flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10 hover:bg-white dark:hover:bg-navy-secondary transition-colors" aria-label="Toggle dark mode">
                <i data-lucide="moon" class="w-4 h-4 icon-theme-dark"></i>
                <i data-lucide="sun" class="w-4 h-4 icon-theme-light hidden"></i>
              </button>
              <a href="${s.cv}" class="hidden md:inline-flex items-center gap-1.5 bg-gold text-navy text-sm font-semibold px-4 py-2 rounded-lg btn-lift" download><i data-lucide="download" class="w-4 h-4"></i> CV</a>
              <a href="index.html#contact" class="hidden md:inline-flex items-center gap-1.5 bg-navy dark:bg-white text-white dark:text-navy text-sm font-semibold px-4 py-2 rounded-lg btn-lift">Contact</a>
              <button type="button" id="nav-toggle" class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10" aria-expanded="false" aria-label="Toggle menu">
                <i data-lucide="menu" class="w-4 h-4 icon-menu"></i>
                <i data-lucide="x" class="w-4 h-4 icon-close hidden"></i>
              </button>
            </div>
          </nav>
          <div id="nav-overlay" class="nav-overlay hidden lg:hidden" aria-hidden="true"></div>
          <div id="nav-drawer" class="nav-drawer lg:hidden" aria-hidden="true">
            <ul class="flex flex-col gap-1 px-6 pt-20 pb-8" role="list">${mobileLinks}</ul>
            <div class="px-6 pb-8">
              <a href="${s.cv}" class="flex items-center justify-center gap-2 bg-gold text-navy font-semibold py-3 rounded-lg" download><i data-lucide="download" class="w-4 h-4"></i> Download CV</a>
            </div>
          </div>
        </header>`;
    },

    renderFooter() {
      const s = S();
      const year = new Date().getFullYear();
      return `
        <footer class="bg-navy text-white/70 border-t border-white/10">
          <div id="contact" class="max-w-8xl mx-auto px-6 pt-16 pb-12">
            <div class="max-w-2xl mx-auto text-center mb-8">
              <p class="section-label mb-3">Connect</p>
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">Let's Build Meaningful Impact Together</h2>
              <p class="text-white/55 text-sm md:text-base leading-relaxed">Open to strategic partnerships, speaking engagements, leadership consulting, and organizational development collaborations.</p>
            </div>
            <div class="max-w-3xl mx-auto mb-8">
              ${VM.layout.contactCTAs(true)}
            </div>
            <div class="flex flex-wrap justify-center gap-3 mb-6">
              <a href="${s.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-lift inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:border-gold transition-colors"><i data-lucide="linkedin" class="w-4 h-4"></i> LinkedIn</a>
              <a href="${s.cv}" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-4 py-2 rounded-lg text-sm" download><i data-lucide="download" class="w-4 h-4"></i> Download CV</a>
              <a href="speaking.html#booking" class="btn-lift inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:border-gold transition-colors"><i data-lucide="calendar" class="w-4 h-4"></i> Speaking Inquiries</a>
            </div>
            <p class="text-center text-white/45 text-sm flex items-center justify-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-gold"></i> ${esc(s.location)}</p>
          </div>
          <div class="border-t border-white/10">
            <div class="max-w-8xl mx-auto px-6 py-8 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div class="max-w-sm">
                <div class="flex items-center gap-2.5 mb-3">
                  <span class="w-9 h-9 flex items-center justify-center bg-gold text-navy rounded-lg text-xs font-bold">VM</span>
                  <div>
                    <p class="font-semibold text-white text-sm">${esc(s.name)}</p>
                    <p class="text-xs text-white/45">${esc(s.tagline)}</p>
                  </div>
                </div>
                <p class="text-sm text-white/45 leading-relaxed">International business development leader building partnerships and empowering youth across Africa.</p>
              </div>
              <nav class="footer-nav" aria-label="Footer navigation">
                <h3 class="footer-nav__label">Navigation</h3>
                <ul class="footer-nav__list">
                  <li><a href="index.html#about">About</a></li>
                  <li><a href="leadership.html">Leadership</a></li>
                  <li><a href="projects.html">Projects</a></li>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="speaking.html">Speaking</a></li>
                  <li><a href="media.html">Media</a></li>
                </ul>
              </nav>
            </div>
            <div class="max-w-8xl mx-auto px-6 pb-8 text-center sm:text-left text-xs text-white/40">
              <p>&copy; ${year} ${esc(s.name)}. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <button type="button" id="back-to-top" class="back-to-top" aria-label="Back to top" hidden>
          <i data-lucide="arrow-up" class="w-5 h-5"></i>
        </button>`;
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');
    const current = document.body.dataset.page || 'home';

    if (headerEl) headerEl.outerHTML = VM.layout.renderHeader(current);
    if (footerEl) footerEl.innerHTML = VM.layout.renderFooter();

    document.querySelectorAll('.nav-mobile-link').forEach(link => {
      link.addEventListener('click', () => window.VM?.ui?.closeNav?.());
    });
  });
})();
