"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { type Locale, localePreferenceKey } from "@/lib/i18n";

const localeMaxAge = 60 * 60 * 24 * 365;

type LanguageSelectorProps = {
  currentLocale: Locale;
  englishLabel: string;
  groupLabel: string;
  turkishLabel: string;
};

export default function LanguageSelector({
  currentLocale,
  englishLabel,
  groupLabel,
  turkishLabel,
}: LanguageSelectorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function selectLocale(locale: Locale) {
    if (locale === currentLocale || isPending) {
      return;
    }

    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    // biome-ignore lint/suspicious/noDocumentCookie: The server needs this functional locale cookie on refresh; Cookie Store API support is not yet universal.
    document.cookie = `${localePreferenceKey}=${locale}; Path=/; Max-Age=${localeMaxAge}; SameSite=Lax${secure}`;
    window.localStorage.setItem(localePreferenceKey, locale);
    document.documentElement.lang = locale;

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <fieldset className="flex min-h-11 items-center rounded-full border border-border-subtle bg-brand-white p-1">
      <legend className="sr-only">{groupLabel}</legend>
      <button
        type="button"
        aria-label={englishLabel}
        aria-pressed={currentLocale === "en"}
        disabled={isPending}
        onClick={() => selectLocale("en")}
        className="min-h-9 min-w-10 rounded-full px-2 text-sm font-semibold text-ink transition-colors aria-pressed:bg-brand-dark aria-pressed:text-brand-white disabled:cursor-wait disabled:opacity-70"
      >
        EN
      </button>
      <button
        type="button"
        aria-label={turkishLabel}
        aria-pressed={currentLocale === "tr"}
        disabled={isPending}
        onClick={() => selectLocale("tr")}
        className="min-h-9 min-w-10 rounded-full px-2 text-sm font-semibold text-ink transition-colors aria-pressed:bg-brand-dark aria-pressed:text-brand-white disabled:cursor-wait disabled:opacity-70"
      >
        TR
      </button>
    </fieldset>
  );
}
