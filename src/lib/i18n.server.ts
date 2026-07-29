import { cookies, headers } from "next/headers";
import {
  getDictionary,
  isLocale,
  type Locale,
  localePreferenceKey,
} from "@/lib/i18n";

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localePreferenceKey)?.value;

  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore
    .get("accept-language")
    ?.trim()
    .toLowerCase();

  return acceptLanguage?.startsWith("tr") ? "tr" : "en";
}

export async function getRequestDictionary() {
  const locale = await getRequestLocale();

  return { dictionary: getDictionary(locale), locale };
}
