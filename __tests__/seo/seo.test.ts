import sitemap from '@/app/sitemap';
import robots from '@/app/robots';

describe('Production SEO Configuration', () => {
  it('generates complete sitemap for all primary portfolio routes', () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    expect(urls).toEqual([
      'https://www.salahkhadir.codes',
      'https://www.salahkhadir.codes/about',
      'https://www.salahkhadir.codes/experience',
      'https://www.salahkhadir.codes/capabilities',
      'https://www.salahkhadir.codes/architectures',
      'https://www.salahkhadir.codes/contact',
    ]);

    expect(entries[0].priority).toBe(1.0);
    entries.slice(1).forEach((entry) => {
      expect(entry.priority).toBe(0.8);
      expect(entry.changeFrequency).toBe('monthly');
      expect(entry.lastModified).toBeInstanceOf(Date);
    });
  });

  it('generates robots.txt disallowing private api routes and referencing production sitemap', () => {
    const config = robots();
    const rules = Array.isArray(config.rules) ? config.rules[0] : config.rules;

    expect(rules.userAgent).toBe('*');
    expect(rules.allow).toBe('/');
    expect(rules.disallow).toBe('/api/');
    expect(config.sitemap).toBe('https://www.salahkhadir.codes/sitemap.xml');
  });
});
