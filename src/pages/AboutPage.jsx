import Layout from "../components/layout/Layout";
import AboutHero from "../components/about/AboutHero";
import About from "../components/home/About";
import AboutStrategy from "../components/about/AboutStrategy";
import VisionMission from "../components/about/VisionMission";
import WhyVispera from "../components/about/WhyVispera";
import MeetTeam from "../components/about/MeetTeam";

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <About showButton={false} />
      <AboutStrategy />
      <VisionMission />
      <WhyVispera />
      <MeetTeam />
    </Layout>
  );
}
