<?php
require_once __DIR__ . '/config.php';

$page_title = $page_title ?? SITE_NAME;
$page_description = $page_description ?? SITE_DESCRIPTION;
?>
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?= htmlspecialchars($page_description) ?>">
    <meta name="keywords" content="<?= htmlspecialchars(SEO_KEYWORDS) ?>">
    <meta name="author" content="<?= htmlspecialchars(SITE_NAME) ?>">
    <meta property="og:title" content="<?= htmlspecialchars($page_title) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($page_description) ?>">
    <meta property="og:type" content="website">
    <title><?= htmlspecialchars($page_title) ?> | <?= htmlspecialchars(SITE_TAGLINE) ?></title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <header class="site-header" id="site-header">
        <nav class="nav container" aria-label="Main navigation">
            <a href="#hero" class="nav__logo">
                <span class="nav__logo-mark">VM</span>
                <span class="nav__logo-text"><?= htmlspecialchars(SITE_NAME) ?></span>
            </a>

            <button class="nav__toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="nav__menu" id="nav-menu">
                <li><a href="#about" class="nav__link">About</a></li>
                <li><a href="#experience" class="nav__link">Experience</a></li>
                <li><a href="#projects" class="nav__link">Projects</a></li>
                <li><a href="#skills" class="nav__link">Skills</a></li>
                <li><a href="#impact" class="nav__link">Impact</a></li>
                <li><a href="#testimonials" class="nav__link">Testimonials</a></li>
                <li><a href="#gallery" class="nav__link">Gallery</a></li>
                <li><a href="#contact" class="nav__link nav__link--cta">Contact</a></li>
            </ul>

            <div class="nav__actions">
                <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
                    <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                    <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                </button>
                <a href="assets/cv/vicent-manila-cv.pdf" class="btn btn--sm btn--gold" download>Download CV</a>
            </div>
        </nav>
    </header>

    <main id="main-content">
