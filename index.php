<?php
require_once __DIR__ . '/includes/config.php';

$page_title = SITE_NAME . ' — International Business Development Leader';
$page_description = 'Executive portfolio of Vicent Manila — Country Director, Strategic Partnerships Specialist, and International Development Leader.';
$current_page = 'home';

require_once __DIR__ . '/includes/partials/head.php';
require_once __DIR__ . '/includes/partials/nav.php';

$featured = featured_projects($projects);
?>

<!-- Hero -->
<section id="hero" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-navy">
  <div class="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
  <div class="max-w-8xl mx-auto px-6 py-20 w-full relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p class="reveal section-label mb-5"><?= htmlspecialchars($hero['eyebrow']) ?></p>
        <h1 class="reveal hero-title text-navy dark:text-white mb-5" style="--d:.05s"><?= htmlspecialchars(SITE_NAME) ?></h1>
        <p class="reveal text-lg text-muted dark:text-zinc-400 mb-2 font-medium" style="--d:.1s"><?= htmlspecialchars($hero['roles'][0]) ?></p>
        <p class="reveal text-base text-muted dark:text-zinc-500 mb-1" style="--d:.12s"><?= htmlspecialchars($hero['roles'][1]) ?> · <?= htmlspecialchars($hero['roles'][2]) ?></p>
        <p class="reveal text-lg text-muted dark:text-zinc-400 leading-relaxed max-w-xl mb-8 mt-4" style="--d:.15s"><?= htmlspecialchars($hero['summary']) ?></p>
        <div class="reveal flex flex-wrap gap-3 mb-10" style="--d:.2s">
          <a href="<?= CV_PATH ?>" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-lg text-sm" download>
            <i data-lucide="download" class="w-4 h-4"></i> Download CV
          </a>
          <a href="leadership.php" class="btn-lift inline-flex items-center gap-2 border border-black/[0.08] dark:border-white/10 text-ink dark:text-white font-semibold px-6 py-3 rounded-lg text-sm hover:border-gold transition-colors">
            View Experience
          </a>
          <a href="projects.php" class="btn-lift inline-flex items-center gap-2 border border-black/[0.08] dark:border-white/10 text-ink dark:text-white font-semibold px-6 py-3 rounded-lg text-sm hover:border-gold transition-colors">
            View Projects
          </a>
          <a href="#contact" class="btn-lift inline-flex items-center gap-2 text-muted hover:text-gold font-medium px-4 py-3 text-sm transition-colors">
            Contact <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
        <div class="reveal flex gap-10 pt-8 border-t border-black/[0.06] dark:border-white/10" style="--d:.25s">
          <?php foreach ($hero['stats'] as $s): ?>
            <div>
              <p class="text-2xl font-bold text-navy dark:text-gold"><?= htmlspecialchars($s['value']) ?></p>
              <p class="text-xs text-muted mt-1"><?= htmlspecialchars($s['label']) ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
      <div class="reveal flex justify-center lg:justify-end" style="--d:.15s">
        <div class="monogram">
          <div class="monogram__glow"></div>
          <span class="monogram__text">VM</span>
          <div class="monogram__ring"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Trust bar -->
<section class="py-8 border-y border-black/[0.06] dark:border-white/10 bg-canvas dark:bg-navy-secondary/30">
  <div class="max-w-8xl mx-auto px-6">
    <p class="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-6">Organizations Served</p>
    <div class="flex flex-wrap justify-center gap-x-10 gap-y-3">
      <?php foreach ($organizations as $org): ?>
        <span class="text-sm font-medium text-muted dark:text-zinc-500"><?= htmlspecialchars($org) ?></span>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- About -->
<section id="about" class="py-24 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <div class="max-w-2xl mb-16">
      <p class="reveal section-label mb-3">About</p>
      <h2 class="reveal section-title text-navy dark:text-white mb-4" style="--d:.05s">Executive Profile</h2>
      <p class="reveal text-lg text-muted dark:text-zinc-400 leading-relaxed" style="--d:.1s"><?= htmlspecialchars($about['summary']) ?></p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8 mb-12">
      <div class="reveal card-executive p-8" style="--d:.05s">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg text-gold"><i data-lucide="compass" class="w-5 h-5"></i></span>
          <h3 class="text-xl font-semibold text-navy dark:text-white">Leadership Philosophy</h3>
        </div>
        <p class="text-muted dark:text-zinc-400 leading-relaxed"><?= htmlspecialchars($about['philosophy']) ?></p>
      </div>
      <div class="reveal card-executive p-8" style="--d:.1s">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-10 h-10 flex items-center justify-center bg-gold/10 rounded-lg text-gold"><i data-lucide="target" class="w-5 h-5"></i></span>
          <h3 class="text-xl font-semibold text-navy dark:text-white">Professional Mission</h3>
        </div>
        <p class="text-muted dark:text-zinc-400 leading-relaxed"><?= htmlspecialchars($about['mission']) ?></p>
      </div>
    </div>

    <div class="mb-12">
      <h3 class="reveal text-xl font-semibold text-navy dark:text-white mb-6">Core Expertise</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <?php foreach ($about['expertise'] as $i => $exp): ?>
          <div class="reveal card-executive p-6" style="--d:<?= $i * 0.05 ?>s">
            <h4 class="font-semibold text-navy dark:text-white mb-2"><?= htmlspecialchars($exp['title']) ?></h4>
            <p class="text-sm text-muted dark:text-zinc-400 leading-relaxed"><?= htmlspecialchars($exp['desc']) ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      <div class="reveal card-executive p-8">
        <h3 class="text-xl font-semibold text-navy dark:text-white mb-6">International Experience</h3>
        <ul class="space-y-4">
          <?php foreach ($about['international'] as $intl): ?>
            <li class="flex items-start gap-3 pb-4 border-b border-black/[0.06] dark:border-white/10 last:border-0 last:pb-0">
              <i data-lucide="map-pin" class="w-4 h-4 text-gold mt-1 shrink-0"></i>
              <div>
                <p class="font-semibold text-navy dark:text-white"><?= htmlspecialchars($intl['country']) ?></p>
                <p class="text-sm text-muted"><?= htmlspecialchars($intl['role']) ?></p>
              </div>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <div class="reveal card-executive p-8">
        <h3 class="text-xl font-semibold text-navy dark:text-white mb-4">Education</h3>
        <p class="font-semibold text-navy dark:text-white"><?= htmlspecialchars($about['education']['school']) ?></p>
        <p class="text-sm text-gold font-medium mb-1"><?= htmlspecialchars($about['education']['location']) ?></p>
        <p class="text-muted"><?= htmlspecialchars($about['education']['degree']) ?></p>
      </div>
    </div>
  </div>
</section>

<!-- Experience Preview -->
<section id="experience" class="py-24 bg-white dark:bg-navy-secondary/20">
  <div class="max-w-8xl mx-auto px-6">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
      <div>
        <p class="reveal section-label mb-3">Career</p>
        <h2 class="reveal section-title text-navy dark:text-white">Leadership Journey</h2>
      </div>
      <a href="leadership.php" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">Full timeline <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
    </div>
    <div class="relative max-w-3xl mx-auto" id="timeline">
      <div class="timeline-line"></div>
      <div class="timeline-progress" id="timeline-progress" style="height:0"></div>
      <?php foreach (array_slice($experience, 0, 4) as $i => $job): ?>
        <article class="reveal relative pl-10 pb-8 last:pb-0" style="--d:<?= $i * 0.08 ?>s">
          <div class="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-gold bg-white dark:bg-navy z-10"></div>
          <div class="card-executive p-6">
            <span class="text-xs font-semibold text-gold uppercase tracking-wider"><?= htmlspecialchars($job['period']) ?></span>
            <h3 class="text-lg font-semibold text-navy dark:text-white mt-1 mb-1"><?= htmlspecialchars($job['title']) ?></h3>
            <p class="text-sm font-medium text-muted mb-3"><?= htmlspecialchars($job['organization']) ?> · <?= htmlspecialchars($job['country']) ?></p>
            <p class="text-sm text-muted dark:text-zinc-400 leading-relaxed"><?= htmlspecialchars($job['overview']) ?></p>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Featured Projects -->
<section id="projects" class="py-24 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
      <div>
        <p class="reveal section-label mb-3">Portfolio</p>
        <h2 class="reveal section-title text-navy dark:text-white">Featured Projects</h2>
      </div>
      <a href="projects.php" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">All projects <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <?php foreach ($featured as $i => $p): ?>
        <article class="reveal card-executive overflow-hidden group" style="--d:<?= $i * 0.08 ?>s">
          <a href="project.php?slug=<?= urlencode($p['slug']) ?>" class="block aspect-[16/10] overflow-hidden">
            <img src="<?= htmlspecialchars($p['image']) ?>" alt="<?= htmlspecialchars($p['title']) ?>" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
          </a>
          <div class="p-6">
            <span class="text-xs font-semibold text-gold uppercase tracking-wider"><?= htmlspecialchars($p['category_label']) ?></span>
            <h3 class="text-xl font-semibold text-navy dark:text-white mt-2 mb-2">
              <a href="project.php?slug=<?= urlencode($p['slug']) ?>" class="hover:text-gold transition-colors"><?= htmlspecialchars($p['title']) ?></a>
            </h3>
            <p class="text-sm text-muted leading-relaxed mb-4"><?= htmlspecialchars($p['summary']) ?></p>
            <a href="project.php?slug=<?= urlencode($p['slug']) ?>" class="inline-flex items-center gap-1 text-sm font-semibold text-navy dark:text-white hover:text-gold transition-colors">
              View case study <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Achievements -->
<section id="impact" class="py-24 bg-navy text-white">
  <div class="max-w-8xl mx-auto px-6">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <p class="reveal section-label mb-3">Impact</p>
      <h2 class="reveal section-title text-white mb-4">Leadership Metrics</h2>
      <p class="reveal text-white/60 text-lg">Measurable outcomes across organizations, partnerships, and communities.</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <?php foreach ($impact_stats as $i => $stat): ?>
        <div class="reveal stat-card text-center p-6" style="--d:<?= $i * 0.06 ?>s">
          <i data-lucide="<?= htmlspecialchars($stat['icon']) ?>" class="w-5 h-5 text-gold mx-auto mb-3"></i>
          <p class="text-3xl font-bold text-gold mb-1" data-count="<?= $stat['value'] ?>" data-suffix="<?= htmlspecialchars($stat['suffix']) ?>">0<?= htmlspecialchars($stat['suffix']) ?></p>
          <p class="text-xs text-white/50 leading-snug"><?= htmlspecialchars($stat['label']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Skills -->
<section id="skills" class="py-24 bg-white dark:bg-navy-secondary/20">
  <div class="max-w-8xl mx-auto px-6">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <p class="reveal section-label mb-3">Expertise</p>
      <h2 class="reveal section-title text-navy dark:text-white">Core Competencies</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <?php foreach ($skill_categories as $cat => $skills_list): ?>
        <div class="reveal card-executive p-6">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-navy dark:text-gold mb-4 pb-3 border-b border-black/[0.06] dark:border-white/10"><?= htmlspecialchars($cat) ?></h3>
          <div class="flex flex-wrap gap-2">
            <?php foreach ($skills_list as $skill): ?>
              <span class="text-xs font-medium px-3 py-1.5 rounded-full bg-canvas dark:bg-navy text-muted dark:text-zinc-300 border border-black/[0.06] dark:border-white/10 hover:border-gold hover:text-navy dark:hover:text-gold transition-colors"><?= htmlspecialchars($skill) ?></span>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section id="testimonials" class="py-24 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <div class="text-center mb-12">
      <p class="reveal section-label mb-3">Endorsements</p>
      <h2 class="reveal section-title text-navy dark:text-white">What Leaders Say</h2>
    </div>
    <div id="testimonial-carousel" class="max-w-3xl mx-auto relative overflow-hidden">
      <div id="testimonial-track" class="flex transition-transform duration-500 ease-out">
        <?php foreach ($testimonials as $t): ?>
          <blockquote class="w-full shrink-0 card-executive p-10">
            <i data-lucide="quote" class="w-8 h-8 text-gold/60 mb-4"></i>
            <p class="text-lg text-muted dark:text-zinc-300 leading-relaxed mb-8">"<?= htmlspecialchars($t['quote']) ?>"</p>
            <footer class="flex items-center gap-4">
              <img src="<?= htmlspecialchars($t['image']) ?>" alt="<?= htmlspecialchars($t['name']) ?>" class="w-14 h-14 rounded-full object-cover border-2 border-gold/30" loading="lazy">
              <div>
                <cite class="font-semibold text-navy dark:text-white not-italic"><?= htmlspecialchars($t['name']) ?></cite>
                <p class="text-sm text-muted"><?= htmlspecialchars($t['position']) ?>, <?= htmlspecialchars($t['organization']) ?></p>
              </div>
            </footer>
          </blockquote>
        <?php endforeach; ?>
      </div>
      <div class="flex items-center justify-center gap-4 mt-6">
        <button id="testimonial-prev" class="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" aria-label="Previous"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
        <div id="testimonial-dots" class="flex gap-2"></div>
        <button id="testimonial-next" class="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" aria-label="Next"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
      </div>
    </div>
  </div>
</section>

<!-- Media Preview -->
<section class="py-24 bg-white dark:bg-navy-secondary/20">
  <div class="max-w-8xl mx-auto px-6">
    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
      <div>
        <p class="reveal section-label mb-3">Insights</p>
        <h2 class="reveal section-title text-navy dark:text-white">Media & Thought Leadership</h2>
      </div>
      <a href="media.php" class="reveal text-sm font-semibold text-gold hover:underline flex items-center gap-1">View all <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <?php foreach (array_slice($media_items, 0, 3) as $i => $m): ?>
        <article class="reveal card-executive p-6" style="--d:<?= $i * 0.08 ?>s">
          <span class="text-xs font-semibold text-gold uppercase"><?= htmlspecialchars($m['type']) ?></span>
          <h3 class="text-lg font-semibold text-navy dark:text-white mt-2 mb-2"><?= htmlspecialchars($m['title']) ?></h3>
          <p class="text-sm text-muted leading-relaxed mb-3"><?= htmlspecialchars($m['excerpt']) ?></p>
          <p class="text-xs text-muted"><?= htmlspecialchars($m['source']) ?> · <?= htmlspecialchars($m['date']) ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Contact -->
<section id="contact" class="py-24 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <div class="card-executive bg-navy dark:bg-navy-secondary p-10 md:p-16 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="relative z-10 grid lg:grid-cols-2 gap-12">
        <div>
          <p class="reveal section-label mb-3">Connect</p>
          <h2 class="reveal text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Let's Build Meaningful Impact Together</h2>
          <p class="reveal text-white/60 leading-relaxed mb-8">Open to strategic partnerships, speaking engagements, leadership consulting, and organizational development collaborations.</p>
          <ul class="space-y-4 text-sm">
            <li><a href="mailto:<?= htmlspecialchars(CONTACT_EMAIL) ?>" class="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"><i data-lucide="mail" class="w-4 h-4 text-gold"></i> <?= htmlspecialchars(CONTACT_EMAIL) ?></a></li>
            <li><a href="tel:<?= preg_replace('/\s+/', '', CONTACT_PHONE) ?>" class="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"><i data-lucide="phone" class="w-4 h-4 text-gold"></i> <?= htmlspecialchars(CONTACT_PHONE) ?></a></li>
            <li><a href="<?= htmlspecialchars(LINKEDIN_URL) ?>" target="_blank" rel="noopener" class="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"><i data-lucide="linkedin" class="w-4 h-4 text-gold"></i> LinkedIn Profile</a></li>
            <li class="flex items-center gap-3 text-white/70"><i data-lucide="map-pin" class="w-4 h-4 text-gold"></i> <?= htmlspecialchars(CONTACT_LOCATION) ?></li>
          </ul>
          <div class="flex flex-wrap gap-3 mt-8">
            <a href="<?= CV_PATH ?>" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2.5 rounded-lg text-sm" download><i data-lucide="download" class="w-4 h-4"></i> Download CV</a>
            <a href="speaking.php#booking" class="btn-lift inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:border-gold transition-colors"><i data-lucide="calendar" class="w-4 h-4"></i> Schedule Meeting</a>
          </div>
        </div>
        <form class="reveal space-y-4" action="#" method="POST" onsubmit="return false;">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-white/50 mb-1.5">Name</label>
              <input type="text" class="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" placeholder="Your name">
            </div>
            <div>
              <label class="block text-xs font-medium text-white/50 mb-1.5">Email</label>
              <input type="email" class="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" placeholder="you@organization.com">
            </div>
          </div>
          <div>
            <label class="block text-xs font-medium text-white/50 mb-1.5">Subject</label>
            <input type="text" class="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold" placeholder="Partnership inquiry">
          </div>
          <div>
            <label class="block text-xs font-medium text-white/50 mb-1.5">Message</label>
            <textarea rows="4" class="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold resize-none" placeholder="Tell me about your collaboration idea..."></textarea>
          </div>
          <button type="submit" class="w-full bg-gold text-navy font-semibold py-3.5 rounded-lg hover:brightness-110 transition-all btn-lift">Send Message</button>
        </form>
      </div>
      <!-- Map placeholder -->
      <div class="relative z-10 mt-10 rounded-xl overflow-hidden border border-white/10 h-48 bg-white/5 flex items-center justify-center">
        <p class="text-white/40 text-sm flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4"></i> <?= htmlspecialchars(CONTACT_LOCATION) ?> — Google Maps integration</p>
      </div>
    </div>
  </div>
</section>

<?php require_once __DIR__ . '/includes/partials/footer.php'; ?>
