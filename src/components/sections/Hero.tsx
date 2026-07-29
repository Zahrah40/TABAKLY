import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import type { Dictionary } from "@/lib/i18n";

type HeroProps = {
  content: Dictionary["hero"];
};

export default function Hero({ content }: HeroProps) {
  return (
    <section id="about" className="scroll-mt-28 bg-brand-white">
      <Container className="grid items-center gap-12 pt-36 pb-20 sm:pt-40 lg:grid-cols-2 lg:gap-16 lg:pt-44 lg:pb-24">
        <div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-ink">{content.titleLineOne}</span>
            <span className="mt-2 block text-brand-text">
              {content.titleLineTwo}
            </span>
            <span className="mt-2 block text-brand-accent-strong">
              {content.titleLineThree}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
            {content.description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#consumer-survey">
              {content.consumerCta}
            </ButtonLink>
            <ButtonLink href="#business-survey" variant="secondary">
              {content.businessCta}
            </ButtonLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-brand-surface shadow-2xl">
          <Image
            src="/hero-images/hero-image-3.jpg"
            alt={content.imageAlt}
            width={1290}
            height={860}
            sizes="(min-width: 1024px) 50vw, 100vw"
            preload
            className="aspect-[3/2] h-auto w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
