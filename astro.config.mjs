import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://rafiahsiraprayoga.netlify.app/",
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
    markdown: {
        shikiConfig: {
            theme: "night-owl"
        },
        remarkPlugins: [remarkToc],
        remarkRehype: {
            footnoteLabel: "Footnotes"
        },
        gfm: true
    },
    image: {
        service: squooshImageService()
    }
});
