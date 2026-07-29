import { CheckCircle2, Store, UsersRound } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n";

type BenefitsProps = {
  content: Dictionary["benefits"];
};

export default function Benefits({ content }: BenefitsProps) {
  const audiences = [
    { ...content.businesses, icon: Store, tone: "primary" },
    { ...content.consumers, icon: UsersRound, tone: "accent" },
  ];

  return (
    <section
      id="benefits"
      className="scroll-mt-28 bg-brand-white py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {audiences.map(({ icon: Icon, tone, ...audience }) => (
            <Card key={audience.label} padding="spacious" className="h-full">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tone === "primary" ? "bg-brand-muted/40" : "bg-brand-accent/15"}`}
                >
                  <Icon
                    aria-hidden="true"
                    className={`h-7 w-7 ${tone === "primary" ? "text-brand-primary-strong" : "text-brand-accent-strong"}`}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent-strong">
                    {audience.label}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-brand-text">
                    {audience.title}
                  </h3>
                </div>
              </div>
              <ul className="mt-8 space-y-5">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary-strong"
                    />
                    <span className="leading-7 text-ink-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
