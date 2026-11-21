import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const locale of ['en', 'es'] as const) {
  test.describe(`${locale} page`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/${locale}`);
    });

    test('has no serious or critical WCAG 2.1 AA violations', async ({ page }) => {
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      const blocking = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(
        blocking.map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`),
      ).toEqual([]);
    });

    test('has exactly one level-one heading and named landmarks', async ({ page }) => {
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      await expect(page.getByRole('navigation')).toHaveCount(1);
      await expect(page.getByRole('main')).toHaveCount(1);
      await expect(page.getByRole('contentinfo')).toHaveCount(1);
    });

    test('the language switch is reachable with the keyboard alone', async ({ page }) => {
      const toggle = page.getByRole('link', { name: locale === 'en' ? 'Cambiar a Español' : 'Switch to English' });
      let reached = false;
      for (let press = 0; press < 10 && !reached; press += 1) {
        await page.keyboard.press('Tab');
        reached = await toggle.evaluate((el) => el === document.activeElement);
      }
      expect(reached, 'language switch should be in the first 10 tab stops').toBe(true);
    });

    test('the PDF download link can receive keyboard focus and keeps its download attribute', async ({ page }) => {
      const download = page.getByRole('link', { name: locale === 'en' ? 'Download PDF File' : 'Descargar Archivo PDF' });
      await download.focus();
      await expect(download).toBeFocused();
      await expect(download).toHaveAttribute('download', '');
    });
  });
}
