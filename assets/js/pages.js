/**
 * Vicent Manila — Page rendering & interactions
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
        media: this.renderMedia,
      };

      if (renderers[page]) {
        main.innerHTML = renderers[page].call(this);
        this.afterRender(page);
      }
    },

    afterRender(page) {
      if (page === 'projects') this.initProjectFilters();
      if (page === 'media') this.initMediaFilters();
      if (page === 'gallery') this.initGallery();
      if (page === 'project') this.initProjectRedirect();
      this.fillContactCTAs();
      VM.ui?.refreshIcons?.();
      VM.ui?.initReveal?.();
      VM.ui?.initCounters?.();
      VM.ui?.initTimeline?.();
      VM.ui?.initTestimonials?.();
    },

    fillContactCTAs() {
      document.querySelectorAll('#contact-ctas, .contact-ctas-slot').forEach(el => {
        const compact = el.dataset.compact === 'true';
        el.innerHTML = VM.layout.contactCTAs(compact);
      });
    },

    renderHome() {
      const s = S();
      const d = D();
      const featured = VM.featuredProjects();

      return `
        <section id="hero" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-navy">
          <div class="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          <div class="max-w-8xl mx-auto px-6 py-20 w-full relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p class="reveal section-label mb-5">${esc(d.hero.eyebrow)}</p>
                <h1 class="reveal hero-title text-navy dark:text-white mb-5" style="--d:.05s">${esc(s.name)}</h1>
                <p class="reveal text-lg text-muted dark:text-zinc-400 mb-2 font-medium" style="--d:.1s">${esc(d.hero.roles[0])}</p>
                <p class="reveal text-base text-muted dark:text-zinc-500 mb-1" style="--d:.12s">${esc(d.hero.roles[1])} · ${esc(d.hero.roles[2])}</p>
                <p class="reveal text-lg text-muted dark:text-zinc-400 leading-relaxed max-w-xl mb-8 mt-4" style="--d:.15s">${esc(d.hero.summary)}</p>
                <div class="reveal flex flex-wrap gap-3 mb-10" style="--d:.2s">
                  <a href="${s.cv}" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-lg text-sm" download><i data-lucide="download" class="w-4 h-4"></i> Download CV</a>
                  <a href="leadership.html" class="btn-lift inline-flex items-center gap-2 border border-black/[0.08] dark:border-white/10 text-ink dark:text-white font-semibold px-6 py-3 rounded-lg text-sm hover:border-gold transition-colors">View Experience</a>
                  <a href="projects.html" class="btn-lift inline-flex items-center gap-2 border border-black/[0.08] dark:border-white/10 text-ink dark:text-white font-semibold px-6 py-3 rounded-lg text-sm hover:border-gold transition-colors">View Projects</a>
                  <a href="#contact" class="btn-lift inline-flex items-center gap-2 text-muted hover:text-gold font-medium px-4 py-3 text-sm transition-colors">Contact <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                </div>
                <div class="reveal flex gap-10 pt-8 border-t border-black/[0.06] dark:border-white/10" style="--d:.25s">
                  ${d.hero.stats.map(st => `<div><p class="text-2xl font-bold text-navy dark:text-gold">${esc(st.value)}</p><p class="text-xs text-muted mt-1">${esc(st.label)}</p></div>`).join('')}
                </div>
              </div>
              <div class="reveal flex justify-center lg:justify-end" style="--d:.15s">
                <div class="monogram"><div class="monogram__glow"></div><span class="monogram__text">VM</span><div class="monogram__ring"></div></div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-8 border-y border-black/[0.06] dark:border-white/10 bg-canvas dark:bg-navy-secondary/30">
          <div class="max-w-8xl mx-auto px-6">
            <p class="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-6">Organizations Served</p>
            <div class="flex flex-wrap justify-center gap-x-10 gap-y-3">
              ${d.organizations.map(o => `<span class="text-sm font-medium text-muted dark:text-zinc-500">${esc(o)}</span>`).join('')}
            </div>
          </div>
        </section>

        <section id="about" class="py-24 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <div class="max-w-2xl mb-16">
              <p class="reveal section-label mb-3">About</p>
              <h2 class="reveal section-title text-navy dark:text-white mb-4" style="--d:.05s">Executive Profile</h2>
              <p class="reveal text-lg text-muted dark:text-zinc-400 leading-relaxed" style="--d:.1s">${esc(d.about.summary)}</p>
            </div>
            <div class="grid lg:grid-cols-2 gap-8 mb-12">
              <div class="reveal card-executive p-8" style="--d:.05s">
                <div class="flex items-center gap-3 mb-4"><span class="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg text-gold"><i data-lucide="compass" class="w-5 h-5"></i></span><h3 class="text-xl font-semibold text-navy dark:text-white">Leadership Philosophy</h3></div>
                <p class="text-muted dark:text-zinc-400 leading-relaxed">${esc(d.about.philosophy)}</p>
              </div>
              <div class="reveal card-executive p-8" style="--d:.1s">
                <div class="flex items-center gap-3 mb-4"><span class="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg text-gold"><i data-lucide="target" class="w-5 h-5"></i></span><h3 class="text-xl font-semibold text-navy dark:text-white">Professional Mission</h3></div>
                <p class="text-muted dark:text-zinc-400 leading-relaxed">${esc(d.about.mission)}</p>
              </div>
            </div>
            <div class="mb-12">
              <h3 class="reveal text-xl font-semibold text-navy dark:text-white mb-6">Core Expertise</h3>
              <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                ${d.about.expertise.map((e, i) => `<div class="reveal card-executive p-6" style="--d:${delay(i)}"><h4 class="font-semibold text-navy dark:text-white mb-2">${esc(e.title)}</h4><p class="text-sm text-muted dark:text-zinc-400 leading-relaxed">${esc(e.desc)}</p></div>`).join('')}
              </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-8">
              <div class="reveal card-executive p-8">
                <h3 class="text-xl font-semibold text-navy dark:text-white mb-6">International Experience</h3>
                <ul class="space-y-4">
                  ${d.about.international.map(intl => `<li class="flex items-start gap-3 pb-4 border-b border-black/[0.06] dark:border-white/10 last:border-0 last:pb-0"><i data-lucide="map-pin" class="w-4 h-4 text-gold mt-1 shrink-0"></i><div><p class="font-semibold text-navy dark:text-white">${esc(intl.country)}</p><p class="text-sm text-muted">${esc(intl.role)}</p></div></li>`).join('')}
                </ul>
              </div>
              <div class="reveal card-executive p-8">
                <h3 class="text-xl font-semibold text-navy dark:text-white mb-4">Education</h3>
                <p class="font-semibold text-navy dark:text-white">${esc(d.about.education.school)}</p>
                <p class="text-sm text-gold font-medium mb-1">${esc(d.about.education.location)}</p>
                <p class="text-muted">${esc(d.about.education.degree)}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" class="py-24 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div><p class="reveal section-label mb-3">Career</p><h2 class="reveal section-title text-navy dark:text-white">Leadership Journey</h2></div>
              <a href="leadership.html" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">Full timeline <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
            <div class="relative max-w-3xl mx-auto" id="timeline">
              <div class="timeline-line"></div>
              <div class="timeline-progress" id="timeline-progress" style="height:0"></div>
              ${d.experience.slice(0, 4).map((job, i) => `
                <article class="reveal relative pl-10 pb-8 last:pb-0" style="--d:${delay(i, 0.08)}">
                  <div class="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-gold bg-white dark:bg-navy z-10"></div>
                  <div class="card-executive p-6">
                    <span class="text-xs font-semibold text-gold uppercase tracking-wider">${esc(job.period)}</span>
                    <h3 class="text-lg font-semibold text-navy dark:text-white mt-1 mb-1">${esc(job.title)}</h3>
                    <p class="text-sm font-medium text-muted mb-3">${esc(job.organization)} · ${esc(job.country)}</p>
                    <p class="text-sm text-muted dark:text-zinc-400 leading-relaxed">${esc(job.overview)}</p>
                  </div>
                </article>`).join('')}
            </div>
          </div>
        </section>

        <section id="projects" class="py-24 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div><p class="reveal section-label mb-3">Portfolio</p><h2 class="reveal section-title text-navy dark:text-white">Featured Projects</h2></div>
              <a href="projects.html" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">All projects <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              ${featured.map((p, i) => this.projectCard(p, i)).join('')}
            </div>
          </div>
        </section>

        <section id="impact" class="py-24 bg-navy text-white">
          <div class="max-w-8xl mx-auto px-6">
            <div class="text-center max-w-2xl mx-auto mb-14">
              <p class="reveal section-label mb-3">Impact</p>
              <h2 class="reveal section-title text-white mb-4">Leadership Metrics</h2>
              <p class="reveal text-white/60 text-lg">Measurable outcomes across organizations, partnerships, and communities.</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              ${d.impactStats.map((st, i) => `<div class="reveal stat-card text-center p-6" style="--d:${delay(i, 0.06)}"><i data-lucide="${st.icon}" class="w-5 h-5 text-gold mx-auto mb-3"></i><p class="text-3xl font-bold text-gold mb-1" data-count="${st.value}" data-suffix="${esc(st.suffix)}">0${esc(st.suffix)}</p><p class="text-xs text-white/50 leading-snug">${esc(st.label)}</p></div>`).join('')}
            </div>
          </div>
        </section>

        <section id="skills" class="py-24 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <div class="text-center max-w-2xl mx-auto mb-14">
              <p class="reveal section-label mb-3">Expertise</p>
              <h2 class="reveal section-title text-navy dark:text-white">Core Competencies</h2>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              ${Object.entries(d.skillCategories).map(([cat, skills]) => `
                <div class="reveal card-executive p-6">
                  <h3 class="text-sm font-semibold uppercase tracking-wider text-navy dark:text-gold mb-4 pb-3 border-b border-black/[0.06] dark:border-white/10">${esc(cat)}</h3>
                  <div class="flex flex-wrap gap-2">${skills.map(sk => `<span class="text-xs font-medium px-3 py-1.5 rounded-full bg-canvas dark:bg-navy text-muted dark:text-zinc-300 border border-black/[0.06] dark:border-white/10 hover:border-gold hover:text-navy dark:hover:text-gold transition-colors">${esc(sk)}</span>`).join('')}</div>
                </div>`).join('')}
            </div>
          </div>
        </section>

        <section id="testimonials" class="py-24 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <div class="text-center mb-12">
              <p class="reveal section-label mb-3">Endorsements</p>
              <h2 class="reveal section-title text-navy dark:text-white">What Leaders Say</h2>
            </div>
            <div id="testimonial-carousel" class="max-w-3xl mx-auto relative overflow-hidden">
              <div id="testimonial-track" class="flex transition-transform duration-500 ease-out">
                ${d.testimonials.map(t => `
                  <blockquote class="w-full shrink-0 card-executive p-10">
                    <i data-lucide="quote" class="w-8 h-8 text-gold/60 mb-4"></i>
                    <p class="text-lg text-muted dark:text-zinc-300 leading-relaxed mb-8">"${esc(t.quote)}"</p>
                    <footer class="flex items-center gap-4">
                      <img src="${esc(t.image)}" alt="${esc(t.name)}" class="w-14 h-14 rounded-full object-cover border-2 border-gold/30" loading="lazy">
                      <div><cite class="font-semibold text-navy dark:text-white not-italic">${esc(t.name)}</cite><p class="text-sm text-muted">${esc(t.position)}, ${esc(t.organization)}</p></div>
                    </footer>
                  </blockquote>`).join('')}
              </div>
              <div class="flex items-center justify-center gap-4 mt-6">
                <button id="testimonial-prev" class="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" aria-label="Previous"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
                <div id="testimonial-dots" class="flex gap-2"></div>
                <button id="testimonial-next" class="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" aria-label="Next"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
              </div>
            </div>
          </div>
        </section>

        <section class="py-24 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div><p class="reveal section-label mb-3">Insights</p><h2 class="reveal section-title text-navy dark:text-white">Media & Thought Leadership</h2></div>
              <a href="media.html" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">View all <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              ${d.mediaItems.slice(0, 3).map((m, i) => `
                <article class="reveal card-executive p-6" style="--d:${delay(i, 0.08)}">
                  <span class="text-xs font-semibold text-gold uppercase">${esc(m.type)}</span>
                  <h3 class="text-lg font-semibold text-navy dark:text-white mt-2 mb-2">${esc(m.title)}</h3>
                  <p class="text-sm text-muted leading-relaxed mb-3">${esc(m.excerpt)}</p>
                  <p class="text-xs text-muted">${esc(m.source)} · ${esc(m.date)}</p>
                </article>`).join('')}
            </div>
          </div>
        </section>`;
    },

    projectCard(p, i) {
      return `
        <article class="reveal card-executive overflow-hidden group" style="--d:${delay(i, 0.08)}">
          <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="block aspect-[16/10] overflow-hidden">
            <img src="${esc(p.image)}" alt="${esc(p.title)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
          </a>
          <div class="p-6">
            <span class="text-xs font-semibold text-gold uppercase tracking-wider">${esc(p.category_label)}</span>
            <h3 class="text-xl font-semibold text-navy dark:text-white mt-2 mb-2">
              <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="hover:text-gold transition-colors">${esc(p.title)}</a>
            </h3>
            <p class="text-sm text-muted leading-relaxed mb-4">${esc(p.summary)}</p>
            <a href="project.html?slug=${encodeURIComponent(p.slug)}" class="inline-flex items-center gap-1 text-sm font-semibold text-navy dark:text-white hover:text-gold transition-colors">View case study <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
          </div>
        </article>`;
    },

    renderLeadership() {
      const d = D();
      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Leadership</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">Leadership Journey</h1>
            <p class="reveal text-lg text-muted max-w-2xl">${esc(d.about.philosophy)}</p>
          </div>
        </section>
        <section class="py-16 bg-navy">
          <div class="max-w-8xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            ${d.impactStats.map(st => `<div class="stat-card text-center p-5"><p class="text-2xl font-bold text-gold" data-count="${st.value}" data-suffix="${esc(st.suffix)}">0${esc(st.suffix)}</p><p class="text-xs text-white/50 mt-1">${esc(st.label)}</p></div>`).join('')}
          </div>
        </section>
        <section class="py-24 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-12">Complete Timeline</h2>
            <div class="relative max-w-3xl mx-auto" id="timeline">
              <div class="timeline-line"></div>
              <div class="timeline-progress" id="timeline-progress"></div>
              ${d.experience.map((job, i) => `
                <article class="reveal relative pl-10 pb-10 last:pb-0" style="--d:${delay(i)}">
                  <div class="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-gold bg-canvas dark:bg-navy z-10"></div>
                  <div class="card-executive p-8">
                    <div class="flex flex-wrap items-center gap-3 mb-3">
                      <span class="text-xs font-semibold text-gold uppercase tracking-wider px-2 py-1 bg-gold/10 rounded">${esc(job.period)}</span>
                      <span class="text-xs text-muted flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${esc(job.country)}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-navy dark:text-white mb-1">${esc(job.title)}</h3>
                    <p class="text-sm font-medium text-muted mb-4">${esc(job.organization)}</p>
                    <p class="text-sm text-muted leading-relaxed mb-6">${esc(job.overview)}</p>
                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                      <div><h4 class="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Responsibilities</h4><ul class="space-y-2">${job.responsibilities.map(r => `<li class="text-sm text-muted flex gap-2"><span class="text-gold">·</span> ${esc(r)}</li>`).join('')}</ul></div>
                      <div><h4 class="text-xs font-semibold uppercase tracking-wider text-gold mb-3">Achievements</h4><ul class="space-y-2">${job.achievements.map(a => `<li class="text-sm text-muted flex gap-2"><span class="text-gold">·</span> ${esc(a)}</li>`).join('')}</ul></div>
                    </div>
                    <div class="pt-4 border-t border-black/[0.06] dark:border-white/10">
                      <p class="text-sm text-muted mb-3"><strong class="text-navy dark:text-white">Impact:</strong> ${esc(job.impact)}</p>
                      <div class="flex flex-wrap gap-2">${job.skills.map(sk => `<span class="text-xs px-2.5 py-1 rounded-full bg-canvas dark:bg-navy border border-black/[0.06] dark:border-white/10 text-muted">${esc(sk)}</span>`).join('')}</div>
                    </div>
                  </div>
                </article>`).join('')}
            </div>
          </div>
        </section>
        <section class="py-24 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Organizations Served</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${d.organizations.map(org => `<div class="card-executive p-6 text-center"><i data-lucide="building-2" class="w-6 h-6 text-gold mx-auto mb-3"></i><p class="font-semibold text-navy dark:text-white text-sm">${esc(org)}</p></div>`).join('')}
            </div>
          </div>
        </section>
        <section class="py-24 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Global Contributions</h2>
            <div class="grid md:grid-cols-2 gap-6">
              ${d.about.international.map(intl => `<div class="card-executive p-8"><h3 class="text-xl font-semibold text-navy dark:text-white mb-2">${esc(intl.country)}</h3><p class="text-muted">${esc(intl.role)}</p></div>`).join('')}
            </div>
          </div>
        </section>`;
    },

    renderProjects() {
      const d = D();
      const filters = Object.entries(d.projectCategories).map(([key, label]) =>
        `<button type="button" data-filter="${esc(key)}" class="filter-btn text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${key === 'all' ? 'is-active' : ''}">${esc(label)}</button>`
      ).join('');

      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Portfolio</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">All Projects</h1>
            <p class="reveal text-lg text-muted max-w-2xl leading-relaxed">Strategic initiatives across business development, international partnerships, leadership, and organizational growth.</p>
          </div>
        </section>
        <section class="pb-24">
          <div class="max-w-8xl mx-auto px-6">
            <div class="reveal flex flex-wrap gap-2 mb-10" id="project-filters">${filters}</div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
              ${d.projects.map((p, i) => `<div class="project-item" data-category="${esc(p.category)}">${this.projectCard(p, i)}</div>`).join('')}
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
      const d = D();

      if (!project) {
        location.href = 'projects.html';
        return;
      }

      document.title = `${project.title} — ${S().name}`;

      const gallery = project.gallery?.length ? `
        <section class="py-16 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Project Gallery</h2>
            <div class="grid md:grid-cols-2 gap-4">${project.gallery.map(img => `<img src="${esc(img)}" alt="Project gallery image" class="rounded-xl w-full aspect-video object-cover" loading="lazy">`).join('')}</div>
          </div>
        </section>` : '';

      const related = project.related?.length ? `
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Related Projects</h2>
            <div class="grid md:grid-cols-2 gap-6">
              ${project.related.map(sl => {
                const rel = VM.getProject(sl);
                if (!rel) return '';
                return `<a href="project.html?slug=${encodeURIComponent(rel.slug)}" class="card-executive p-6 flex items-center gap-4 group"><img src="${esc(rel.image)}" alt="" class="w-20 h-20 rounded-lg object-cover shrink-0" loading="lazy"><div><p class="text-xs text-gold font-semibold uppercase">${esc(rel.category_label)}</p><p class="font-semibold text-navy dark:text-white group-hover:text-gold transition-colors">${esc(rel.title)}</p></div></a>`;
              }).join('')}
            </div>
          </div>
        </section>` : '';

      root.innerHTML = `
        <section class="pt-28 pb-0 relative overflow-hidden">
          <div class="relative aspect-[21/9] max-h-[480px] overflow-hidden">
            <img src="${esc(project.image)}" alt="${esc(project.title)}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
          </div>
          <div class="max-w-8xl mx-auto px-6 -mt-32 relative z-10 pb-12">
            <span class="inline-block text-xs font-semibold text-gold uppercase tracking-wider bg-navy/80 backdrop-blur px-3 py-1 rounded-lg mb-4">${esc(project.category_label)} · ${esc(project.year)}</span>
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">${esc(project.title)}</h1>
            <p class="text-lg text-white/70 max-w-2xl">${esc(project.summary)}</p>
          </div>
        </section>
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-3xl mx-auto px-6 prose-cs">
            <h3>Overview</h3><p>${esc(project.overview)}</p>
            <h3>Challenge</h3><p>${esc(project.challenge)}</p>
            <h3>Objectives</h3><ul>${project.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul>
            <h3>Role</h3><p>${esc(project.role)}</p>
            <h3>Strategy</h3><p>${esc(project.strategy)}</p>
            <h3>Execution</h3><p>${esc(project.execution)}</p>
            <h3>Results</h3><ul>${project.results.map(r => `<li>${esc(r)}</li>`).join('')}</ul>
            <h3>Impact</h3><p>${esc(project.impact)}</p>
          </div>
        </section>
        ${gallery}
        ${related}`;
    },

    renderGallery() {
      const d = D();
      const filters = Object.entries(d.galleryFilters).map(([key, label]) =>
        `<button type="button" data-gallery-filter="${esc(key)}" class="gallery-filter-btn text-sm px-3 py-1.5 rounded-lg transition-colors ${key === 'all' ? 'is-active' : ''}">${esc(label)}</button>`
      ).join('');

      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy" id="gallery-page">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Visual Archive</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">Gallery</h1>
            <p class="reveal text-lg text-muted max-w-2xl mb-8">Leadership events, speaking engagements, partnerships, and international collaboration.</p>
            <div class="reveal flex flex-col sm:flex-row gap-4 mb-10">
              <div class="relative flex-1 max-w-md">
                <i data-lucide="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted"></i>
                <input type="search" id="gallery-search" placeholder="Search gallery..." aria-label="Search gallery" class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-black/[0.08] dark:border-white/10 bg-canvas dark:bg-navy-secondary text-sm focus:outline-none focus:border-gold">
              </div>
              <div class="flex flex-wrap gap-2" id="gallery-filters">${filters}</div>
            </div>
            <div class="masonry" id="gallery-grid"></div>
          </div>
          <div id="gallery-lightbox" class="lightbox hidden" role="dialog" aria-modal="true" aria-hidden="true">
            <div class="lightbox__content max-w-4xl text-center" id="lightbox-content"></div>
          </div>
        </section>`;
    },

    initGallery() {
      const d = D();
      const grid = document.getElementById('gallery-grid');
      const lightbox = document.getElementById('gallery-lightbox');
      const content = document.getElementById('lightbox-content');
      let category = 'all';
      let search = '';

      const render = () => {
        const items = d.galleryItems.filter(i => {
          const matchCat = category === 'all' || i.category === category;
          const q = search.toLowerCase();
          const matchSearch = !q || i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q) || i.location.toLowerCase().includes(q);
          return matchCat && matchSearch;
        });

        grid.innerHTML = items.map((item, idx) => `
          <figure class="masonry-item card-executive overflow-hidden cursor-pointer group gallery-item" data-gallery-index="${idx}">
            <div class="overflow-hidden"><img src="${esc(item.src)}" alt="${esc(item.title)}" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"></div>
            <figcaption class="p-5">
              <span class="text-xs font-semibold text-gold uppercase">${esc(item.category)}</span>
              <h3 class="font-semibold text-navy dark:text-white mt-1 mb-1">${esc(item.title)}</h3>
              <p class="text-xs text-muted">${esc(item.location)} · ${esc(item.date)}</p>
              <p class="text-sm text-muted mt-2 leading-relaxed">${esc(item.description)}</p>
            </figcaption>
          </figure>`).join('');

        const filtered = items;

        grid.querySelectorAll('.gallery-item').forEach(el => {
          el.addEventListener('click', () => {
            const item = filtered[parseInt(el.dataset.galleryIndex, 10)];
            if (!item) return;
            content.innerHTML = `
              <img src="${esc(item.src)}" alt="${esc(item.title)}" class="mx-auto rounded-xl mb-4">
              <h3 class="text-xl font-semibold text-white mb-1">${esc(item.title)}</h3>
              <p class="text-white/60 text-sm">${esc(item.organization)} · ${esc(item.location)} · ${esc(item.date)}</p>
              <p class="text-white/50 text-sm mt-2 max-w-lg mx-auto">${esc(item.description)}</p>
              <button type="button" id="lightbox-close" class="mt-6 text-gold text-sm font-semibold">Close</button>`;
            lightbox.classList.remove('hidden');
            lightbox.setAttribute('aria-hidden', 'false');
            document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
            VM.ui?.refreshIcons?.();
          });
        });
      };

      const closeLightbox = () => {
        lightbox.classList.add('hidden');
        lightbox.setAttribute('aria-hidden', 'true');
      };

      document.getElementById('gallery-search')?.addEventListener('input', e => {
        search = e.target.value;
        render();
      });

      document.querySelectorAll('[data-gallery-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          category = btn.dataset.galleryFilter;
          document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.toggle('is-active', b === btn));
          render();
        });
      });

      lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

      render();
    },

    renderSpeaking() {
      const s = S();
      const d = D();
      const speakingGallery = d.galleryItems.filter(g => g.category === 'speaking');
      const galleryItems = speakingGallery.length ? speakingGallery : d.galleryItems.slice(0, 3);

      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Speaking</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">Speaking & Engagements</h1>
            <p class="reveal text-lg text-muted max-w-2xl">Keynotes, panel discussions, and workshops on youth leadership, strategic partnerships, and international development.</p>
          </div>
        </section>
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Speaking Topics</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${d.speakingTopics.map((topic, i) => `<div class="reveal card-executive p-6 flex items-start gap-3" style="--d:${delay(i)}"><i data-lucide="mic" class="w-5 h-5 text-gold shrink-0 mt-0.5"></i><p class="font-medium text-navy dark:text-white">${esc(topic)}</p></div>`).join('')}
            </div>
          </div>
        </section>
        <section class="py-16 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Past Engagements</h2>
            <div class="space-y-4">
              ${d.speakingEngagements.map(eng => `
                <div class="reveal card-executive p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div><span class="text-xs font-semibold text-gold uppercase">${esc(eng.type)}</span><h3 class="text-lg font-semibold text-navy dark:text-white mt-1">${esc(eng.title)}</h3><p class="text-sm text-muted">${esc(eng.event)}</p></div>
                  <div class="text-sm text-muted shrink-0 flex items-center gap-4"><span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${esc(eng.location)}</span><span>${esc(eng.date)}</span></div>
                </div>`).join('')}
            </div>
          </div>
        </section>
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
            <div class="card-executive p-8">
              <h2 class="text-xl font-bold text-navy dark:text-white mb-4">Media Kit</h2>
              <p class="text-muted leading-relaxed mb-6">Download professional biography, headshots, speaking topics, and brand assets for event organizers and media inquiries.</p>
              <a href="${s.cv}" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2.5 rounded-lg text-sm" download><i data-lucide="download" class="w-4 h-4"></i> Download Media Kit</a>
            </div>
            <div class="card-executive p-8" id="booking">
              <h2 class="text-xl font-bold text-navy dark:text-white mb-4">Book a Speaking Engagement</h2>
              <p class="text-muted leading-relaxed mb-6">Reach out directly to discuss keynotes, panels, or workshops for your event.</p>
              <div class="contact-ctas-slot" data-compact="true"></div>
            </div>
          </div>
        </section>
        <section class="py-16 bg-white dark:bg-navy-secondary/20">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-2xl font-bold text-navy dark:text-white">Speaking Gallery</h2>
              <a href="gallery.html" class="text-sm font-semibold text-gold hover:underline">Full gallery →</a>
            </div>
            <div class="grid md:grid-cols-3 gap-4">
              ${galleryItems.map(item => `<figure class="card-executive overflow-hidden"><img src="${esc(item.src)}" alt="${esc(item.title)}" class="w-full aspect-video object-cover" loading="lazy"><figcaption class="p-4"><p class="font-semibold text-navy dark:text-white text-sm">${esc(item.title)}</p><p class="text-xs text-muted">${esc(item.location)}</p></figcaption></figure>`).join('')}
            </div>
          </div>
        </section>`;
    },

    renderMedia() {
      const s = S();
      const d = D();
      const icons = { Video: 'play-circle', Podcast: 'headphones', Interview: 'mic' };
      const filters = Object.entries(d.mediaFilters).map(([key, label]) =>
        `<button type="button" data-media-filter="${esc(key)}" class="media-filter-btn text-sm px-4 py-2 rounded-lg transition-colors ${key === 'all' ? 'is-active' : ''}">${esc(label)}</button>`
      ).join('');

      return `
        <section class="pt-32 pb-12 bg-white dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6">
            <p class="reveal section-label mb-3">Media</p>
            <h1 class="reveal section-title text-navy dark:text-white mb-4">Press & Media</h1>
            <p class="reveal text-lg text-muted max-w-2xl">Articles, interviews, press features, and thought leadership on youth development and strategic partnerships.</p>
          </div>
        </section>
        <section class="pb-24">
          <div class="max-w-8xl mx-auto px-6">
            <div class="flex flex-wrap gap-2 mb-10" id="media-filters">${filters}</div>
            <div class="grid md:grid-cols-2 gap-6" id="media-grid">
              ${d.mediaItems.map(m => {
                const icon = icons[m.type] || 'file-text';
                return `<article class="media-item reveal card-executive p-8" data-type="${esc(m.type)}">
                  <div class="flex items-center gap-3 mb-4"><i data-lucide="${icon}" class="w-5 h-5 text-gold"></i><span class="text-xs font-semibold text-gold uppercase">${esc(m.type)}</span><span class="text-xs text-muted ml-auto">${esc(m.date)}</span></div>
                  <h2 class="text-xl font-semibold text-navy dark:text-white mb-2">${esc(m.title)}</h2>
                  <p class="text-sm text-muted mb-3">${esc(m.source)}</p>
                  <p class="text-muted leading-relaxed">${esc(m.excerpt)}</p>
                </article>`;
              }).join('')}
            </div>
          </div>
        </section>
        <section class="py-16 bg-canvas dark:bg-navy">
          <div class="max-w-8xl mx-auto px-6 text-center">
            <h2 class="text-2xl font-bold text-navy dark:text-white mb-4">Media Downloads</h2>
            <p class="text-muted mb-8 max-w-lg mx-auto">Press materials, biography, and brand assets for media inquiries.</p>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="${s.cv}" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-lg text-sm" download><i data-lucide="download" class="w-4 h-4"></i> Download CV</a>
              <a href="speaking.html" class="btn-lift inline-flex items-center gap-2 border border-black/[0.08] dark:border-white/10 font-semibold px-6 py-3 rounded-lg text-sm hover:border-gold transition-colors"><i data-lucide="mic" class="w-4 h-4"></i> Speaking Profile</a>
            </div>
          </div>
        </section>`;
    },

    initProjectFilters() {
      const items = document.querySelectorAll('.project-item');
      document.querySelectorAll('#project-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;
          document.querySelectorAll('#project-filters .filter-btn').forEach(b => b.classList.toggle('is-active', b === btn));
          items.forEach(el => {
            const show = filter === 'all' || el.dataset.category === filter;
            el.style.display = show ? '' : 'none';
          });
        });
      });
    },

    initMediaFilters() {
      const items = document.querySelectorAll('.media-item');
      document.querySelectorAll('[data-media-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.mediaFilter;
          document.querySelectorAll('.media-filter-btn').forEach(b => b.classList.toggle('is-active', b === btn));
          items.forEach(el => {
            const show = filter === 'all' || el.dataset.type === filter;
            el.style.display = show ? '' : 'none';
          });
        });
      });
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    VM.pages.init();
  });
})();
