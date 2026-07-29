"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "@/components/LanguageSelector";
import ButtonLink from "@/components/ui/ButtonLink";
import type { Dictionary, Locale } from "@/lib/i18n";

type HeaderProps = {
  content: Dictionary["header"];
  locale: Locale;
};

export default function Header({ content, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navLinks = [
    { name: content.nav.about, href: "#about" },
    { name: content.nav.model, href: "#model" },
    { name: content.nav.benefits, href: "#benefits" },
    { name: content.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-4 right-0 left-0 z-50 flex justify-center px-3 sm:top-5 sm:px-4">
      <nav
        aria-label={content.navigationLabel}
        className="relative flex w-full max-w-7xl items-center justify-between rounded-full border border-brand-white/50 bg-brand-white/90 px-3 py-3 shadow-lg backdrop-blur-xl sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          aria-label={content.homeLabel}
          className="flex min-h-11 shrink-0 items-center"
          onClick={closeMenu}
        >
          <Image
            src="/brand/tabakly-mark.svg"
            alt=""
            width={512}
            height={512}
            className="h-9 w-9 sm:hidden"
          />
          <Image
            src="/brand/tabakly-logo-horizontal.svg"
            alt=""
            width={1760}
            height={512}
            className="hidden h-10 w-auto sm:block"
          />
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSelector
            currentLocale={locale}
            englishLabel={content.languageEnglishLabel}
            groupLabel={content.languageGroupLabel}
            turkishLabel={content.languageTurkishLabel}
          />
          <ButtonLink
            href="#surveys"
            size="compact"
            className="hidden shrink-0 whitespace-nowrap xl:inline-flex"
          >
            {content.surveyCta}
          </ButtonLink>
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? content.menuCloseLabel : content.menuOpenLabel
            }
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-brand-white text-brand-dark xl:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          hidden={!isMenuOpen}
          className="absolute top-[calc(100%+0.75rem)] right-0 left-0 rounded-3xl border border-border-subtle bg-brand-white p-4 shadow-xl xl:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-xl px-4 font-medium text-ink hover:bg-brand-muted/25 hover:text-brand-dark"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#surveys"
            fullWidth
            shape="soft"
            className="mt-3"
            onClick={closeMenu}
          >
            {content.surveyCta}
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
