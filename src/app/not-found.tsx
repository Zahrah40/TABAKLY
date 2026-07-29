import ButtonLink from "@/components/ui/ButtonLink";
import { getRequestDictionary } from "@/lib/i18n.server";

export default async function NotFound() {
  const { dictionary } = await getRequestDictionary();
  const content = dictionary.notFound;

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
        <ButtonLink href="/" className="mt-8">
          {content.home}
        </ButtonLink>
      </div>
    </main>
  );
}
