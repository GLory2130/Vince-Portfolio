/**
 * Shared layout — header, footer, contact CTAs
 * Injects site chrome; mobile drawer is a sibling of the header (not nested).
 * @see documentation/ARCHITECTURE.md
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
    renderHeader(currentPage) {
      const s = S();
      const logo = s.logo || (VM.images && VM.images.logo) || 'assets/images/vincelogo.png';

      const c = s.contact;
      const isActive = n => n.page === currentPage;

      const navLinks = s.nav.filter(n => !n.cta).map(n => `
        <li>
          <a href="${n.href}" class="vm-nav__link${isActive(n) ? ' is-active' : ''}"${isActive(n) ? ' aria-current="page"' : ''}>${esc(n.label)}</a>
        </li>`).join('');

      const mobileLinks = s.nav.filter(n => !n.cta).map(n => `
        <li>
          <a href="${n.href}" class="nav-mobile-link${isActive(n) ? ' is-active' : ''}"${isActive(n) ? ' aria-current="page"' : ''}>${esc(n.label)}</a>
        </li>`).join('');

      return `
        <header class="site-header" id="site-header">
          <nav class="vm-nav" aria-label="Main navigation">
            <a href="index.html" class="vm-nav__brand brand-lockup" aria-label="${esc(s.name)} — Home">
              <img src="${esc(logo)}" alt="" class="brand-logo brand-logo--nav" width="1254" height="1254" decoding="async">
              <span class="brand-name">${esc(s.name)}</span>
            </a>

            <ul class="vm-nav__links" role="list">${navLinks}</ul>

            <div class="vm-nav__actions">

              <a href="index.html#contact" class="vm-nav__cta vm-btn vm-btn--primary">Discuss a Partnership</a>

              <button type="button" id="nav-toggle" class="vm-nav__icon-btn vm-nav__toggle"
                      aria-expanded="false" aria-controls="nav-drawer" aria-label="Open menu">
                <i data-lucide="menu" class="w-5 h-5 icon-menu" aria-hidden="true"></i>
                <i data-lucide="x" class="w-5 h-5 icon-close hidden" aria-hidden="true"></i>
              </button>
            </div>
          </nav>
        </header>

        <div id="nav-overlay" class="nav-overlay" hidden aria-hidden="true"></div>
        <div id="nav-drawer" class="nav-drawer" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Mobile navigation">
          <div class="nav-drawer__panel">
            <nav class="nav-drawer__nav" aria-label="Mobile navigation">
              <ul class="nav-drawer__list" role="list">
                ${mobileLinks}
                <li><a href="appendix.html" class="nav-mobile-link${currentPage === 'appendix' ? ' is-active' : ''}"${currentPage === 'appendix' ? ' aria-current="page"' : ''}>Appendix</a></li>
              </ul>
            </nav>
            <div class="nav-drawer__actions">
              <a href="${s.cv}" target="_blank" rel="noopener noreferrer" class="nav-drawer__cv nav-mobile-link">
                <i data-lucide="file-text" class="w-4 h-4" aria-hidden="true"></i>
                Download CV
              </a>
              <a href="${c.whatsapp}" target="_blank" rel="noopener noreferrer" class="nav-drawer__cv nav-mobile-link" aria-label="Message on WhatsApp at ${esc(c.phone)}">
                <i data-lucide="message-circle" class="w-4 h-4" aria-hidden="true"></i>
                WhatsApp
              </a>
              <a href="${c.tel}" class="nav-drawer__cv nav-mobile-link" aria-label="Call ${esc(c.phone)}">
                <i data-lucide="phone" class="w-4 h-4" aria-hidden="true"></i>
                ${esc(c.phone)}
              </a>
              <a href="index.html#contact" class="nav-drawer__contact nav-mobile-link">Discuss a Partnership</a>
            </div>
          </div>
        </div>`;
    },

    renderFooter() {
      const s = S();
      const img = VM.images || {};
      const logo = s.logo || img.logo || 'assets/images/vincelogo.png';
      const c = s.contact;
      const phoneDisplay = c.phone || s.phone || '+255 713 582 606';
      const year = new Date().getFullYear();
      const portrait = img.hero || img.profile || img.contact || '';

      return `
        <footer class="site-footer bg-navy text-white/70 border-t border-white/10">
          <div class="max-w-8xl mx-auto px-6 py-8 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div class="max-w-sm">
              <a href="index.html" class="brand-lockup brand-lockup--footer mb-3" aria-label="${esc(s.name)} — Home">
                <img src="${esc(logo)}" alt="${esc(s.name)} logo" class="brand-logo brand-logo--footer" width="1254" height="1254" loading="lazy" decoding="async">
              </a>
              <p class="font-semibold text-white text-sm mb-1">${esc(s.name)}</p>
              <p class="text-xs text-gold/90 font-medium mb-3">${esc(s.brandLine || 'Leadership • Strategy • Partnerships')}</p>
              <p class="text-sm text-white/45 leading-relaxed">Management consultant working across strategy, research and evaluation, partnerships and organizational leadership.</p>
            </div>
            <nav class="footer-nav" aria-label="Footer navigation">
              <h3 class="footer-nav__label">Navigation</h3>
              <ul class="footer-nav__list">
                <li><a href="index.html#profile">Profile</a></li>
                <li><a href="leadership.html">Leadership</a></li>
                <li><a href="projects.html">Selected Work</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="speaking.html">Speaking</a></li>
                <li><a href="appendix.html">Appendix</a></li>
                <li><a href="index.html#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="max-w-8xl mx-auto px-6 pb-8 text-center sm:text-left text-xs text-white/40">
            <p>&copy; ${year} ${esc(s.name)}. All rights reserved.${typeof VM.version === 'string' ? ` <span class="text-white/25">v${esc(VM.version)}</span>` : ''}</p>
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

    window.VM?.ui?.refreshIcons?.();
    window.VM?.ui?.initReveal?.();
  });
})();
