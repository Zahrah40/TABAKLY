function parseSurveyUrl(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value);
    const isDevelopmentHttp =
      process.env.NODE_ENV !== "production" && url.protocol === "http:";

    return url.protocol === "https:" || isDevelopmentHttp
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

export function getSurveyUrls() {
  return {
    businesses: parseSurveyUrl(process.env.NEXT_PUBLIC_MERCHANT_SURVEY_URL),
    consumers: parseSurveyUrl(process.env.NEXT_PUBLIC_CONSUMER_SURVEY_URL),
  };
}
