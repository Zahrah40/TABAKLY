import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TabaklyModel from "../components/TabaklyModel";
import Impact from "../components/Impact";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <TabaklyModel />
      <Impact />
      <Benefits />
      <Footer />
    </main>
  );
}
