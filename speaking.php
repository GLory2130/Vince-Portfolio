<?php
require_once __DIR__ . '/includes/config.php';
$page_title = 'Speaking — ' . SITE_NAME;
$page_description = 'Keynotes, panel discussions, and speaking engagements by Vicent Manila on youth leadership, partnerships, and international development.';
$current_page = 'speaking';
require_once __DIR__ . '/includes/partials/head.php';
require_once __DIR__ . '/includes/partials/nav.php';
?>

<section class="pt-32 pb-12 bg-white dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <p class="reveal section-label mb-3">Speaking</p>
    <h1 class="reveal section-title text-navy dark:text-white mb-4">Speaking & Engagements</h1>
    <p class="reveal text-lg text-muted max-w-2xl">Keynotes, panel discussions, and workshops on youth leadership, strategic partnerships, and international development.</p>
  </div>
</section>

<!-- Topics -->
<section class="py-16 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6">
    <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Speaking Topics</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <?php foreach ($speaking_topics as $i => $topic): ?>
        <div class="reveal card-executive p-6 flex items-start gap-3" style="--d:<?= $i * 0.05 ?>s">
          <i data-lucide="mic" class="w-5 h-5 text-gold shrink-0 mt-0.5"></i>
          <p class="font-medium text-navy dark:text-white"><?= htmlspecialchars($topic) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Engagements -->
<section class="py-16 bg-white dark:bg-navy-secondary/20">
  <div class="max-w-8xl mx-auto px-6">
    <h2 class="text-2xl font-bold text-navy dark:text-white mb-8">Past Engagements</h2>
    <div class="space-y-4">
      <?php foreach ($speaking_engagements as $eng): ?>
        <div class="reveal card-executive p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-semibold text-gold uppercase"><?= htmlspecialchars($eng['type']) ?></span>
            <h3 class="text-lg font-semibold text-navy dark:text-white mt-1"><?= htmlspecialchars($eng['title']) ?></h3>
            <p class="text-sm text-muted"><?= htmlspecialchars($eng['event']) ?></p>
          </div>
          <div class="text-sm text-muted shrink-0 flex items-center gap-4">
            <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> <?= htmlspecialchars($eng['location']) ?></span>
            <span><?= htmlspecialchars($eng['date']) ?></span>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Media Kit & Booking -->
<section class="py-16 bg-canvas dark:bg-navy">
  <div class="max-w-8xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
    <div class="card-executive p-8">
      <h2 class="text-xl font-bold text-navy dark:text-white mb-4">Media Kit</h2>
      <p class="text-muted leading-relaxed mb-6">Download professional biography, headshots, speaking topics, and brand assets for event organizers and media inquiries.</p>
      <a href="<?= CV_PATH ?>" class="btn-lift inline-flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2.5 rounded-lg text-sm" download>
        <i data-lucide="download" class="w-4 h-4"></i> Download Media Kit
      </a>
    </div>
    <div class="card-executive p-8" id="booking">
      <h2 class="text-xl font-bold text-navy dark:text-white mb-4">Book a Speaking Engagement</h2>
      <form class="space-y-4" onsubmit="return false;">
        <input type="text" placeholder="Organization name" class="w-full px-4 py-3 rounded-lg border border-black/[0.08] dark:border-white/10 bg-white dark:bg-navy text-sm focus:outline-none focus:border-gold">
        <input type="email" placeholder="Contact email" class="w-full px-4 py-3 rounded-lg border border-black/[0.08] dark:border-white/10 bg-white dark:bg-navy text-sm focus:outline-none focus:border-gold">
        <input type="text" placeholder="Event type & date" class="w-full px-4 py-3 rounded-lg border border-black/[0.08] dark:border-white/10 bg-white dark:bg-navy text-sm focus:outline-none focus:border-gold">
        <textarea rows="3" placeholder="Event details..." class="w-full px-4 py-3 rounded-lg border border-black/[0.08] dark:border-white/10 bg-white dark:bg-navy text-sm focus:outline-none focus:border-gold resize-none"></textarea>
        <button type="submit" class="w-full bg-navy dark:bg-gold text-white dark:text-navy font-semibold py-3 rounded-lg btn-lift">Submit Inquiry</button>
      </form>
    </div>
  </div>
</section>

<!-- Speaking Gallery -->
<section class="py-16 bg-white dark:bg-navy-secondary/20">
  <div class="max-w-8xl mx-auto px-6">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold text-navy dark:text-white">Speaking Gallery</h2>
      <a href="gallery.php" class="text-sm font-semibold text-gold hover:underline">Full gallery →</a>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      <?php foreach (array_filter($gallery_items, fn($g) => $g['category'] === 'speaking') as $item): ?>
        <figure class="card-executive overflow-hidden">
          <img src="<?= htmlspecialchars($item['src']) ?>" alt="<?= htmlspecialchars($item['title']) ?>" class="w-full aspect-video object-cover" loading="lazy">
          <figcaption class="p-4">
            <p class="font-semibold text-navy dark:text-white text-sm"><?= htmlspecialchars($item['title']) ?></p>
            <p class="text-xs text-muted"><?= htmlspecialchars($item['location']) ?></p>
          </figcaption>
        </figure>
      <?php endforeach; ?>
      <?php if (empty(array_filter($gallery_items, fn($g) => $g['category'] === 'speaking'))): ?>
        <?php foreach (array_slice($gallery_items, 0, 3) as $item): ?>
          <figure class="card-executive overflow-hidden">
            <img src="<?= htmlspecialchars($item['src']) ?>" alt="<?= htmlspecialchars($item['title']) ?>" class="w-full aspect-video object-cover" loading="lazy">
            <figcaption class="p-4">
              <p class="font-semibold text-navy dark:text-white text-sm"><?= htmlspecialchars($item['title']) ?></p>
            </figcaption>
          </figure>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
  </div>
</section>

<?php require_once __DIR__ . '/includes/partials/footer.php'; ?>
