import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { PrivacyPolicy } from "./components/privacyPolicy/OrcaFacilPrivacyPolicyPage";
import { OrbitaSucataPrivacyPolicy } from "./components/privacyPolicy/OrbitaSucataPrivacyPolicyPage";

function App() {
  const hash = window.location.hash.toLowerCase();

  const isPrivacyPage = hash === "#/privacy/orcafacil";
  const isOrbitaSucataPrivacyPage = hash === "#/privacy/orbitadesucata";

  if (isPrivacyPage) {
    return <PrivacyPolicy />;
  }

  if (isOrbitaSucataPrivacyPage) {
    return <OrbitaSucataPrivacyPolicy />;
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