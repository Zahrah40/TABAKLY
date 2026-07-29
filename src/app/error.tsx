"use client";

import { useLocale } from "@/components/LocaleProvider";
import ButtonLink from "@/components/ui/ButtonLink";
import { getDictionary } from "@/lib/i18n";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  const locale = useLocale();
  const content = getDictionary(locale).error;

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-white px-6 py-16 text-ink">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary-strong">
          {content.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold text-brand-text">
          {content.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-muted">
          {content.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="button-base button-primary"
          >
            {content.retry}
          </button>
          <ButtonLink href="/" variant="secondary">
            {content.home}
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
