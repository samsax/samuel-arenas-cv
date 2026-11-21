import { describe, expect, it } from 'vitest';
import LocaleLayout, { generateMetadata, generateStaticParams } from './layout';

const NOT_FOUND = { digest: 'NEXT_HTTP_ERROR_FALLBACK;404' };

describe('locale layout', () => {
  it('only pre-renders English and Spanish', () => {
    expect(generateStaticParams()).toEqual([{ locale: 'en' }, { locale: 'es' }]);
  });

  it.each(['foo', 'xx', 'sitemap.xml', 'EN'])('returns 404 for the unknown locale "%s"', async (locale) => {
    await expect(
      LocaleLayout({ children: null, params: Promise.resolve({ locale }) }),
    ).rejects.toMatchObject(NOT_FOUND);
  });

  it('adds no page metadata for an unknown locale, so the 404 stays noindex only', async () => {
    expect(await generateMetadata({ params: Promise.resolve({ locale: 'foo' }) })).toEqual({});
  });

  it.each([
    ['en', 'Samuel David Arenas Pareja | Senior Software Engineer'],
    ['es', 'Samuel David Arenas Pareja | Ingeniero de Software Senior'],
  ])('builds the page metadata for "%s"', async (locale, title) => {
    const meta = await generateMetadata({ params: Promise.resolve({ locale }) });
    expect(meta.title).toBe(title);
    expect(meta.robots).toEqual({ index: true, follow: true });
  });
});
