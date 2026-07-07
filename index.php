<?php
require_once __DIR__ . '/includes/config.php';

$page_title = SITE_NAME;
$page_description = SITE_DESCRIPTION;

require_once __DIR__ . '/includes/header.php';
?>

<!-- Hero -->
<section class="hero" id="hero">
    <div class="hero__bg-pattern" aria-hidden="true"></div>
    <div class="container hero__inner">
        <div class="hero__content reveal">
            <p class="hero__eyebrow">International Youth Leader</p>
            <h1 class="hero__title"><?= htmlspecialchars(SITE_NAME) ?></h1>
            <p class="hero__subtitle"><?= htmlspecialchars(SITE_TAGLINE) ?></p>
            <p class="hero__summary">
                Transforming organizations through strategic leadership, partnership development,
                operational excellence, and youth empowerment across Africa.
            </p>
            <div class="hero__contact-bar">
                <a href="mailto:<?= htmlspecialchars(CONTACT_EMAIL) ?>"><?= htmlspecialchars(CONTACT_EMAIL) ?></a>
                <span class="divider">|</span>
                <a href="tel:<?= preg_replace('/\s+/', '', CONTACT_PHONE) ?>"><?= htmlspecialchars(CONTACT_PHONE) ?></a>
                <span class="divider">|</span>
                <a href="<?= htmlspecialchars(LINKEDIN_URL) ?>" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span class="divider">|</span>
                <span><?= htmlspecialchars(CONTACT_LOCATION) ?></span>
            </div>
            <div class="hero__actions">
                <a href="#contact" class="btn btn--primary">Get In Touch</a>
                <a href="assets/cv/vicent-manila-cv.pdf" class="btn btn--outline" download>Download CV</a>
            </div>
        </div>
        <div class="hero__visual reveal reveal--delay">
            <div class="hero__avatar">
                <span class="hero__initials">VM</span>
                <div class="hero__avatar-ring"></div>
            </div>
        </div>
    </div>
    <a href="#about" class="hero__scroll" aria-label="Scroll to about section">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
    </a>
</section>

<!-- About / Summary -->
<section class="section section--alt" id="about">
    <div class="container">
        <header class="section__header reveal">
            <span class="section__eyebrow">About</span>
            <h2 class="section__title">Summary</h2>
        </header>
        <div class="about-grid reveal">
            <div class="about-grid__main">
                <p class="lead"><?= htmlspecialchars(SITE_DESCRIPTION) ?></p>
                <div class="education-card">
                    <h3 class="education-card__title">Education</h3>
                    <div class="education-card__item">
                        <h4>Institute of Finance Management (IFM)</h4>
                        <p class="education-card__meta">Tanzania</p>
                        <p>Bachelor of Science in Social Protection</p>
                    </div>
                </div>
            </div>
            <div class="about-grid__side">
                <div class="info-card">
                    <h3>Languages</h3>
                    <ul class="tag-list">
                        <?php foreach ($languages as $lang): ?>
                            <li class="tag"><?= htmlspecialchars($lang) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div class="info-card">
                    <h3>Target Audience</h3>
                    <ul class="audience-list">
                        <?php foreach ($target_audience as $audience): ?>
                            <li><?= htmlspecialchars($audience) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Experience -->
<section class="section" id="experience">
    <div class="container">
        <header class="section__header reveal">
            <span class="section__eyebrow">Career</span>
            <h2 class="section__title">Experience</h2>
        </header>
        <div class="timeline">
            <?php foreach ($experience as $i => $job): ?>
                <article class="timeline__item reveal" style="--delay: <?= $i * 0.1 ?>s">
                    <div class="timeline__marker"></div>
                    <div class="timeline__content">
                        <h3 class="timeline__title"><?= htmlspecialchars($job['title']) ?></h3>
                        <p class="timeline__company"><?= htmlspecialchars($job['company']) ?></p>
                        <ul class="timeline__bullets">
                            <?php foreach ($job['bullets'] as $bullet): ?>
                                <li><?= htmlspecialchars($bullet) ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Projects -->
<section class="section section--alt" id="projects">
    <div class="container">
        <header class="section__header reveal">
            <span class="section__eyebrow">Portfolio</span>
            <h2 class="section__title">Projects</h2>
        </header>
        <div class="projects-grid">
            <?php foreach ($projects as $i => $project): ?>
                <article class="project-card reveal" style="--delay: <?= $i * 0.1 ?>s">
                    <div class="project-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <h3 class="project-card__title"><?= htmlspecialchars($project['title']) ?></h3>
                    <p class="project-card__desc"><?= htmlspecialchars($project['description']) ?></p>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Skills -->
<section class="section" id="skills">
    <div class="container">
        <header class="section__header reveal">
            <span class="section__eyebrow">Expertise</span>
            <h2 class="section__title">Technical Skills</h2>
        </header>
        <div class="skills-cloud reveal">
            <?php foreach ($skills as $skill): ?>
                <span class="skill-tag"><?= htmlspecialchars($skill) ?></span>
            <?php endforeach; ?>
        </div>

        <div class="certifications reveal">
            <h3 class="subsection-title">Certifications</h3>
            <ul class="cert-list">
                <?php foreach ($certifications as $cert): ?>
                    <li class="cert-list__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <?= htmlspecialchars($cert) ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</section>

<!-- Leadership Impact -->
<section class="section section--navy" id="impact">
    <div class="container">
        <header class="section__header section__header--light reveal">
            <span class="section__eyebrow section__eyebrow--gold">Results</span>
            <h2 class="section__title">Leadership Impact</h2>
        </header>
        <div class="stats-grid">
            <?php foreach ($impact_stats as $i => $stat): ?>
                <div class="stat-card reveal" style="--delay: <?= $i * 0.08 ?>s">
                    <span class="stat-card__value" data-count="<?= htmlspecialchars(preg_replace('/[^0-9+]/', '', $stat['value'])) ?>"><?= htmlspecialchars($stat['value']) ?></span>
                    <span class="stat-card__label"><?= htmlspecialchars($stat['label']) ?></span>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Testimonials -->
<section class="section section--alt" id="testimonials">
    <div class="container">
        <header class="section__header reveal">
            <span class="section__eyebrow">Recommendations</span>
            <h2 class="section__title">Testimonials</h2>
            <p class="section__subtitle">Recommendations from Country Leaders, Partners, Team Members, AIESEC Alumni, and Corporate Stakeholders.</p>
        </header>
        <div class="testimonials-grid">
            <?php foreach ($testimonials as $i => $testimonial): ?>
                <blockquote class="testimonial-card reveal" style="--delay: <?= $i * 0.1 ?>s">
                    <div class="testimonial-card__quote-icon" aria-hidden="true">&ldquo;</div>
                    <p class="testimonial-card__quote"><?= htmlspecialchars($testimonial['quote']) ?></p>
                    <footer class="testimonial-card__author">
                        <div class="testimonial-card__avatar"><?= strtoupper(substr($testimonial['name'], 0, 1)) ?></div>
                        <div>
                            <cite class="testimonial-card__name"><?= htmlspecialchars($testimonial['name']) ?></cite>
                            <p class="testimonial-card__role"><?= htmlspecialchars($testimonial['position']) ?>, <?= htmlspecialchars($testimonial['organization']) ?></p>
                        </div>
                    </footer>
                </blockquote>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Gallery -->
<section class="section" id="gallery">
    <div class="container">
        <header class="section__header reveal">
            <span class="section__eyebrow">Visuals</span>
            <h2 class="section__title">Gallery</h2>
            <p class="section__subtitle">Conference photos, leadership events, speaking engagements, team management, partnership ceremonies, and community projects.</p>
        </header>
        <div class="gallery-grid">
            <?php foreach ($gallery_items as $i => $item): ?>
                <figure class="gallery-item reveal" style="--delay: <?= $i * 0.08 ?>s">
                    <div class="gallery-item__placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                    <figcaption class="gallery-item__caption">
                        <strong><?= htmlspecialchars($item['title']) ?></strong>
                        <span><?= htmlspecialchars($item['category']) ?></span>
                    </figcaption>
                </figure>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Contact -->
<section class="section section--alt" id="contact">
    <div class="container">
        <header class="section__header reveal">
            <span class="section__eyebrow">Connect</span>
            <h2 class="section__title">Contact Me</h2>
        </header>
        <div class="contact-grid reveal">
            <div class="contact-info">
                <p class="lead">Ready to collaborate on strategic partnerships, leadership initiatives, or organizational development? Let's connect.</p>
                <ul class="contact-details">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <a href="mailto:<?= htmlspecialchars(CONTACT_EMAIL) ?>"><?= htmlspecialchars(CONTACT_EMAIL) ?></a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <a href="tel:<?= preg_replace('/\s+/', '', CONTACT_PHONE) ?>"><?= htmlspecialchars(CONTACT_PHONE) ?></a>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span><?= htmlspecialchars(CONTACT_LOCATION) ?></span>
                    </li>
                </ul>
                <div class="social-links">
                    <a href="<?= htmlspecialchars(LINKEDIN_URL) ?>" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                </div>
            </div>

            <form class="contact-form" id="contact-form" action="contact.php" method="POST" novalidate>
                <div id="form-message" class="form-message" role="alert" hidden></div>
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required autocomplete="name" placeholder="Your name">
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required autocomplete="email" placeholder="you@example.com">
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required placeholder="Partnership inquiry">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project or collaboration idea..."></textarea>
                </div>
                <input type="text" name="website" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">
                <button type="submit" class="btn btn--primary btn--full">
                    <span class="btn__text">Send Message</span>
                    <span class="btn__loader" hidden></span>
                </button>
            </form>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
