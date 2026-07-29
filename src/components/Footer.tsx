import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import type { Dictionary } from "@/lib/i18n";

type FooterProps = {
  content: Dictionary["footer"];
};

export default function Footer({ content }: FooterProps) {
  const navLinks = [
    { label: content.nav.about, href: "#about" },
    { label: content.nav.model, href: "#model" },
    { label: content.nav.benefits, href: "#benefits" },
    { label: content.nav.survey, href: "#surveys" },
    { label: content.nav.privacy, href: "#privacy" },
  ];
  const copyright = content.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <footer id="contact" className="scroll-mt-28 bg-brand-white text-ink">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="sr-only">Tabakly</h2>
            <Image
              src="/brand/tabakly-logo-horizontal.svg"
              alt=""
              width={1760}
              height={512}
              className="h-auto w-48"
            />
            <p className="mt-5 max-w-lg leading-8 text-ink-muted">
              {content.description}
            </p>
            <p className="mt-4 font-semibold text-brand-text">
              {content.stage}
            </p>
          </div>

          <nav aria-label={content.navigationTitle}>
            <h3 className="text-lg font-semibold text-brand-text">
              {content.navigationTitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-lg font-semibold text-brand-text">
              {content.contactTitle}
            </h3>
            <p className="mt-5 leading-7 text-ink-muted">
              {content.contactDescription}
            </p>
            <a
              href={`mailto:${content.contactEmail}`}
              aria-label={content.contactEmailLabel}
              className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-lg font-semibold text-brand-dark underline decoration-brand-accent-strong decoration-2 underline-offset-4"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
              {content.contactEmail}
            </a>
          </div>
        </div>

        <p className="mt-14 border-t border-border-subtle pt-8 text-center text-sm text-ink-muted">
          {copyright}
        </p>
      </Container>
    </footer>
  );
}
