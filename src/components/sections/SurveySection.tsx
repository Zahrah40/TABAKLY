import { Store, UsersRound } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n";
import { getSurveyUrls } from "@/lib/surveys";

type SurveySectionProps = {
  content: Dictionary["survey"];
};

export default function SurveySection({ content }: SurveySectionProps) {
  const surveyUrls = getSurveyUrls();
  const surveys = [
    {
      ...content.businesses,
      icon: Store,
      id: "business-survey",
      url: surveyUrls.businesses,
    },
    {
      ...content.consumers,
      icon: UsersRound,
      id: "consumer-survey",
      url: surveyUrls.consumers,
    },
  ];

  return (
    <section
      id="surveys"
      className="scroll-mt-28 bg-brand-surface py-20 lg:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {surveys.map(({ icon: Icon, url, ...survey }) => (
            <Card
              key={survey.id}
              id={survey.id}
              padding="spacious"
              className="scroll-mt-32"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-muted/40">
                <Icon
                  aria-hidden="true"
                  className="h-7 w-7 text-brand-primary-strong"
                />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-brand-accent-strong">
                {survey.label}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-brand-text">
                {survey.title}
              </h3>
              <p className="mt-4 leading-7 text-ink-muted">
                {survey.description}
              </p>
              {url ? (
                <ButtonLink
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  shape="soft"
                  className="mt-7"
                >
                  {survey.cta}
                  <span className="sr-only"> ({content.newTabNotice})</span>
                </ButtonLink>
              ) : (
                <span
                  aria-disabled="true"
                  className="button-base button-secondary mt-7 w-full cursor-default opacity-70"
                >
                  {survey.cta}
                </span>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
