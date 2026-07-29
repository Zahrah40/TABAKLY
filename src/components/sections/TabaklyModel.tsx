import { Search, ShoppingBag, Store } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n";

const icons = [Store, Search, ShoppingBag];

type TabaklyModelProps = {
  content: Dictionary["model"];
};

export default function TabaklyModel({ content }: TabaklyModelProps) {
  return (
    <section
      id="model"
      className="scroll-mt-28 bg-brand-surface py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          eyebrowTone="primary"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <Card key={step.title} padding="spacious" className="h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-muted/40">
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7 text-brand-primary-strong"
                  />
                </div>
                <h3 className="mt-7 text-2xl font-bold text-brand-accent-strong">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-ink-muted">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-ink-muted">
          {content.stageNote}
        </p>
      </Container>
    </section>
  );
}
