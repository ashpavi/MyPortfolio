import { lazy } from "react";
import { NavBar } from "./components/NavBar";
import DeferredSection from "./components/DeferredSection";
import Hero from "./sections/Hero";

const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const AboutMe = lazy(() => import("./sections/AboutMe"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <DeferredSection id="work" minHeight="90vh">
        <ShowcaseSection />
      </DeferredSection>
      <DeferredSection minHeight="40vh">
        <FeatureCards />
      </DeferredSection>
      <DeferredSection id="aboutme" minHeight="80vh">
        <AboutMe />
      </DeferredSection>
      <DeferredSection id="experience" minHeight="90vh">
        <ExperienceSection />
      </DeferredSection>
      <DeferredSection id="skills" minHeight="80vh">
        <TechStack />
      </DeferredSection>
      <DeferredSection id="contact" minHeight="80vh">
        <Contact />
      </DeferredSection>
      <DeferredSection minHeight="20vh">
        <Footer />
      </DeferredSection>
    </>
  );
};

export default App;
