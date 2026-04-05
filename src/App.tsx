import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { PrivacyPolicy } from "./components/privacyPolicy/OrcaFacilPrivacyPolicyPage";

function App() {
  const path = window.location.pathname;

  if (path === "/orcafacil/privacy") {
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