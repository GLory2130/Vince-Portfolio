<?php
require_once __DIR__ . '/includes/config.php';
$page_title = 'Gallery — ' . SITE_NAME;
$page_description = 'Conference photos, leadership sessions, speaking events, and international meetings from Vicent Manila\'s leadership journey.';
$current_page = 'gallery';
require_once __DIR__ . '/includes/partials/head.php';
require_once __DIR__ . '/includes/partials/nav.php';
?>

<section class="pt-32 pb-12 bg-white dark:bg-navy" x-data="galleryApp()">
  <div class="max-w-8xl mx-auto px-6">
    <p class="reveal section-label mb-3">Visual Archive</p>
    <h1 class="reveal section-title text-navy dark:text-white mb-4">Gallery</h1>
    <p class="reveal text-lg text-muted max-w-2xl mb-8">Leadership events, speaking engagements, partnerships, and international collaboration.</p>

    <div class="reveal flex flex-col sm:flex-row gap-4 mb-10">
      <div class="relative flex-1 max-w-md">
        <i data-lucide="search" class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted"></i>
        <input type="search" x-model="search" placeholder="Search gallery..." aria-label="Search gallery"
          class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-black/[0.08] dark:border-white/10 bg-canvas dark:bg-navy-secondary text-sm focus:outline-none focus:border-gold">
      </div>
      <div class="flex flex-wrap gap-2">
        <?php foreach ($gallery_filters as $key => $label): ?>
          <button @click="category = '<?= $key ?>'"
            :class="category === '<?= $key ?>' ? 'bg-gold text-navy' : 'bg-canvas dark:bg-navy-secondary text-muted border border-black/[0.08] dark:border-white/10'"
            class="text-sm px-3 py-1.5 rounded-lg transition-colors"><?= htmlspecialchars($label) ?></button>
        <?php endforeach; ?>
      </div>
    </div>

    <div class="masonry">
      <template x-for="item in filtered" :key="item.title">
        <figure class="masonry-item card-executive overflow-hidden cursor-pointer group" @click="openLightbox(item)">
          <div class="overflow-hidden">
            <img :src="item.src" :alt="item.title" class="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
          </div>
          <figcaption class="p-5">
            <span class="text-xs font-semibold text-gold uppercase" x-text="item.category"></span>
            <h3 class="font-semibold text-navy dark:text-white mt-1 mb-1" x-text="item.title"></h3>
            <p class="text-xs text-muted" x-text="item.location + ' · ' + item.date"></p>
            <p class="text-sm text-muted mt-2 leading-relaxed" x-text="item.description"></p>
          </figcaption>
        </figure>
      </template>
    </div>

    <!-- Lightbox -->
    <div x-show="lightbox" x-cloak @click="lightbox = false" @keydown.escape.window="lightbox = false" class="lightbox" role="dialog" aria-modal="true">
      <div @click.stop class="max-w-4xl text-center">
        <img :src="active?.src" :alt="active?.title" class="mx-auto rounded-xl mb-4">
        <h3 class="text-xl font-semibold text-white mb-1" x-text="active?.title"></h3>
        <p class="text-white/60 text-sm" x-text="active?.organization + ' · ' + active?.location + ' · ' + active?.date"></p>
        <p class="text-white/50 text-sm mt-2 max-w-lg mx-auto" x-text="active?.description"></p>
        <button @click="lightbox = false" class="mt-6 text-gold text-sm font-semibold">Close</button>
      </div>
    </div>
  </div>
</section>

<script>
function galleryApp() {
  const items = <?= json_encode($gallery_items) ?>;
  return {
    category: 'all',
    search: '',
    lightbox: false,
    active: null,
    get filtered() {
      return items.filter(i => {
        const matchCat = this.category === 'all' || i.category === this.category;
        const q = this.search.toLowerCase();
        const matchSearch = !q || i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q) || i.location.toLowerCase().includes(q);
        return matchCat && matchSearch;
      });
    },
    openLightbox(item) { this.active = item; this.lightbox = true; }
  };
}
</script>

<?php require_once __DIR__ . '/includes/partials/footer.php'; ?>
