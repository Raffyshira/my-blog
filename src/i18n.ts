import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./locales.ts";
import { getRelativeLocaleUrl } from "astro:i18n";

export const LOCALES = LOCALES_SETTING as Record<string, LocaleConfig>;
type LocaleConfig = {
    readonly label: string;
    readonly lang?: string;
    readonly dir?: "ltr" | "rtl";
};

export type Lang = keyof typeof LOCALES;

export const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING as Lang;

export type Multilingual = { [key in Lang]?: string };

export function useTranslations(lang: Lang) {
    return function t(multilingual: Multilingual | string): string {
        if (typeof multilingual === "string") {
            return multilingual;
        } else {
            return multilingual[lang] || multilingual[DEFAULT_LOCALE] || "";
        }
    };
}



export function getLocalePaths(url: URL): LocalePath[] {
  return Object.keys(LOCALES).map((lang) => {
    return {
      lang: lang as Lang,
      path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, ''))
    };
  });
}
type LocalePath = {
  lang: Lang;
  path: string;
};

export const localeParams = Object.keys(LOCALES).map(lang => ({
    params: { lang }
}));
