<?php
require_once __DIR__ . '/includes/config.php';
$page_title = 'Projects — ' . SITE_NAME;
$page_description = 'Strategic projects in business development, international partnerships, leadership, and youth development by Vicent Manila.';
$current_page = 'projects';
require_once __DIR__ . '/includes/partials/head.php';
require_once __DIR__ . '/includes/partials/nav.php';
?>

<section class="pt-32 pb-12 bg-white dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <p class="reveal section-label mb-3">Portfolio</p>
    <h1 class="reveal section-title text-navy dark:text-white mb-4">All Projects</h1>
    <p class="reveal text-lg text-muted max-w-2xl leading-relaxed">Strategic initiatives across business development, international partnerships, leadership, and organizational growth.</p>
  </div>
</section>

<section class="pb-24" x-data="{ filter: 'all' }">
  <div class="max-w-8xl mx-auto px-6">
    <div class="reveal flex flex-wrap gap-2 mb-10">
      <?php foreach ($project_categories as $key => $label): ?>
        <button @click="filter = '<?= $key ?>'"
          :class="filter === '<?= $key ?>' ? 'bg-gold text-navy border-gold' : 'bg-white dark:bg-navy-secondary text-muted border-black/[0.08] dark:border-white/10'"
          class="text-sm font-medium px-4 py-2 rounded-lg border transition-colors"><?= htmlspecialchars($label) ?></button>
      <?php endforeach; ?>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <?php foreach ($projects as $p): ?>
        <article class="reveal card-executive overflow-hidden group"
          x-show="filter === 'all' || filter === '<?= $p['category'] ?>'"
          x-transition>
          <a href="project.php?slug=<?= urlencode($p['slug']) ?>" class="block aspect-[16/10] overflow-hidden">
            <img src="<?= htmlspecialchars($p['image']) ?>" alt="<?= htmlspecialchars($p['title']) ?>" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          </a>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-gold uppercase"><?= htmlspecialchars($p['category_label']) ?></span>
              <span class="text-xs text-muted"><?= htmlspecialchars($p['year']) ?></span>
            </div>
            <h2 class="text-xl font-semibold text-navy dark:text-white mb-2">
              <a href="project.php?slug=<?= urlencode($p['slug']) ?>" class="hover:text-gold transition-colors"><?= htmlspecialchars($p['title']) ?></a>
            </h2>
            <p class="text-sm text-muted leading-relaxed mb-4"><?= htmlspecialchars($p['summary']) ?></p>
            <a href="project.php?slug=<?= urlencode($p['slug']) ?>" class="inline-flex items-center gap-1 text-sm font-semibold hover:text-gold transition-colors">
              View case study <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php require_once __DIR__ . '/includes/partials/footer.php'; ?>
