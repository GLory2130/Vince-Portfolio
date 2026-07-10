<?php
require_once __DIR__ . '/includes/config.php';
$page_title = 'Leadership — ' . SITE_NAME;
$page_description = 'Leadership journey, philosophy, international experience, and strategic initiatives of Vicent Manila.';
$current_page = 'leadership';
require_once __DIR__ . '/includes/partials/head.php';
require_once __DIR__ . '/includes/partials/nav.php';
?>

<section class="pt-32 pb-12 bg-white dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <p class="reveal section-label mb-3">Leadership</p>
    <h1 class="reveal section-title text-navy dark:text-white mb-4">Leadership Journey</h1>
    <p class="reveal text-lg text-muted max-w-2xl"><?= htmlspecialchars($about['philosophy']) ?></p>
  </div>
</section>

<!-- Metrics -->
<section class="py-16 bg-navy">
  <div class="max-w-8xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    <?php foreach ($impact_stats as $stat): ?>
      <div class="stat-card text-center p-5">
        <p class="text-2xl font-bold text-gold" data-count="<?= $stat['value'] ?>" data-suffix="<?= $stat['suffix'] ?>">0<?= $stat['suffix'] ?></p>
        <p class="text-xs text-white/50 mt-1"><?= htmlspecialchars($stat['label']) ?></p>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<!-- Full Timeline -->
<section class="py-24 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <h2 class="text-2xl font-bold text-navy dark:text-white mb-12">Complete Timeline</h2>
    <div class="relative max-w-3xl mx-auto" id="timeline">
      <div class="timeline-line"></div>
      <div class="timeline-progress" id="timeline-progress"></div>
      <?php foreach ($experience as $i => $job): ?>
        <article class="reveal relative pl-10 pb-10 last:pb-0" style="--d:<?= $i * 0.05 ?>s">
          <div class="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-gold bg-canvas dark:bg-navy z-10"></div>
          <div class="card-executive p-8">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span class="text-xs font-semibold text-gold uppercase tracking-wider px-2 py-1 bg-gold/10 rounded"><?= htmlspecialchars($job['period']) ?></span>
              <span class="text-xs text-muted flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> <?= htmlspecialchars($job['country']) ?></span>
            </div>
            <h3 class="text-xl font-semibold text-navy dark:text-white mb-1"><?= htmlspecialchars($job['title']) ?></h3>
            <p class="text-sm font-medium text-muted mb-4"><?= htmlspecialchars($job['organization']) ?></p>
            <p class="text-sm text-muted leading-relaxed mb-6"><?= htmlspecialchars($job['overview']) ?></p>

            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 class="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Responsibilities</h4>
                <ul class="space-y-2">
                  <?php foreach ($job['responsibilities'] as $r): ?>
                    <li class="text-sm text-muted flex gap-2"><span class="text-gold">·</span> <?= htmlspecialchars($r) ?></li>
                  <?php endforeach; ?>
                </ul>
              </div>
              <div>
                <h4 class="text-xs font-semibold uppercase tracking-wider text-gold mb-3">Achievements</h4>
                <ul class="space-y-2">
                  <?php foreach ($job['achievements'] as $a): ?>
                    <li class="text-sm text-muted flex gap-2"><span class="text-gold">·</span> <?= htmlspecialchars($a) ?></li>
                  <?php endforeach; ?>
                </ul>
              </div>
            </div>

            <div class="pt-4 border-t border-black/[0.06] dark:border-white/10">
              <p class="text-sm text-muted mb-3"><strong class="text-navy dark:text-white">Impact:</strong> <?= htmlspecialchars($job['impact']) ?></p>
              <div class="flex flex-wrap gap-2">
                <?php foreach ($job['skills'] as $sk): ?>
                  <span class="text-xs px-2.5 py-1 rounded-full bg-canvas dark:bg-navy border border-black/[0.06] dark:border-white/10 text-muted"><?= htmlspecialchars($sk) ?></span>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Organizations -->
<section class="py-24 bg-white dark:bg-navy-secondary/20">
  <div class="max-w-8xl mx-auto px-6">
    <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Organizations Served</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <?php foreach ($organizations as $org): ?>
        <div class="card-executive p-6 text-center">
          <i data-lucide="building-2" class="w-6 h-6 text-gold mx-auto mb-3"></i>
          <p class="font-semibold text-navy dark:text-white text-sm"><?= htmlspecialchars($org) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Global Contributions -->
<section class="py-24 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Global Contributions</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <?php foreach ($about['international'] as $intl): ?>
        <div class="card-executive p-8">
          <h3 class="text-xl font-semibold text-navy dark:text-white mb-2"><?= htmlspecialchars($intl['country']) ?></h3>
          <p class="text-muted"><?= htmlspecialchars($intl['role']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php require_once __DIR__ . '/includes/partials/footer.php'; ?>
