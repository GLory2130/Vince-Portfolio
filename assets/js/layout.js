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
            <i data-lucide="message-circle" class="w-6 h-6"></i>
            <span class="contact-cta__title">WhatsApp</span>
            <span class="contact-cta__sub">Chat instantly</span>
          </a>
          <a href="${c.tel}" class="contact-cta contact-cta--phone btn-lift">
            <i data-lucide="phone" class="w-6 h-6"></i>
            <span class="contact-cta__title">Call</span>
            <span class="contact-cta__sub">${esc(c.phone)}</span>
          </a>
          <a href="${c.mailto}" class="contact-cta contact-cta--email btn-lift">
            <i data-lucide="mail" class="w-6 h-6"></i>
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
      const c = s.contact;
      const year = new Date().getFullYear();
      return `
        <footer class="bg-navy text-white/70 border-t border-white/10">
          <div class="max-w-8xl mx-auto px-6 py-16">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <div class="flex items-center gap-2.5 mb-4">
                  <span class="w-10 h-10 flex items-center justify-center bg-gold text-navy rounded-lg text-sm font-bold">VM</span>
                  <div>
                    <p class="font-semibold text-white text-sm">${esc(s.name)}</p>
                    <p class="text-xs text-white/50">${esc(s.tagline)}</p>
                  </div>
                </div>
                <p class="text-sm text-white/50 leading-relaxed">International business development leader building partnerships and empowering youth across Africa.</p>
              </div>
              <div>
                <h3 class="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Navigation</h3>
                <ul class="space-y-2 text-sm">
                  <li><a href="index.html#about" class="hover:text-gold transition-colors">About</a></li>
                  <li><a href="leadership.html" class="hover:text-gold transition-colors">Leadership</a></li>
                  <li><a href="projects.html" class="hover:text-gold transition-colors">Projects</a></li>
                  <li><a href="gallery.html" class="hover:text-gold transition-colors">Gallery</a></li>
                  <li><a href="speaking.html" class="hover:text-gold transition-colors">Speaking</a></li>
                  <li><a href="media.html" class="hover:text-gold transition-colors">Media</a></li>
                </ul>
              </div>
              <div>
                <h3 class="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Connect</h3>
                <div class="flex flex-col gap-2 text-sm">
                  <a href="${c.whatsapp}" target="_blank" rel="noopener" class="contact-cta-inline contact-cta-inline--whatsapp"><i data-lucide="message-circle" class="w-4 h-4"></i> WhatsApp</a>
                  <a href="${c.tel}" class="contact-cta-inline contact-cta-inline--phone"><i data-lucide="phone" class="w-4 h-4"></i> ${esc(c.phone)}</a>
                  <a href="${c.mailto}" class="contact-cta-inline contact-cta-inline--email"><i data-lucide="mail" class="w-4 h-4"></i> ${esc(c.email)}</a>
                  <a href="${s.linkedin}" target="_blank" rel="noopener" class="hover:text-gold transition-colors flex items-center gap-2 mt-1"><i data-lucide="linkedin" class="w-4 h-4"></i> LinkedIn</a>
                </div>
              </div>
              <div>
                <h3 class="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Get in Touch</h3>
                ${VM.layout.contactCTAs(true)}
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/40">
              <p>&copy; ${year} ${esc(s.name)}. All rights reserved.</p>
              <p>${esc(s.location)}</p>
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
