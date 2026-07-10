</main>

<footer class="bg-navy text-white/70 border-t border-white/10">
  <div class="max-w-8xl mx-auto px-6 py-16">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div class="lg:col-span-1">
        <div class="flex items-center gap-2.5 mb-4">
          <span class="w-10 h-10 flex items-center justify-center bg-gold text-navy rounded-lg text-sm font-bold">VM</span>
          <div>
            <p class="font-semibold text-white text-sm"><?= htmlspecialchars(SITE_NAME) ?></p>
            <p class="text-xs text-white/50"><?= htmlspecialchars(SITE_TAGLINE) ?></p>
          </div>
        </div>
        <p class="text-sm leading-relaxed text-white/50">International business development leader building partnerships and empowering youth across Africa.</p>
      </div>

      <div>
        <h3 class="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Navigation</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="index.php#about" class="hover:text-gold transition-colors">About</a></li>
          <li><a href="leadership.php" class="hover:text-gold transition-colors">Leadership</a></li>
          <li><a href="projects.php" class="hover:text-gold transition-colors">Projects</a></li>
          <li><a href="gallery.php" class="hover:text-gold transition-colors">Gallery</a></li>
          <li><a href="speaking.php" class="hover:text-gold transition-colors">Speaking</a></li>
          <li><a href="media.php" class="hover:text-gold transition-colors">Media</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Connect</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="mailto:<?= htmlspecialchars(CONTACT_EMAIL) ?>" class="hover:text-gold transition-colors flex items-center gap-2"><i data-lucide="mail" class="w-4 h-4"></i> <?= htmlspecialchars(CONTACT_EMAIL) ?></a></li>
          <li><a href="<?= htmlspecialchars(LINKEDIN_URL) ?>" target="_blank" rel="noopener" class="hover:text-gold transition-colors flex items-center gap-2"><i data-lucide="linkedin" class="w-4 h-4"></i> LinkedIn</a></li>
          <li><a href="tel:<?= preg_replace('/\s+/', '', CONTACT_PHONE) ?>" class="hover:text-gold transition-colors flex items-center gap-2"><i data-lucide="phone" class="w-4 h-4"></i> <?= htmlspecialchars(CONTACT_PHONE) ?></a></li>
          <li><a href="<?= CV_PATH ?>" download class="hover:text-gold transition-colors flex items-center gap-2"><i data-lucide="download" class="w-4 h-4"></i> Download CV</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Newsletter</h3>
        <p class="text-sm text-white/50 mb-3">Insights on leadership, partnerships, and international development.</p>
        <form class="flex gap-2" onsubmit="return false;">
          <input type="email" placeholder="Your email" aria-label="Email for newsletter"
            class="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold">
          <button type="submit" class="bg-gold text-navy px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition-all">Join</button>
        </form>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/40">
      <p>&copy; <?= date('Y') ?> <?= htmlspecialchars(SITE_NAME) ?>. All rights reserved.</p>
      <p><?= htmlspecialchars(CONTACT_LOCATION) ?></p>
    </div>
  </div>
</footer>

<button type="button" id="back-to-top" class="back-to-top" aria-label="Back to top" hidden>
  <i data-lucide="arrow-up" class="w-5 h-5"></i>
</button>

<script src="assets/js/site.js"></script>
</body>
</html>
