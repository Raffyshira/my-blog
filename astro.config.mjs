import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://rafiahsiraprayoga.vercel.app/",
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false
        }),
        sitemap(),
        mdx()
    ],
    devToolbar: {
        enabled: true
    },
    image: {
        service: squooshImageService()
    },
    i18n: {
        defaultLocale: "en",
        locales: ["en", "id"],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false
        }
    },
    markdown: {
        shikiConfig: {
            theme: "night-owl"
        },
        remarkPlugins: [remarkToc],
        remarkRehype: {
            footnoteLabel: "Footnotes"
        },
        gfm: true
    }
});
