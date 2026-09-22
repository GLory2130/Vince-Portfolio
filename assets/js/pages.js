/**
 * Vicent Manila — Page rendering & interactions
 * Renders page bodies from VM.data / gallery-data; project detail + lightbox UIs.
 * @see documentation/PAGE_DOCUMENTATION.md
 */
(function () {
  'use strict';

  const VM = window.VM;
  if (!VM) return;

  function esc(str) {
    const d = document.createElement('div');
    d.textContent = str ?? '';
    return d.innerHTML;
  }

  function delay(i, step) {
    return (i * (step || 0.05)).toFixed(2) + 's';
  }

  function imgPos(value) {
    const map = {
      center: 'center',
      top: 'center top',
      bottom: 'center bottom',
      left: 'left center',
      right: 'right center',
    };
    if (!value) return 'center';
    if (map[value]) return map[value];
    return String(value);
  }

  function normalizeGallery(project) {
    const items = Array.isArray(project.gallery) ? project.gallery : [];
    return items.map((item, i) => {
      if (typeof item === 'string') {
        return {
          src: item,
          alt: `${project.title} — gallery image ${i + 1}`,
          position: project.imagePosition || 'center',
        };
      }
      return {
        src: item.src,
        alt: item.alt || `${project.title} — gallery image ${i + 1}`,
        position: item.position || project.imagePosition || 'center',
      };
    }).filter(g => g.src);
  }

  const S = () => VM.site;
  const D = () => VM.data;

  VM.pages = {
    init() {
      const page = document.body.dataset.page;
      const main = document.getElementById('main-content');
      if (!main) return;

      const renderers = {
        home: this.renderHome,
        leadership: this.renderLeadership,
        projects: this.renderProjects,
        project: this.renderProject,
        gallery: this.renderGallery,
        speaking: this.renderSpeaking,
        appendix: this.renderAppendix,
      };

      if (renderers[page]) {
        main.innerHTML = renderers[page].call(this);
        this.afterRender(page);
      }
    },

    afterRender(page) {
      if (page === 'projects') this.initProjectFilters();
      if (page === 'gallery') this.initGallery();
      if (page === 'project') this.initProjectRedirect();
      VM.ui?.refreshIcons?.();
      VM.ui?.initReveal?.();
      this.applyInitialHash();
    },

    /**
     * Content is rendered after DOMContentLoaded, so the browser's native hash
     * scroll runs before the target element exists. Re-apply it once here.
     */
    applyInitialHash() {
      const id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      });
    },

    renderHome() {
      const s = S();
      const d = D();
      const img = VM.images || {};
      const featured = VM.featuredProjects().slice(0, 3);

      return `
        <!-- ============ HERO — expansive ============ -->
        <section class="vm-section--expansive vm-hero">
          <div class="vm-container vm-hero__grid">
            <div class="vm-hero__text">
              <p class="vm-eyebrow vm-eyebrow--ruled">${esc(d.hero.eyebrow)}</p>
              <h1 class="vm-display vm-hero__name">Vicent Manila</h1>
              <p class="vm-hero__headline">${esc(d.hero.headline)}</p>
              <p class="vm-lead vm-hero__summary">${esc(d.hero.summary)}</p>
              <div class="vm-hero__actions">
                <a class="vm-btn vm-btn--primary" href="projects.html">View Selected Work</a>
                <a class="vm-btn vm-btn--secondary" href="#profile">Executive Profile</a>
              </div>
              <p class="vm-caption vm-hero__location">${esc(d.hero.location)}</p>
            </div>
            <figure class="vm-hero__portrait">
              <div class="vm-img-frame vm-img--portrait-exec vm-img--portrait-tight vm-img-frame--shadow">
                <img class="vm-img" src="${esc(img.hero)}"
                     alt="Vicent Manila, management consultant, Dar es Salaam"
                     width="900" height="1125" fetchpriority="high" decoding="async"
                     style="object-position:50% 8%">
              </div>
            </figure>
          </div>
        </section>

        <!-- ============ CREDIBILITY — compact ============ -->
        <section class="vm-section--compact vm-section--subtle">
          <div class="vm-container">
            <h2 class="vm-visually-hidden">Professional standing</h2>
            <ul class="vm-proof">
              ${d.hero.proof.map(t => `<li class="vm-proof__item">${esc(t)}</li>`).join('')}
            </ul>
          </div>
        </section>

        <!-- ============ SELECTED WORK — expansive ============ -->
        <section class="vm-section--expansive" id="work">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Selected Work</p>
            <h2 class="vm-display-lg vm-mb-lg">Case studies in partnership<br>and organizational growth</h2>
          </div>
          <div class="vm-container vm-features">
            ${featured.map((p, i) => VM.pages.projectFeature(p, i)).join('')}
          </div>
          <div class="vm-container vm-mt-lg">
            <a class="vm-btn vm-btn--tertiary" href="projects.html">View all case studies</a>
          </div>
        </section>

        <!-- ============ EXTERNAL RESOURCES — visual editorial cards ============ -->
        ${d.externalResources?.length ? `
        <section class="vm-section vm-publications-section" aria-labelledby="home-external-resources-title">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Articles &amp; Events</p>
            <div class="vm-publications-head">
              <h2 id="home-external-resources-title" class="vm-display-md">External resources</h2>
              <p>Selected public coverage and event records connected to the work featured in this portfolio.</p>
            </div>
            <div class="vm-publication-grid">
              ${d.externalResources.map((resource, i) => `
                <article class="vm-publication">
                  <a class="vm-publication__media vm-img-frame"
                     href="${esc(resource.url)}"
                     target="_blank" rel="noopener noreferrer"
                     aria-label="${esc(resource.title)} — open external resource">
                    <img class="vm-img"
                         src="${esc(resource.image)}"
                         alt="${esc(resource.imageAlt || resource.title)}"
                         width="1200" height="750"
                         loading="lazy" decoding="async"
                         style="object-position:${imgPos(resource.imagePosition)}">
                  </a>
                  <div class="vm-publication__body">
                    <p class="vm-publication__meta">
                      <span>${esc(resource.type || 'External resource')}</span>
                      <span aria-hidden="true">·</span>
                      <span>${esc(resource.source || '')}</span>
                    </p>
                    <h3 class="vm-publication__title">
                      <a href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">
                        ${esc(resource.title)}
                      </a>
                    </h3>
                    <a class="vm-inline-external" href="${esc(resource.url)}"
                       target="_blank" rel="noopener noreferrer">
                      Open resource
                      <i data-lucide="external-link" class="w-4 h-4" aria-hidden="true"></i>
                    </a>
                  </div>
                </article>`).join('')}
            </div>
          </div>
        </section>` : ''}

        <!-- ============ EXECUTIVE PROFILE — editorial, no cards ============ -->
        <section class="vm-section vm-section--subtle" id="profile">
          <div class="vm-container vm-profile">
            <div class="vm-profile__intro">
              <p class="vm-eyebrow vm-eyebrow--ruled">Executive Profile</p>
              <div class="vm-prose vm-profile__body"><p>${esc(d.about.summary)}</p></div>
              <dl class="vm-facts">
                <div class="vm-facts__row">
                  <dt class="vm-eyebrow">Education</dt>
                  <dd>${esc(d.about.education.degree)}<br>
                      <span class="vm-caption">${esc(d.about.education.school)} · ${esc(d.about.education.period)}</span></dd>
                </div>
                <div class="vm-facts__row">
                  <dt class="vm-eyebrow">Training</dt>
                  <dd>${esc(d.about.training.title)}<br>
                      <span class="vm-caption">${esc(d.about.training.provider)} · Completed ${esc(d.about.training.completed)}</span></dd>
                </div>
                <div class="vm-facts__row">
                  <dt class="vm-eyebrow">Languages</dt>
                  <dd>${d.about.languages.map(l => esc(l.name) + ' <span class="vm-caption">(' + esc(l.level) + ')</span>').join(' · ')}</dd>
                </div>
                <div class="vm-facts__row">
                  <dt class="vm-eyebrow">Research</dt>
                  <dd>${esc(d.about.research.title)}<br>
                      <span class="vm-caption">${esc(d.about.research.period)}</span></dd>
                </div>
                <div class="vm-facts__row">
                  <dt class="vm-eyebrow">Based in</dt>
                  <dd>Dar es Salaam, Tanzania</dd>
                </div>
              </dl>
            </div>
            <figure class="vm-profile__figure">
              <div class="vm-img-frame vm-img--portrait-ed vm-img--portrait-tight">
                <img class="vm-img" src="${esc(img.profile)}"
                     alt="Vicent Manila at a national leadership engagement"
                     width="800" height="1066" loading="lazy" decoding="async"
                     style="object-position:50% 8%">
              </div>
            </figure>
          </div>
        </section>

        <!-- ============ LEADERSHIP PHILOSOPHY — signature editorial moment ============ -->
        <section class="vm-section vm-philosophy">
          <div class="vm-container vm-philosophy__grid">
            <p class="vm-eyebrow vm-eyebrow--ruled">Leadership Philosophy</p>
            <blockquote class="vm-quote vm-quote--wide">${esc(d.about.philosophy)}</blockquote>
          </div>
        </section>

        <!-- ============ EXPERTISE INDEX — numbered, not carded ============ -->
        <section class="vm-section" id="expertise">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Areas of Expertise</p>
            <h2 class="vm-display-md vm-mb-lg">Six domains of practice</h2>
            <div class="vm-index">
              ${d.about.expertise.map((e, i) => `
                <div class="vm-index__item">
                  <span class="vm-index__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
                  <h3 class="vm-index__title">${esc(e.title)}</h3>
                  <div class="vm-index__content">
                    <p class="vm-index__desc">${esc(e.desc)}</p>
                    <p class="vm-index__comps">${e.competencies.map(esc).join(' · ')}</p>
                  </div>
                </div>`).join('')}
            </div>
            <div class="vm-evidence-bridge">
              <p>These areas of practice are supported by the case studies and primary-source documents published in this portfolio.</p>
              <a class="vm-btn vm-btn--tertiary" href="projects.html">Explore the evidence behind the work</a>
            </div>
          </div>
        </section>

        <!-- ============ IMPACT — hairline row, no dark band, no counters ============ -->
        <section class="vm-section vm-section--subtle">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Selected Impact</p>
            <h2 class="vm-display-md vm-mb-lg">Measurable outcomes</h2>
            <div class="vm-metrics">
              ${d.impactStats.map(m => `
                <div class="vm-metric">
                  <span class="vm-metric__value">${esc(m.value)}</span>
                  <span class="vm-metric__label">${esc(m.label)}</span>
                  <span class="vm-metric__note">${esc(m.note)}</span>
                </div>`).join('')}
            </div>
          </div>
        </section>

        <!-- ============ CAREER — chronology preview ============ -->
        <section class="vm-section" id="experience">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Leadership Journey</p>
            <h2 class="vm-display-md vm-mb-lg">Career chronology</h2>
            <div class="vm-chrono">
              ${d.experience.slice(0, 4).map(r => VM.pages.chronoItem(r)).join('')}
            </div>
            <div class="vm-mt-lg">
              <a class="vm-btn vm-btn--tertiary" href="leadership.html">View full leadership experience</a>
            </div>
          </div>
        </section>

        <!-- ============ INTERNATIONAL FOOTPRINT ============ -->
        <section class="vm-section vm-section--subtle">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">International Footprint</p>
            <h2 class="vm-display-md vm-mb-lg">Where the work has been</h2>
            <div class="vm-index">
              ${d.about.international.map(x => `
                <div class="vm-geo">
                  <h3 class="vm-geo__country">${esc(x.country)}</h3>
                  <p class="vm-geo__role">${esc(x.role)}</p>
                </div>`).join('')}
            </div>
            <div class="vm-partners">
              <p class="vm-eyebrow">Organizations &amp; Partners</p>
              <p class="vm-partners__list">${d.corporatePartners.map(x => esc(x.name)).concat(d.organizations.map(esc)).join(' · ')}</p>
            </div>
          </div>
        </section>

        <!-- ============ PHOTOGRAPHY — immersive ============ -->
        <section class="vm-section--expansive">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Leadership in Action</p>
            <h2 class="vm-display-md vm-mb-lg">A visual archive</h2>
          </div>
          <div class="vm-container--wide vm-photo-grid">
            ${[
              { src: img.speakingForum, alt: 'Vicent Manila addressing a leadership forum' },
              { src: img.partnership,   alt: 'Corporate partnership engagement' },
              { src: img.conference,    alt: 'National conference delivery' },
              { src: img.eventTeam,     alt: 'National leadership team' },
            ].map((g) => `
              <figure class="vm-img-frame vm-img--event vm-photo-grid__item">
                <img class="vm-img" src="${esc(g.src)}" alt="${esc(g.alt)}"
                     width="900" height="675" loading="lazy" decoding="async">
              </figure>`).join('')}
          </div>
          <div class="vm-container vm-mt-lg">
            <a class="vm-btn vm-btn--tertiary" href="gallery.html">View the full gallery</a>
          </div>
        </section>

        <!-- ============ CONTACT — concise ============ -->
        <section class="vm-section vm-section--navy" id="contact">
          <div class="vm-container vm-contact">
            <div>
              <p class="vm-eyebrow vm-eyebrow--ruled">Contact</p>
              <h2 class="vm-display-md">Discuss a partnership</h2>
              <p class="vm-lead vm-mt-sm">Open to conversations on strategic partnerships, business development, and speaking engagements.</p>
            </div>
            <div class="vm-contact__actions">
              <a class="vm-btn vm-btn--primary" href="${esc(s.contact.mailto)}">Email</a>
              ${VM.pages.contactDirect(true)}
              <a class="vm-btn vm-btn--secondary vm-btn--on-navy" href="${esc(s.linkedin)}" rel="noopener" target="_blank">LinkedIn</a>
            </div>
          </div>
          <div class="vm-container">
            <p class="vm-caption vm-contact__number">${esc(s.contact.phone)} · Dar es Salaam, Tanzania</p>
          </div>
        </section>`;
    },

    /**
     * Direct-contact actions. WhatsApp and phone are the primary channels in
     * this market, so they are surfaced as buttons rather than buried in text.
     * @param {boolean} onNavy Use the inverse-surface button variant.
     */
    contactDirect(onNavy) {
      const c = S().contact;
      const v = onNavy ? ' vm-btn--on-navy' : '';
      return `
        <a class="vm-btn vm-btn--secondary${v}" href="${esc(c.whatsapp)}"
           target="_blank" rel="noopener noreferrer"
           aria-label="Message Vicent Manila on WhatsApp at ${esc(c.phone)}">
          <i data-lucide="message-circle" class="w-4 h-4" aria-hidden="true"></i>
          WhatsApp
        </a>
        <a class="vm-btn vm-btn--secondary${v}" href="${esc(c.tel)}"
           aria-label="Call Vicent Manila on ${esc(c.phone)}">
          <i data-lucide="phone" class="w-4 h-4" aria-hidden="true"></i>
          Call
        </a>`;
    },

    /** One chronology entry. Shared by home and leadership. No cards. */
    chronoItem(r) {
      return `
        <article class="vm-chrono__item">
          <p class="vm-chrono__period">${esc(r.period)}</p>
          <div>
            <h3 class="vm-chrono__role">${esc(r.title)}${r.current ? '<span class="vm-chrono__current">Current</span>' : ''}</h3>
            <p class="vm-chrono__org">${esc(r.organization)} · ${esc(r.country)}</p>
            ${r.mandate ? `<p class="vm-chrono__mandate">${esc(r.mandate)}</p>` : ''}
            ${(r.outcomes && r.outcomes.length) ? `
            <ul class="vm-chrono__outcomes">
              ${r.outcomes.map(o => `<li>${esc(o)}</li>`).join('')}
            </ul>` : ''}
          </div>
        </article>`;
    },

    projectCard(p, i) {
      const pos = imgPos(p.imagePosition);
      return `
        <article class="reveal project-card group" style="--d:${delay(i, 0.08)}; --img-pos:${pos}">
          <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="project-card__media" aria-label="${esc(p.title)} case study">
            <img src="${esc(p.image)}" alt="${esc(p.title)}" width="900" height="562" loading="lazy" decoding="async">
          </a>
          <div class="project-card__body">
            <span class="project-card__category">${esc(p.category_label)}</span>
            <h3 class="project-card__title">
              <a href="project.html?slug=${encodeURIComponent(p.slug)}">${esc(p.title)}</a>
            </h3>
            <p class="project-card__summary">${esc(p.summary)}</p>
            <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="project-card__cta">View case study <i data-lucide="arrow-right" class="w-4 h-4" aria-hidden="true"></i></a>
          </div>
        </article>`;
    },

    /** Case-study feature. Full-bleed image, then editorial text beneath. Not a card. */
    /**
     * @param {number} [level=3] Heading level. The projects index has no
     *   intermediate h2, so it passes 2 to keep the outline unbroken.
     */
    projectFeature(p, i, level) {
      const pos = imgPos(p.imagePosition);
      const h = level === 2 ? 'h2' : 'h3';
      return `
        <article class="vm-feature">
          <a class="vm-feature__media vm-img-frame vm-img--case-hero"
             href="project.html?slug=${encodeURIComponent(p.slug)}"
             aria-label="${esc(p.title)} — view case study">
            <img class="vm-img" src="${esc(p.image)}" alt="${esc(p.title)}"
                 width="1100" height="733" loading="lazy" decoding="async"
                 style="object-position:${pos}">
          </a>
          <div class="vm-feature__body">
            <p class="vm-eyebrow">
              <span class="vm-feature__num">${String(i + 1).padStart(2, '0')}</span>
              ${esc(p.category_label)}
            </p>
            <${h} class="vm-feature__title">
              <a href="project.html?slug=${encodeURIComponent(p.slug)}">${esc(p.title)}</a>
            </${h}>
            <p class="vm-feature__summary">${esc(p.summary)}</p>
            ${p.results && p.results.length
              ? `<p class="vm-feature__outcome">${esc(p.results[0])}</p>` : ''}
            <a class="vm-btn vm-btn--tertiary" href="project.html?slug=${encodeURIComponent(p.slug)}">View Case Study</a>
          </div>
        </article>`;
    },

    /**
     * Leadership page. Thesis → chronology → outcomes → footprint → CTA.
     * The former dark six-counter band and nested journey panels are removed.
     */
    renderLeadership() {
      const d = D();
      return `
        <section class="vm-section--expansive vm-page-head">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Leadership</p>
            <h1 class="vm-display">Leadership<br>Experience</h1>
            <p class="vm-lead vm-mt-md">${esc(d.about.mission)}</p>
          </div>
        </section>

        <section class="vm-section vm-philosophy">
          <div class="vm-container vm-philosophy__grid">
            <p class="vm-eyebrow vm-eyebrow--ruled">Leadership Philosophy</p>
            <blockquote class="vm-quote vm-quote--wide">${esc(d.about.philosophy)}</blockquote>
          </div>
        </section>

        <section class="vm-section vm-section--subtle">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Selected Impact</p>
            <h2 class="vm-display-md vm-mb-lg">Measurable outcomes</h2>
            <div class="vm-metrics">
              ${d.impactStats.map(m => `
                <div class="vm-metric">
                  <span class="vm-metric__value">${esc(m.value)}</span>
                  <span class="vm-metric__label">${esc(m.label)}</span>
                  <span class="vm-metric__note">${esc(m.note)}</span>
                </div>`).join('')}
            </div>
          </div>
        </section>

        <section class="vm-section">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Career Chronology</p>
            <h2 class="vm-display-md vm-mb-lg">Roles held</h2>
            <div class="vm-chrono">
              ${d.experience.map(r => VM.pages.chronoItem(r)).join('')}
            </div>
          </div>
        </section>

        <section class="vm-section vm-section--subtle">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">International Footprint</p>
            <h2 class="vm-display-md vm-mb-lg">Where the work has been</h2>
            <div class="vm-index">
              ${d.about.international.map(x => `
                <div class="vm-geo">
                  <h3 class="vm-geo__country">${esc(x.country)}</h3>
                  <p class="vm-geo__role">${esc(x.role)}</p>
                </div>`).join('')}
            </div>
            <div class="vm-partners">
              <p class="vm-eyebrow">Organizations &amp; Partners</p>
              <p class="vm-partners__list">${d.corporatePartners.map(x => esc(x.name)).concat(d.organizations.map(esc)).join(' · ')}</p>
            </div>
          </div>
        </section>

        <section class="vm-section--compact vm-section--navy">
          <div class="vm-container vm-contact">
            <div>
              <h2 class="vm-display-md">Discuss a partnership</h2>
            </div>
            <div class="vm-contact__actions">
              <a class="vm-btn vm-btn--primary" href="index.html#contact">Get in Touch</a>
              ${VM.pages.contactDirect(true)}
              <a class="vm-btn vm-btn--secondary vm-btn--on-navy" href="projects.html">View Selected Work</a>
            </div>
          </div>
        </section>`;
    },

    /**
     * Selected Work index. Editorial case-study list, not a card grid.
     * Filters expose aria-pressed and announce results via a live region.
     */
    renderProjects() {
      const d = D();
      const filters = Object.entries(d.projectCategories).map(([key, label]) =>
        `<button type="button" data-filter="${esc(key)}" class="vm-filter${key === 'all' ? ' is-active' : ''}" aria-pressed="${key === 'all'}">${esc(label)}</button>`
      ).join('');

      return `
        <section class="vm-page-head vm-section--compact">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Selected Work</p>
            <h1 class="vm-display">Case Studies</h1>
            <p class="vm-lead vm-mt-md">Selected assignments and leadership work presented as case studies, with supporting documents linked where public evidence is available.</p>
          </div>
        </section>

        <section class="vm-section">
          <div class="vm-container">
            <div class="vm-filters" id="project-filters" role="group" aria-label="Filter case studies by category">${filters}</div>
            <p class="vm-visually-hidden" id="filter-status" role="status" aria-live="polite"></p>
          </div>
          <div class="vm-container vm-features vm-mt-lg" id="projects-grid">
            ${d.projects.map((p, i) => `<div class="vm-project-item" data-category="${esc(p.category)}">${this.projectFeature(p, i, 2)}</div>`).join('')}
          </div>
        </section>

        <section class="vm-section--compact vm-section--navy">
          <div class="vm-container vm-contact">
            <div><h2 class="vm-display-md">Discuss a partnership</h2></div>
            <div class="vm-contact__actions">
              <a class="vm-btn vm-btn--primary" href="index.html#contact">Get in Touch</a>
              ${VM.pages.contactDirect(true)}
            </div>
          </div>
        </section>`;
    },

    renderProject() {
      return `<div id="project-root"></div>`;
    },

    initProjectRedirect() {
      const root = document.getElementById('project-root');
      const slug = new URLSearchParams(location.search).get('slug');
      const project = VM.getProject(slug);

      if (!project) {
        location.href = 'projects.html';
        return;
      }

      document.title = `${project.title} — ${S().name}`;

      const heroPos = imgPos(project.imagePosition);
      const galleryItems = normalizeGallery(project);

      const gallery = galleryItems.length ? `
        <section class="project-gallery-section" aria-labelledby="project-gallery-heading">
          <div class="project-content max-w-8xl mx-auto px-6">
            <div class="project-section-head">
              <p class="section-label mb-3">Visual Story</p>
              <h2 id="project-gallery-heading" class="section-title text-navy dark:text-white">Project Gallery</h2>
              <div class="project-gold-rule" aria-hidden="true"></div>
            </div>
            <div class="project-gallery" id="project-gallery-grid">
              ${galleryItems.map((img, i) => `
                <figure class="project-gallery__item reveal" style="--d:${delay(i, 0.05)}; --img-pos:${imgPos(img.position)}">
                  <button type="button" class="project-gallery__btn" data-project-gallery-index="${i}" aria-label="View ${esc(img.alt)}">
                    <img src="${esc(img.src)}" alt="${esc(img.alt)}" loading="lazy" decoding="async">
                  </button>
                </figure>`).join('')}
            </div>
          </div>
          <div id="project-lightbox" class="lightbox hidden" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Project image viewer">
            <div class="lightbox__shell">
              <button type="button" class="lightbox__btn lightbox__close" id="project-lightbox-close" aria-label="Close image viewer"><i data-lucide="x" class="w-5 h-5"></i></button>
              <button type="button" class="lightbox__btn lightbox__prev" id="project-lightbox-prev" aria-label="Previous image"><i data-lucide="chevron-left" class="w-5 h-5"></i></button>
              <button type="button" class="lightbox__btn lightbox__next" id="project-lightbox-next" aria-label="Next image"><i data-lucide="chevron-right" class="w-5 h-5"></i></button>
              <figure class="lightbox__figure">
                <img id="project-lightbox-image" alt="">
                <figcaption class="lightbox__caption">
                  <h3 id="project-lightbox-title"></h3>
                  <p id="project-lightbox-caption"></p>
                </figcaption>
                <p class="lightbox__counter" id="project-lightbox-counter" aria-live="polite"></p>
              </figure>
            </div>
          </div>
        </section>` : '';

      const related = project.related?.length ? `
        <section class="project-related-section" aria-labelledby="related-projects-heading">
          <div class="project-content max-w-8xl mx-auto px-6">
            <div class="project-section-head">
              <p class="section-label mb-3">Continue Exploring</p>
              <h2 id="related-projects-heading" class="section-title text-navy dark:text-white">Related Projects</h2>
              <div class="project-gold-rule" aria-hidden="true"></div>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              ${project.related.map((sl, i) => {
                const rel = VM.getProject(sl);
                if (!rel) return '';
                const rPos = imgPos(rel.imagePosition);
                return `
                  <a href="project.html?slug=${encodeURIComponent(rel.slug)}" class="reveal project-related group" style="--d:${delay(i, 0.06)}; --img-pos:${rPos}">
                    <div class="project-related__media">
                      <img src="${esc(rel.image)}" alt="${esc(rel.title)}" loading="lazy" decoding="async">
                    </div>
                    <div class="project-related__body">
                      <p class="project-card__category">${esc(rel.category_label)}</p>
                      <p class="project-related__title">${esc(rel.title)}</p>
                      <p class="project-related__summary">${esc(rel.summary)}</p>
                      <span class="project-card__cta">View case study <i data-lucide="arrow-right" class="w-4 h-4" aria-hidden="true"></i></span>
                    </div>
                  </a>`;
              }).join('')}
            </div>
          </div>
        </section>` : '';

      root.innerHTML = `
        <section class="project-hero" aria-labelledby="project-title" style="--img-pos:${heroPos}">
          <div class="project-hero__media">
            <img src="${esc(project.image)}" alt="${esc(project.title)}" class="project-hero__img" width="1920" height="1080" fetchpriority="high" decoding="async">
            <div class="project-hero__scrim" aria-hidden="true"></div>
          </div>
          <div class="project-hero__content">
            <div class="project-hero__meta">
              <span>${esc(project.category_label)}</span>
              <span class="project-hero__dot" aria-hidden="true"></span>
              <span>${esc(project.year)}</span>
            </div>
            <h1 id="project-title" class="project-hero__title">${esc(project.title)}</h1>
            <p class="project-hero__summary">${esc(project.summary)}</p>
          </div>
        </section>

        <section class="project-overview-section" aria-label="Project case study">
          <div class="project-content project-content--prose max-w-8xl mx-auto px-6">
            <div class="prose-cs project-case">
              <h2>Overview</h2>
              <p>${esc(project.overview)}</p>
              <h2>Challenge</h2>
              <p>${esc(project.challenge)}</p>
              <h2>Objectives</h2>
              <ul>${project.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul>
              <h2>Role</h2>
              <p>${esc(project.role)}</p>
              <h2>Strategy</h2>
              <p>${esc(project.strategy)}</p>
              <h2>Execution</h2>
              <p>${esc(project.execution)}</p>
              ${project.resources?.length ? `
                <h2>Evidence &amp; Resources</h2>
                <div class="vm-project-resources" aria-label="Supporting evidence">
                  ${project.resources.map(resource => `
                    <a class="vm-resource-link" href="${esc(resource.href)}"
                       target="_blank" rel="noopener noreferrer">
                      <span>
                        <strong>${esc(resource.label)}</strong>
                        <small>${esc(resource.type || 'Supporting resource')}</small>
                      </span>
                      <i data-lucide="external-link" class="w-4 h-4" aria-hidden="true"></i>
                    </a>`).join('')}
                </div>` : ''}
            </div>
          </div>
        </section>

        ${gallery}

        <section class="project-impact-section" aria-labelledby="project-impact-heading">
          <div class="project-content max-w-8xl mx-auto px-6">
            <div class="project-section-head project-section-head--light">
              <p class="section-label mb-3">Outcomes</p>
              <h2 id="project-impact-heading" class="section-title text-white">Impact Metrics</h2>
              <div class="project-gold-rule" aria-hidden="true"></div>
            </div>
            <ul class="project-impact-list">
              ${project.results.map((r, i) => `
                <li class="reveal project-impact-item" style="--d:${delay(i, 0.05)}">
                  <span class="project-impact-item__mark" aria-hidden="true"></span>
                  <span>${esc(r)}</span>
                </li>`).join('')}
            </ul>
            <p class="project-impact-statement reveal">${esc(project.impact)}</p>
          </div>
        </section>

        ${related}`;

      this.initProjectGallery(galleryItems);
    },

    initProjectGallery(items) {
      const lightbox = document.getElementById('project-lightbox');
      if (!lightbox || !items?.length) return;

      let current = 0;
      let lastTrigger = null;
      let touchX = null;

      const imgEl = document.getElementById('project-lightbox-image');
      const titleEl = document.getElementById('project-lightbox-title');
      const captionEl = document.getElementById('project-lightbox-caption');
      const counterEl = document.getElementById('project-lightbox-counter');

      const showSlide = (index) => {
        current = ((index % items.length) + items.length) % items.length;
        const item = items[current];
        if (imgEl) {
          imgEl.src = item.src;
          imgEl.alt = item.alt;
        }
        if (titleEl) titleEl.textContent = item.alt || '';
        if (captionEl) captionEl.textContent = '';
        if (counterEl) counterEl.textContent = `${current + 1} / ${items.length}`;
      };

      const openLightbox = (index) => {
        VM.ui?.closeNav?.();
        showSlide(index);
        lightbox.classList.remove('hidden');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
        document.getElementById('project-lightbox-close')?.focus();
        VM.ui?.refreshIcons?.();
      };

      const closeLightbox = () => {
        lightbox.classList.add('hidden');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        if (imgEl) imgEl.removeAttribute('src');
        lastTrigger?.focus?.();
      };

      document.querySelectorAll('[data-project-gallery-index]').forEach(btn => {
        btn.addEventListener('click', () => {
          lastTrigger = btn;
          openLightbox(parseInt(btn.dataset.projectGalleryIndex, 10));
        });
      });

      document.getElementById('project-lightbox-close')?.addEventListener('click', closeLightbox);
      document.getElementById('project-lightbox-prev')?.addEventListener('click', () => showSlide(current - 1));
      document.getElementById('project-lightbox-next')?.addEventListener('click', () => showSlide(current + 1));

      lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
      });

      const onKey = (e) => {
        if (lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showSlide(current - 1);
        if (e.key === 'ArrowRight') showSlide(current + 1);
      };
      document.addEventListener('keydown', onKey);

      lightbox.addEventListener('touchstart', e => {
        touchX = e.changedTouches[0]?.screenX ?? null;
      }, { passive: true });
      lightbox.addEventListener('touchend', e => {
        if (touchX == null) return;
        const dx = (e.changedTouches[0]?.screenX ?? touchX) - touchX;
        if (Math.abs(dx) > 50) showSlide(current + (dx < 0 ? 1 : -1));
        touchX = null;
      }, { passive: true });
    },

    renderGallery() {
      const filters = Object.entries(VM.galleryFilters || { all: 'All' }).map(([key, label]) =>
        `<button type="button" data-gallery-filter="${esc(key)}" class="vm-filter gallery-filter-btn${key === 'all' ? ' is-active' : ''}" aria-pressed="${key === 'all' ? 'true' : 'false'}">${esc(label)}</button>`
      ).join('');

      return `
        <section class="vm-page-head vm-section--compact" id="gallery-page">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Leadership in Action</p>
            <h1 class="vm-display">Gallery</h1>
            <p class="vm-lead vm-mt-md">A visual archive of leadership engagements, corporate partnerships, speaking sessions, and international collaboration across East Africa.</p>
          </div>
        </section>
        <section class="vm-section">
          <div class="vm-container">
            <div class="vm-filters" id="gallery-filters" role="group" aria-label="Gallery categories">${filters}</div>
            <p id="gallery-count" class="vm-caption vm-mt-md" aria-live="polite"></p>
          </div>
          <div class="vm-container--wide vm-mt-lg">
            <div class="gallery-masonry" id="gallery-grid"></div>
            <p id="gallery-empty" class="hidden vm-caption" style="text-align:center;padding:4rem 0">No images in this category.</p>
          </div>
        </section>
        <div id="gallery-lightbox" class="lightbox hidden" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Image viewer">
          <div class="lightbox__shell">
            <button type="button" class="lightbox__btn lightbox__close" id="lightbox-close" aria-label="Close gallery viewer"><i data-lucide="x" class="w-5 h-5"></i></button>
            <button type="button" class="lightbox__btn lightbox__prev" id="lightbox-prev" aria-label="Previous image"><i data-lucide="chevron-left" class="w-5 h-5"></i></button>
            <button type="button" class="lightbox__btn lightbox__next" id="lightbox-next" aria-label="Next image"><i data-lucide="chevron-right" class="w-5 h-5"></i></button>
            <figure class="lightbox__figure">
              <img id="lightbox-image" alt="">
              <figcaption class="lightbox__caption">
                <h2 id="lightbox-title"></h2>
                <p id="lightbox-caption"></p>
              </figcaption>
              <p class="lightbox__counter" id="lightbox-counter" aria-live="polite"></p>
            </figure>
          </div>
        </div>`;
    },

    initGallery() {
      const items = VM.galleryImages || [];
      const grid = document.getElementById('gallery-grid');
      const lightbox = document.getElementById('gallery-lightbox');
      const empty = document.getElementById('gallery-empty');
      const countEl = document.getElementById('gallery-count');
      if (!grid || !lightbox) return;

      let category = 'all';
      let filtered = items.slice();
      let current = 0;
      let lastTrigger = null;
      let touchX = null;

      const imgEl = document.getElementById('lightbox-image');
      const titleEl = document.getElementById('lightbox-title');
      const captionEl = document.getElementById('lightbox-caption');
      const counterEl = document.getElementById('lightbox-counter');

      const render = () => {
        filtered = items.filter(i => category === 'all' || i.category === category);
        if (countEl) {
          countEl.textContent = filtered.length
            ? `${filtered.length} image${filtered.length === 1 ? '' : 's'}`
            : '';
        }
        empty?.classList.toggle('hidden', filtered.length > 0);
        grid.innerHTML = filtered.map((item, idx) => {
          const thumb = item.thumb || item.src;
          const eager = idx < 4;
          return `
            <figure class="gallery-card" data-gallery-index="${idx}" tabindex="0" role="button" aria-label="View ${esc(item.alt)}">
              <div class="gallery-card__media">
                <img src="${esc(thumb)}" alt="${esc(item.alt)}" class="${item.rotate180 ? 'image-rotate-180' : ''}" width="${item.width || ''}" height="${item.height || ''}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
                <div class="gallery-card__overlay" aria-hidden="true"><span>${esc((VM.galleryFilters && VM.galleryFilters[item.category]) || item.category)}</span></div>
              </div>
              <figcaption class="gallery-card__meta">
                <span class="vm-eyebrow">${esc((VM.galleryFilters && VM.galleryFilters[item.category]) || item.category)}</span>
                <p class="gallery-card__title">${esc(item.title)}</p>
                <p class="gallery-card__caption">${esc(item.caption)}</p>
              </figcaption>
            </figure>`;
        }).join('');

        grid.querySelectorAll('.gallery-card').forEach(el => {
          const open = () => {
            lastTrigger = el;
            openLightbox(parseInt(el.dataset.galleryIndex, 10));
          };
          el.addEventListener('click', open);
          el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              open();
            }
          });
        });

        VM.ui?.refreshIcons?.();
        VM.ui?.initReveal?.();
      };

      const showSlide = (index) => {
        if (!filtered.length) return;
        current = ((index % filtered.length) + filtered.length) % filtered.length;
        const item = filtered[current];
        if (imgEl) {
          imgEl.src = item.src;
          imgEl.alt = item.alt;
          imgEl.classList.toggle('image-rotate-180', Boolean(item.rotate180));
        }
        if (titleEl) titleEl.textContent = item.title || '';
        if (captionEl) captionEl.textContent = item.caption || '';
        if (counterEl) counterEl.textContent = `${current + 1} / ${filtered.length}`;
      };

      const openLightbox = (index) => {
        VM.ui?.closeNav?.();
        showSlide(index);
        lightbox.classList.remove('hidden');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
        document.getElementById('lightbox-close')?.focus();
        VM.ui?.refreshIcons?.();
      };

      const closeLightbox = () => {
        lightbox.classList.add('hidden');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        if (imgEl) imgEl.removeAttribute('src');
        lastTrigger?.focus?.();
      };

      document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
      document.getElementById('lightbox-prev')?.addEventListener('click', () => showSlide(current - 1));
      document.getElementById('lightbox-next')?.addEventListener('click', () => showSlide(current + 1));

      lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
      });

      const onKey = (e) => {
        if (lightbox.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showSlide(current - 1);
        if (e.key === 'ArrowRight') showSlide(current + 1);
      };
      document.addEventListener('keydown', onKey);

      lightbox.addEventListener('touchstart', e => {
        touchX = e.changedTouches[0]?.screenX ?? null;
      }, { passive: true });
      lightbox.addEventListener('touchend', e => {
        if (touchX == null) return;
        const dx = (e.changedTouches[0]?.screenX ?? touchX) - touchX;
        if (Math.abs(dx) > 50) showSlide(current + (dx < 0 ? 1 : -1));
        touchX = null;
      }, { passive: true });

      document.querySelectorAll('[data-gallery-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          category = btn.dataset.galleryFilter;
          document.querySelectorAll('.gallery-filter-btn').forEach(b => {
            const active = b === btn;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-pressed', active ? 'true' : 'false');
          });
          render();
        });
      });

      render();
    },

    /**
     * Speaking page. Positioning -> topics -> engagements -> photography -> booking.
     * Topics are an editorial index; engagements are hairline rows, not cards.
     */
    renderSpeaking() {
      const s = S();
      const d = D();
      const img = VM.images || {};
      const speakingGallery = (VM.galleryImages || []).filter(g => g.category === 'speaking');
      const galleryItems = speakingGallery.length
        ? speakingGallery.slice(0, 3)
        : (VM.galleryFeatured ? VM.galleryFeatured(3) : []);

      return `
        <section class="vm-page-head vm-section--compact">
          <div class="vm-container vm-hero__grid">
            <div>
              <p class="vm-eyebrow vm-eyebrow--ruled">Speaking</p>
              <h1 class="vm-display">Speaking &amp;<br>Facilitation</h1>
              <p class="vm-lead vm-mt-md">Conference design, facilitation and executive communication drawn from directing national organizations in two countries.</p>
              <div class="vm-hero__actions">
                <a class="vm-btn vm-btn--primary" href="#booking">Book a Speaking Engagement</a>
              </div>
            </div>
            <figure class="vm-hero__portrait">
              <div class="vm-img-frame vm-img--portrait-ed vm-img-frame--shadow">
                <img class="vm-img" src="${esc(img.speakingForum)}"
                     alt="Vicent Manila speaking at a leadership forum"
                     width="800" height="1066" fetchpriority="high" decoding="async"
                     style="object-position:50% 15%">
              </div>
            </figure>
          </div>
        </section>

        ${d.featuredEvent ? `
        <section class="vm-section vm-section--subtle" aria-labelledby="featured-event-title">
          <div class="vm-container vm-event-feature">
            <figure class="vm-event-feature__media vm-img-frame">
              <img class="vm-img" src="${esc(d.featuredEvent.image)}"
                   alt="The Men's Circle event poster featuring host Vicent Manila"
                   width="864" height="1080" loading="lazy" decoding="async">
            </figure>
            <div class="vm-event-feature__body">
              <p class="vm-eyebrow vm-eyebrow--ruled">${esc(d.featuredEvent.eyebrow)}</p>
              <h2 id="featured-event-title" class="vm-display-md">${esc(d.featuredEvent.title)}</h2>
              <p class="vm-lead vm-mt-md">${esc(d.featuredEvent.summary)}</p>
              <dl class="vm-event-meta">
                <div><dt>Role</dt><dd>${esc(d.featuredEvent.role)}</dd></div>
                <div><dt>Date</dt><dd>${esc(d.featuredEvent.date)} · ${esc(d.featuredEvent.time)}</dd></div>
                <div><dt>Format</dt><dd>${esc(d.featuredEvent.format)}</dd></div>
                <div><dt>Platform</dt><dd>${esc(d.featuredEvent.organization)}</dd></div>
              </dl>
              <a class="vm-btn vm-btn--secondary vm-external-link" href="${esc(d.featuredEvent.url)}"
                 target="_blank" rel="noopener noreferrer">
                ${esc(d.featuredEvent.linkLabel)}
                <i data-lucide="external-link" class="w-4 h-4" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>` : ''}

        <section class="vm-section">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Topics</p>
            <h2 class="vm-display-md vm-mb-lg">What I speak about</h2>
            <div class="vm-index">
              ${d.speakingTopics.map((t, i) => `
                <div class="vm-index__item">
                  <span class="vm-index__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
                  <h3 class="vm-index__title">${esc(t.title)}</h3>
                  <div><p class="vm-index__desc">${esc(t.desc)}</p></div>
                </div>`).join('')}
            </div>
          </div>
        </section>

        <section class="vm-section vm-section--subtle">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Selected Engagements</p>
            <h2 class="vm-display-md vm-mb-lg">Conferences and platforms delivered</h2>
            <div class="vm-chrono">
              ${d.speakingEngagements.map(e => `
                <article class="vm-chrono__item">
                  <p class="vm-chrono__period">${esc(e.date)}</p>
                  <div>
                    <h3 class="vm-chrono__role">${esc(e.title)}</h3>
                    <p class="vm-chrono__org">${esc(e.role)} · ${esc(e.organization)} · ${esc(e.location)}</p>
                    ${e.note ? `<p class="vm-chrono__mandate">${esc(e.note)}</p>` : ''}
                    ${e.url ? `<a class="vm-inline-external" href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">
                      View external event page <i data-lucide="external-link" class="w-4 h-4" aria-hidden="true"></i>
                    </a>` : ''}
                  </div>
                </article>`).join('')}
            </div>
          </div>
        </section>

        ${d.externalResources?.length ? `
        <section class="vm-section" aria-labelledby="external-resources-title">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Articles &amp; Newsletters</p>
            <h2 id="external-resources-title" class="vm-display-md vm-mb-lg">External resources</h2>
            <div class="vm-resource-list">
              ${d.externalResources.map(resource => `
                <a class="vm-resource-link" href="${esc(resource.url)}"
                   target="_blank" rel="noopener noreferrer">
                  <span>
                    <strong>${esc(resource.title)}</strong>
                    <small>${esc(resource.source || resource.type || 'External resource')}</small>
                  </span>
                  <i data-lucide="external-link" class="w-4 h-4" aria-hidden="true"></i>
                </a>`).join('')}
            </div>
          </div>
        </section>` : ''}

        <section class="vm-section--expansive">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">On Stage</p>
            <h2 class="vm-display-md vm-mb-lg">Speaking photography</h2>
          </div>
          <div class="vm-container--wide vm-photo-grid">
            ${galleryItems.map(item => `
              <figure class="vm-img-frame vm-img--event">
                <img class="vm-img${item.rotate180 ? ' image-rotate-180' : ''}"
                     src="${esc(item.thumb || item.src)}"
                     alt="${esc(item.alt || item.title)}"
                     width="900" height="675" loading="lazy" decoding="async">
              </figure>`).join('')}
          </div>
          <div class="vm-container vm-mt-lg">
            <a class="vm-btn vm-btn--tertiary" href="gallery.html">View the full gallery</a>
          </div>
        </section>

        <section class="vm-section vm-section--navy" id="booking">
          <div class="vm-container vm-contact">
            <div>
              <p class="vm-eyebrow vm-eyebrow--ruled">Booking</p>
              <h2 class="vm-display-md">Book a speaking engagement</h2>
              <p class="vm-lead vm-mt-sm">Available for keynotes, panels, facilitation and workshops.</p>
            </div>
            <div class="vm-contact__actions">
              <a class="vm-btn vm-btn--primary" href="${esc(s.contact.mailto)}">Email</a>
              ${VM.pages.contactDirect(true)}
              <a class="vm-btn vm-btn--secondary vm-btn--on-navy" href="${esc(s.cv)}" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </section>`;
    },

    /**
     * Appendix. Primary-source evidence, presented as a document index.
     * Downloads are explicit about format and weight so nothing is a surprise.
     */
    renderAppendix() {
      const s = S();
      const d = D();
      const a = d.appendix;

      return `
        <section class="vm-page-head vm-section--compact">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Appendix</p>
            <h1 class="vm-display">Evidence &amp;<br>Documentation</h1>
            <p class="vm-lead vm-mt-md">${esc(a.intro)}</p>
          </div>
        </section>

        <section class="vm-section">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Published Documents</p>
            <h2 class="vm-display-md vm-mb-lg">Available to download</h2>
            <div class="vm-docs">
              ${a.documents.map((doc, i) => `
                <article class="vm-doc">
                  <span class="vm-doc__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
                  <div class="vm-doc__body">
                    <h3 class="vm-doc__title">${esc(doc.title)}</h3>
                    <p class="vm-doc__role">${esc(doc.role)}</p>
                    <p class="vm-doc__summary">${esc(doc.summary)}</p>
                    <p class="vm-doc__meta">${doc.meta.map(esc).join(' · ')}</p>
                  </div>
                  <div class="vm-doc__action">
                    <a class="vm-btn vm-btn--secondary" href="${esc(doc.file)}"
                       target="_blank" rel="noopener"
                       aria-label="Open ${esc(doc.title)} (PDF, ${esc(doc.size)})">
                      Open PDF
                      <span class="vm-doc__size">${esc(doc.size)}</span>
                    </a>
                  </div>
                </article>`).join('')}
            </div>
          </div>
        </section>

        <section class="vm-section vm-section--subtle">
          <div class="vm-container">
            <p class="vm-eyebrow vm-eyebrow--ruled">Available on Request</p>
            <h2 class="vm-display-md vm-mb-lg">Further evidence</h2>
            <div class="vm-index">
              ${a.onRequest.map(x => `
                <div class="vm-geo">
                  <h3 class="vm-geo__country vm-doc__req-title">${esc(x.title)}</h3>
                  <p class="vm-geo__role">${esc(x.detail)}</p>
                </div>`).join('')}
            </div>
          </div>
        </section>

        <section class="vm-section--compact vm-section--navy">
          <div class="vm-container vm-contact">
            <div>
              <h2 class="vm-display-md">Request further documentation</h2>
              <p class="vm-lead vm-mt-sm">Happy to share signed agreements and audited reports directly with partners, recruiters and institutions.</p>
            </div>
            <div class="vm-contact__actions">
              <a class="vm-btn vm-btn--primary" href="${esc(s.contact.mailto)}">Email</a>
              ${VM.pages.contactDirect(true)}
              <a class="vm-btn vm-btn--secondary vm-btn--on-navy" href="${esc(s.cv)}" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </section>`;
    },

    initProjectFilters() {
      const items = document.querySelectorAll('.vm-project-item');
      const buttons = document.querySelectorAll('#project-filters .vm-filter');
      const status = document.getElementById('filter-status');

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;
          buttons.forEach(b => {
            const on = b === btn;
            b.classList.toggle('is-active', on);
            b.setAttribute('aria-pressed', String(on));
          });

          let shown = 0;
          items.forEach(el => {
            const show = filter === 'all' || el.dataset.category === filter;
            el.hidden = !show;
            if (show) shown += 1;
          });

          if (status) {
            status.textContent = shown + (shown === 1 ? ' case study' : ' case studies') + ' shown';
          }
        });
      });
    },

  };

  document.addEventListener('DOMContentLoaded', () => {
    VM.pages.init();
  });
})();
