"use client";

import { createContext, type ReactNode, useContext } from "react";
import type { Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>("en");

type LocaleProviderProps = {
  children: ReactNode;
  locale: Locale;
};

export default function LocaleProvider({
  children,
  locale,
}: LocaleProviderProps) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
