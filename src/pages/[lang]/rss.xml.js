import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../../consts.ts";
import { localeParams } from "../../i18n.ts";

export const getStaticPath = () => localeParams;

export async function GET(context) {
    const locale = context.params.lang;
    const localeTitle =
        typeof SITE_TITLE == "string" ? SITE_TITLE : SITE_TITLE[locale];
    const localeDesription =
        typeof SITE_DESSCRIPTION == "string"
            ? SITE_DESSCRIPTION
            : SITE_DESSCRIPTION[locale];

    const posts = await getCollection("blog", ({ slug }) => {
        return slug.split("/")[0] == locale;
    });

    posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    return rss({
        title: localeTitle,
        description: localeDesription,
        site: context.site,
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/${locale}/blog/${post.slug}/`
        }))
    });
}
