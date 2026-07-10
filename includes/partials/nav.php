<header class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
  :class="scrolled ? 'bg-white/85 dark:bg-navy/90 backdrop-blur-xl shadow-sm border-b border-black/[0.06] dark:border-white/[0.06]' : 'bg-transparent'">
  <nav class="max-w-8xl mx-auto px-6 h-[4.5rem] flex items-center justify-between transition-all duration-300"
    :class="scrolled ? 'h-16' : 'h-[4.5rem]'" aria-label="Main navigation">

    <a href="index.php" class="flex items-center gap-2.5 z-10 group">
      <span class="w-9 h-9 flex items-center justify-center bg-navy dark:bg-gold text-gold dark:text-navy rounded-lg text-xs font-bold tracking-tight transition-transform group-hover:scale-105">VM</span>
      <span class="hidden sm:block font-semibold text-sm text-navy dark:text-white"><?= htmlspecialchars(SITE_NAME) ?></span>
    </a>

    <ul class="hidden lg:flex items-center gap-1" role="list">
      <?php foreach ($nav_items as $item): ?>
        <?php if (!empty($item['cta'])) continue; ?>
        <li>
          <a href="<?= htmlspecialchars($item['href']) ?>"
             class="nav-link px-3 py-2 text-sm font-medium rounded-lg transition-colors <?= ($current_page === ($item['page'] ?? '')) ? 'text-gold' : 'text-muted dark:text-zinc-400 hover:text-navy dark:hover:text-white' ?>">
            <?= htmlspecialchars($item['label']) ?>
          </a>
        </li>
      <?php endforeach; ?>
    </ul>

    <div class="flex items-center gap-2">
      <button @click="dark = !dark" class="w-9 h-9 flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10 hover:bg-white dark:hover:bg-navy-secondary transition-colors" :aria-label="dark ? 'Light mode' : 'Dark mode'">
        <i data-lucide="moon" class="w-4 h-4" x-show="!dark"></i>
        <i data-lucide="sun" class="w-4 h-4" x-show="dark" x-cloak></i>
      </button>
      <a href="<?= CV_PATH ?>" class="hidden md:inline-flex items-center gap-1.5 bg-gold text-navy text-sm font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition-all btn-lift" download>
        <i data-lucide="download" class="w-4 h-4"></i> CV
      </a>
      <a href="index.php#contact" class="hidden md:inline-flex items-center gap-1.5 bg-navy dark:bg-white text-white dark:text-navy text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-all btn-lift">
        Contact
      </a>
      <button @click="mobileOpen = !mobileOpen" class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10" :aria-expanded="mobileOpen" aria-label="Toggle menu">
        <i data-lucide="menu" class="w-4 h-4" x-show="!mobileOpen"></i>
        <i data-lucide="x" class="w-4 h-4" x-show="mobileOpen" x-cloak></i>
      </button>
    </div>
  </nav>

  <!-- Mobile drawer -->
  <div x-show="mobileOpen" x-cloak
    x-transition:enter="transition ease-out duration-300"
    x-transition:enter-start="opacity-0"
    x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in duration-200"
    x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0"
    class="lg:hidden fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm"
    @click="mobileOpen = false"></div>

  <div x-show="mobileOpen" x-cloak
    x-transition:enter="transition ease-out duration-300 transform"
    x-transition:enter-start="translate-x-full"
    x-transition:enter-end="translate-x-0"
    x-transition:leave="transition ease-in duration-200 transform"
    x-transition:leave-start="translate-x-0"
    x-transition:leave-end="translate-x-full"
    class="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[min(320px,88vw)] bg-white dark:bg-navy border-l border-black/[0.08] dark:border-white/10 shadow-2xl">
    <div class="flex flex-col h-full pt-20 px-6 pb-8">
      <ul class="flex flex-col gap-1" role="list">
        <?php foreach ($nav_items as $item): ?>
          <li>
            <a href="<?= htmlspecialchars($item['href']) ?>" @click="mobileOpen = false"
               class="block px-3 py-3 text-base font-medium rounded-lg transition-colors <?= !empty($item['cta']) ? 'mt-4 bg-navy text-white text-center' : 'text-ink dark:text-zinc-300 hover:bg-canvas dark:hover:bg-navy-secondary' ?>">
              <?= htmlspecialchars($item['label']) ?>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
      <a href="<?= CV_PATH ?>" class="mt-auto flex items-center justify-center gap-2 bg-gold text-navy font-semibold py-3 rounded-lg" download>
        <i data-lucide="download" class="w-4 h-4"></i> Download CV
      </a>
    </div>
  </div>
</header>

<main id="main-content">
