import { test, expect } from '@playwright/test';

const routes = [
  ['Home', '/index.html'],
  ['Leadership', '/leadership.html'],
  ['Selected Work', '/projects.html'],
  ['Case Study', '/project.html?slug=leading-aiesec-rwanda'],
  ['Gallery', '/gallery.html'],
  ['Speaking', '/speaking.html'],
  ['Appendix', '/appendix.html'],
];

const viewports = [
  { name: 'phone-320', width: 320, height: 720 },
  { name: 'phone-375', width: 375, height: 812 },
  { name: 'phone-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-breakpoint-900', width: 900, height: 900 },
  { name: 'desktop-1280', width: 1280, height: 800 },
];

for (const viewport of viewports) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const [label, route] of routes) {
      test(`${label} has no horizontal overflow`, async ({ page }) => {
        const pageErrors = [];
        page.on('pageerror', error => pageErrors.push(error.message));

        await page.goto(`http://127.0.0.1:4173${route}`, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#main-content > section, #project-root > section', { timeout: 10000 });

        const metrics = await page.evaluate(() => ({
          viewport: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
        }));

        expect(metrics.scrollWidth, `${label}: document overflow`).toBeLessThanOrEqual(metrics.viewport + 1);
        expect(metrics.bodyScrollWidth, `${label}: body overflow`).toBeLessThanOrEqual(metrics.viewport + 1);
        expect(pageErrors, `${label}: runtime page errors`).toEqual([]);

        const toggle = page.locator('#nav-toggle');
        const desktopLinks = page.locator('.vm-nav__links');

        if (viewport.width < 900) {
          await expect(toggle).toBeVisible();
          await expect(desktopLinks).toBeHidden();
        } else {
          await expect(toggle).toBeHidden();
          await expect(desktopLinks).toBeVisible();
        }

        const undersized = await page.evaluate(() => {
          const selectors = [
            'button:not([hidden])',
            'a.vm-btn',
            '.vm-filter',
            '.nav-mobile-link',
            '.vm-nav__link',
          ];
          return [...document.querySelectorAll(selectors.join(','))]
            .filter(el => {
              const style = getComputedStyle(el);
              if (style.display === 'none' || style.visibility === 'hidden') return false;
              const r = el.getBoundingClientRect();
              return r.width > 0 && r.height > 0 && r.height < 43.5;
            })
            .map(el => ({
              tag: el.tagName,
              className: el.className,
              height: Math.round(el.getBoundingClientRect().height * 10) / 10,
              text: (el.textContent || '').trim().slice(0, 80),
            }));
        });

        expect(undersized, `${label}: controls below 44px target\n${JSON.stringify(undersized, null, 2)}`).toEqual([]);
      });
    }
  });
}
