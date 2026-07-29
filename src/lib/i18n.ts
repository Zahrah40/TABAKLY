import en from "@/locales/en.json";
import tr from "@/locales/tr.json";

export const locales = ["en", "tr"] as const;
export const localePreferenceKey = "tabakly_locale";

export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, tr };

function describeShape(value: unknown, path = "root"): string[] {
  if (Array.isArray(value)) {
    return [
      `${path}:array:${value.length}`,
      ...value.flatMap((entry, index) =>
        describeShape(entry, `${path}[${index}]`),
      ),
    ];
  }

  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, entry]) =>
      describeShape(entry, `${path}.${key}`),
    );
  }

  return [`${path}:${typeof value}`];
}

function validateDictionaryShape(
  reference: Dictionary,
  candidate: Dictionary,
  locale: Locale,
) {
  const referenceShape = describeShape(reference);
  const candidateShape = describeShape(candidate);
  const referenceKeys = new Set(referenceShape);
  const candidateKeys = new Set(candidateShape);
  const missing = referenceShape.filter((key) => !candidateKeys.has(key));
  const extra = candidateShape.filter((key) => !referenceKeys.has(key));

  if (missing.length > 0 || extra.length > 0) {
    throw new Error(
      `Locale dictionary "${locale}" does not match English. Missing: ${missing.join(", ") || "none"}. Extra: ${extra.join(", ") || "none"}.`,
    );
  }
}

validateDictionaryShape(en, tr, "tr");

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
