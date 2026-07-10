<?php
require_once __DIR__ . '/includes/config.php';

$slug = $_GET['slug'] ?? '';
$project = get_project_by_slug($slug, $projects);

if (!$project) {
    header('Location: projects.php');
    exit;
}

$page_title = $project['title'] . ' — ' . SITE_NAME;
$page_description = $project['summary'];
$current_page = 'projects';

require_once __DIR__ . '/includes/partials/head.php';
require_once __DIR__ . '/includes/partials/nav.php';
?>

<!-- Hero Banner -->
<section class="pt-28 pb-0 relative overflow-hidden">
  <div class="relative aspect-[21/9] max-h-[480px] overflow-hidden">
    <img src="<?= htmlspecialchars($project['image']) ?>" alt="<?= htmlspecialchars($project['title']) ?>" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
  </div>
  <div class="max-w-8xl mx-auto px-6 -mt-32 relative z-10 pb-12">
    <span class="inline-block text-xs font-semibold text-gold uppercase tracking-wider bg-navy/80 backdrop-blur px-3 py-1 rounded-lg mb-4"><?= htmlspecialchars($project['category_label']) ?> · <?= htmlspecialchars($project['year']) ?></span>
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"><?= htmlspecialchars($project['title']) ?></h1>
    <p class="text-lg text-white/70 max-w-2xl"><?= htmlspecialchars($project['summary']) ?></p>
  </div>
</section>

<section class="py-16 bg-canvas dark:bg-navy">
  <div class="max-w-3xl mx-auto px-6 prose-cs">
    <h3>Overview</h3>
    <p><?= htmlspecialchars($project['overview']) ?></p>

    <h3>Challenge</h3>
    <p><?= htmlspecialchars($project['challenge']) ?></p>

    <h3>Objectives</h3>
    <ul>
      <?php foreach ($project['objectives'] as $obj): ?>
        <li><?= htmlspecialchars($obj) ?></li>
      <?php endforeach; ?>
    </ul>

    <h3>Role</h3>
    <p><?= htmlspecialchars($project['role']) ?></p>

    <h3>Strategy</h3>
    <p><?= htmlspecialchars($project['strategy']) ?></p>

    <h3>Execution</h3>
    <p><?= htmlspecialchars($project['execution']) ?></p>

    <h3>Results</h3>
    <ul>
      <?php foreach ($project['results'] as $r): ?>
        <li><?= htmlspecialchars($r) ?></li>
      <?php endforeach; ?>
    </ul>

    <h3>Impact</h3>
    <p><?= htmlspecialchars($project['impact']) ?></p>
  </div>
</section>

<?php if (!empty($project['gallery'])): ?>
<section class="py-16 bg-white dark:bg-navy-secondary/20">
  <div class="max-w-8xl mx-auto px-6">
    <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Project Gallery</h2>
    <div class="grid md:grid-cols-2 gap-4">
      <?php foreach ($project['gallery'] as $img): ?>
        <img src="<?= htmlspecialchars($img) ?>" alt="Project gallery image" class="rounded-xl w-full aspect-video object-cover" loading="lazy">
      <?php endforeach; ?>
    </div>
  </div>
</section>
<?php endif; ?>

<?php if (!empty($project['related'])): ?>
<section class="py-16 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Related Projects</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <?php foreach ($project['related'] as $rel_slug):
        $rel = get_project_by_slug($rel_slug, $projects);
        if (!$rel) continue;
      ?>
        <a href="project.php?slug=<?= urlencode($rel['slug']) ?>" class="card-executive p-6 flex items-center gap-4 group">
          <img src="<?= htmlspecialchars($rel['image']) ?>" alt="" class="w-20 h-20 rounded-lg object-cover shrink-0" loading="lazy">
          <div>
            <p class="text-xs text-gold font-semibold uppercase"><?= htmlspecialchars($rel['category_label']) ?></p>
            <p class="font-semibold text-navy dark:text-white group-hover:text-gold transition-colors"><?= htmlspecialchars($rel['title']) ?></p>
          </div>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>
<?php endif; ?>

<?php require_once __DIR__ . '/includes/partials/footer.php'; ?>
