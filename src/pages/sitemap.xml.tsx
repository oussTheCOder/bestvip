import type { GetServerSideProps } from 'next';

const SiteMap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://streambe.net';
  const stableLastMod = '2026-04-09';

  const pages = [
    {
      path: '',
      alternates: {
        nl: `${siteUrl}`,
        en: `${siteUrl}/en`,
        fr: `${siteUrl}/fr`,
      },
      priority: '1.0',
    },
    {
      path: '/about',
      alternates: {
        nl: `${siteUrl}/about`,
        en: `${siteUrl}/en/about`,
        fr: `${siteUrl}/fr/about`,
      },
      priority: '0.8',
    },
    {
      path: '/iptv-belgie',
      alternates: {
        nl: `${siteUrl}/iptv-belgie`,
        en: `${siteUrl}/en/iptv-belgie`,
        fr: `${siteUrl}/fr/iptv-belgie`,
      },
      priority: '0.8',
    },
    {
      path: '/iptv-abonnement-belgie',
      alternates: {
        nl: `${siteUrl}/iptv-abonnement-belgie`,
        en: `${siteUrl}/en/iptv-abonnement-belgie`,
        fr: `${siteUrl}/fr/iptv-abonnement-belgie`,
      },
      priority: '0.7',
    },
    {
      path: '/iptv-kopen-belgie',
      alternates: {
        nl: `${siteUrl}/iptv-kopen-belgie`,
        en: `${siteUrl}/en/iptv-kopen-belgie`,
        fr: `${siteUrl}/fr/iptv-kopen-belgie`,
      },
      priority: '0.7',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.alternates.nl}</loc>
    <xhtml:link rel="alternate" hreflang="nl" href="${page.alternates.nl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${page.alternates.en}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${page.alternates.fr}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${page.alternates.nl}" />
    <lastmod>${stableLastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
