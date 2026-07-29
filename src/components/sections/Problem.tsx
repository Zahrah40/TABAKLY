import { Clock3, Link2, WalletCards } from "lucide-react";
import Container from "@/components/ui/Container";
import type { Dictionary } from "@/lib/i18n";

const icons = [Clock3, WalletCards, Link2];

type ProblemProps = {
  content: Dictionary["problem"];
};

export default function Problem({ content }: ProblemProps) {
  return (
    <section
      id="problem"
      className="scroll-mt-28 bg-brand-dark py-20 text-brand-white lg:py-24"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-white/85">
            {content.description}
          </p>
        </div>

        <div className="grid gap-4">
          {content.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item.title}
                className="flex gap-5 rounded-2xl border border-brand-white/15 bg-brand-white/10 p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-white/15">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-brand-white/80">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
