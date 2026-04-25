import Layout from "../components/layout/Layout";
import SectionIndicator from "../components/home/SectionIndicator";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import FeaturedImpact from "../components/home/FeaturedImpact";
import Services from "../components/home/Services";
import Clients from "../components/home/Clients";
import Manifesto from "../components/home/Manifesto";
import Awards from "../components/home/Awards";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <Layout>
      <SectionIndicator />
      <Hero />
      <About />
      <Projects />
      <FeaturedImpact />
      <Services />
      <Clients />
      <Manifesto />
      <Awards />
      <Testimonials />
      <CTA />
      <Contact />
    </Layout>
  );
}
