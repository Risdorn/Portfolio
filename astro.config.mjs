import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';
import remarkExternalLinks from 'remark-external-links';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.website,
    adapter: netlify(),
    markdown: {
    remarkPlugins: [
            [remarkExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
        ],
    },
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});
