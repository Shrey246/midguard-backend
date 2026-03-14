import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import Philosophy from "./components/Philosophy";
import Services from "./components/services";
import Audience from "./components/Audience";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <Philosophy />
      <Audience />
      <Testimonials />
      <CTA />
      <Services />
 
    </>
  );
}