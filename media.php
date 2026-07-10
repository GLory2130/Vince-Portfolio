<?php
require_once __DIR__ . '/includes/config.php';
$page_title = 'Media — ' . SITE_NAME;
$page_description = 'Press features, articles, interviews, videos, and podcasts featuring Vicent Manila.';
$current_page = 'media';
require_once __DIR__ . '/includes/partials/head.php';
require_once __DIR__ . '/includes/partials/nav.php';
?>

<section class="pt-32 pb-12 bg-white dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <p class="reveal section-label mb-3">Media</p>
    <h1 class="reveal section-title text-navy dark:text-white mb-4">Press & Media</h1>
    <p class="reveal text-lg text-muted max-w-2xl">Articles, interviews, press features, and thought leadership on youth development and strategic partnerships.</p>
  </div>
</section>

<section class="pb-24" x-data="{ filter: 'all' }">
  <div class="max-w-8xl mx-auto px-6">
    <div class="flex flex-wrap gap-2 mb-10">
      <?php foreach (['all' => 'All', 'Article' => 'Articles', 'Interview' => 'Interviews', 'Press Feature' => 'Press', 'Podcast' => 'Podcasts', 'Video' => 'Videos'] as $key => $label): ?>
        <button @click="filter = '<?= $key ?>'"
          :class="filter === '<?= $key ?>' ? 'bg-gold text-navy' : 'bg-canvas dark:bg-navy-secondary text-muted border border-black/[0.08] dark:border-white/10'"
          class="text-sm px-4 py-2 rounded-lg transition-colors"><?= $label ?></button>
      <?php endforeach; ?>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <?php foreach ($media_items as $m): ?>
        <article class="reveal card-executive p-8"
          x-show="filter === 'all' || filter === '<?= htmlspecialchars($m['type']) ?>'"
          x-transition>
          <div class="flex items-center gap-3 mb-4">
            <?php
            $media_icons = ['Video' => 'play-circle', 'Podcast' => 'headphones', 'Interview' => 'mic'];
            $icon = $media_icons[$m['type']] ?? 'file-text';
            ?>
            <i data-lucide="<?= $icon ?>" class="w-5 h-5 text-gold"></i>
            <span class="text-xs font-semibold text-gold uppercase"><?= htmlspecialchars($m['type']) ?></span>
            <span class="text-xs text-muted ml-auto"><?= htmlspecialchars($m['date']) ?></span>
          </div>
          <h2 class="text-xl font-semibold text-navy dark:text-white mb-2"><?= htmlspecialchars($m['title']) ?></h2>
          <p class="text-sm text-muted mb-3"><?= htmlspecialchars($m['source']) ?></p>
          <p class="text-muted leading-relaxed"><?= htmlspecialchars($m['excerpt']) ?></p>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="py-16 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6 text-center">
    <h2 class="text-2xl font-bold text-navy dark:text-white mb-4">Media Downloads</h2>
    <p class="text-muted mb-8 max-w-lg mx-auto">Press materials, biography, and brand assets for media inquiries.</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="<?= CV_PATH ?>" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-6 py-3 rounded-lg text-sm" download><i data-lucide="download" class="w-4 h-4"></i> Download CV</a>
      <a href="speaking.php" class="btn-lift inline-flex items-center gap-2 border border-black/[0.08] dark:border-white/10 font-semibold px-6 py-3 rounded-lg text-sm hover:border-gold transition-colors"><i data-lucide="mic" class="w-4 h-4"></i> Speaking Profile</a>
    </div>
  </div>
</section>

<?php require_once __DIR__ . '/includes/partials/footer.php'; ?>
