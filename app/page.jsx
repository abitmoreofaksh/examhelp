import About from "@/components/about/About";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Help from "@/components/help/Help";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Pricing from "@/components/pricing/Pricing";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Help />
      <Footer />
    </main>
  );
}
