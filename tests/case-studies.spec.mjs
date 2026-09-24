import { test, expect } from '@playwright/test';

const base = 'http://127.0.0.1:4173';

test('home shows consulting and livelihoods as separate featured case studies', async ({ page }) => {
  await page.goto(base + '/index.html');
  const features = page.locator('#work .vm-feature');
  await expect(features).toHaveCount(3);
  await expect(features.nth(0)).toContainText('INNOVEX');
  await expect(features.nth(1)).toContainText('Mo Dewji Foundation');

  const profile = page.locator('#profile');
  await expect(profile.locator('.vm-profile-case')).toHaveCount(2);
  await expect(profile.locator('a[href="project.html?slug=innovex-consulting"]')).toBeVisible();
  await expect(profile.locator('a[href="project.html?slug=mo-dewji-livelihoods"]')).toBeVisible();
  await expect(profile.getByRole('link', { name: 'View full CV' }))
    .toHaveAttribute('href', 'assets/cv/vicent-manila-cv.pdf');
});

test('independent case studies have loaded hero photography and accurate activity headings', async ({ page }) => {
  const cases = [
    ['innovex-consulting', 'INNOVEX', 'Scope & Contribution'],
    ['mo-dewji-livelihoods', 'Mo Dewji Foundation', 'Programme Activities'],
  ];

  for (const [slug, name, heading] of cases) {
    await page.goto(base + '/project.html?slug=' + slug);
    const hero = page.locator('.project-hero--editorial');
    await expect(hero).toBeVisible();
    await expect(hero.getByRole('heading', { level: 1 })).toContainText(name);
    await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    const img = hero.locator('img');
    await expect.poll(() => img.evaluate(el => el.complete && el.naturalWidth > 0)).toBe(true);
  }
});

test('the work index can independently filter consulting and livelihoods', async ({ page }) => {
  await page.goto(base + '/projects.html');
  const cards = page.locator('.vm-project-item');
  await page.locator('[data-filter="consulting"]').click();
  await expect(page.locator('.vm-project-item:visible')).toHaveCount(1);
  await expect(page.locator('.vm-project-item:visible').first()).toContainText('INNOVEX');
  await page.locator('[data-filter="livelihoods"]').click();
  await expect(page.locator('.vm-project-item:visible')).toHaveCount(1);
  await expect(page.locator('.vm-project-item:visible').first()).toContainText('Mo Dewji Foundation');
});

test('new career links and narrow-screen profile avoid horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto(base + '/index.html');
  await expect(page.locator('#profile .vm-profile-case')).toHaveCount(2);
  await expect(page.locator('#experience a[href="project.html?slug=innovex-consulting"]')).toBeVisible();
  const metrics = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewport + 1);
});


for (const viewport of [
  { width: 320, height: 720 },
  { width: 375, height: 812 },
  { width: 1280, height: 800 },
]) {
  test(`portrait photography keeps faces within the frame at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto(base + '/index.html');

    const barrick = page.locator('.vm-publication--portrait .vm-publication__media');
    const livelihoods = page.locator('#work .vm-feature--portrait').first().locator('.vm-feature__media');
    const expectedBarrick = viewport.width <= 599 ? '4 / 5' : '4 / 3';
    const expectedLivelihoods = viewport.width <= 599 ? '4 / 5' : '5 / 4';

    await expect(barrick).toBeVisible();
    await expect(livelihoods).toBeVisible();
    await expect(barrick).toHaveCSS('aspect-ratio', expectedBarrick);
    await expect(livelihoods).toHaveCSS('aspect-ratio', expectedLivelihoods);

    for (const media of [barrick, livelihoods]) {
      await media.scrollIntoViewIfNeeded();
      const photo = media.locator('img');
      await expect.poll(() => photo.evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
      await expect(photo).toHaveCSS('object-fit', 'cover');
      await expect(photo).toHaveAttribute('style', /object-position:center top/);
    }

    const profilePhoto = page.locator('#profile a[href="project.html?slug=mo-dewji-livelihoods"] img');
    await expect(profilePhoto).toHaveAttribute('style', /object-position:center top/);
    const widths = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      page: document.documentElement.scrollWidth,
    }));
    expect(widths.page).toBeLessThanOrEqual(widths.viewport + 1);
  });
}

test('portrait focal point carries into the Mo Dewji case-study hero', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(base + '/project.html?slug=mo-dewji-livelihoods');
  const hero = page.locator('.project-hero--editorial');
  await expect(hero).toBeVisible();
  await expect(hero).toHaveAttribute('style', /--img-pos:center top/);
  await expect.poll(() => hero.locator('img').evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
});
