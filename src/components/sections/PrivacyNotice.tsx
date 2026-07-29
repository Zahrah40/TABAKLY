import { ShieldCheck } from "lucide-react";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import type { Dictionary } from "@/lib/i18n";

type PrivacyNoticeProps = {
  content: Dictionary["privacy"];
};

export default function PrivacyNotice({ content }: PrivacyNoticeProps) {
  return (
    <section
      id="privacy"
      className="scroll-mt-28 bg-brand-surface py-20 lg:py-24"
    >
      <Container>
        <Card tone="inverse" className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-white/15">
              <ShieldCheck aria-hidden="true" className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
                {content.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold">{content.title}</h2>
              <p className="mt-5 leading-8 text-brand-white/90">
                {content.description}
              </p>
              <p className="mt-6 rounded-2xl bg-brand-white/10 px-5 py-4 leading-7 text-brand-white/90">
                <strong className="text-brand-white">
                  {content.statusLabel}:
                </strong>{" "}
                {content.status}
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
