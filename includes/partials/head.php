<?php
/** @var string $page_title */
/** @var string $page_description */
/** @var string $current_page */
$page_title = $page_title ?? SITE_NAME;
$page_description = $page_description ?? 'International Business Development Leader, Country Director, and Strategic Partnerships Specialist.';
$current_page = $current_page ?? 'home';
?>
<!DOCTYPE html>
<html lang="en" x-data="siteApp()" :class="{'dark': dark}" class="scroll-smooth">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="<?= htmlspecialchars($page_description) ?>">
<meta name="author" content="<?= htmlspecialchars(SITE_NAME) ?>">
<meta name="theme-color" content="#0B1F3A">
<meta property="og:title" content="<?= htmlspecialchars($page_title) ?>">
<meta property="og:description" content="<?= htmlspecialchars($page_description) ?>">
<meta property="og:type" content="website">
<title><?= htmlspecialchars($page_title) ?></title>

<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script defer src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/executive.css">
<link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">

<script>
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        navy: '#0B1F3A',
        'navy-secondary': '#1C3557',
        gold: '#C8A03B',
        canvas: '#F8FAFC',
        ink: '#162033',
        muted: '#667085',
      },
      maxWidth: { '8xl': '1280px' }
    }
  }
}
</script>
</head>
<body class="bg-canvas dark:bg-navy text-ink dark:text-white font-sans antialiased">

<a href="#main-content" class="skip-link">Skip to main content</a>
