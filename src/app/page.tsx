import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Benefits from "@/components/sections/Benefits";
import Hero from "@/components/sections/Hero";
import PrivacyNotice from "@/components/sections/PrivacyNotice";
import Problem from "@/components/sections/Problem";
import SurveySection from "@/components/sections/SurveySection";
import TabaklyModel from "@/components/sections/TabaklyModel";
import { getRequestDictionary } from "@/lib/i18n.server";

export default async function Home() {
  const { dictionary, locale } = await getRequestDictionary();

  return (
    <>
      <Header content={dictionary.header} locale={locale} />
      <main id="main-content" className="bg-brand-white">
        <Hero content={dictionary.hero} />
        <Problem content={dictionary.problem} />
        <TabaklyModel content={dictionary.model} />
        <Benefits content={dictionary.benefits} />
        <SurveySection content={dictionary.survey} />
        <PrivacyNotice content={dictionary.privacy} />
      </main>
      <Footer content={dictionary.footer} />
    </>
  );
}
