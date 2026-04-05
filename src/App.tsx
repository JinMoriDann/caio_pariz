import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { PrivacyPolicy } from "./components/privacyPolicy/OrcaFacilPrivacyPolicyPage";

function App() {
  const hash = window.location.hash.toLowerCase();

  const isPrivacyPage = hash === "#/privacy/orcafacil";

  if (isPrivacyPage) {
    return <PrivacyPolicy />;
  }

  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;