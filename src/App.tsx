import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from "./components/ProjectsSection/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { PrivacyPolicy } from "./components/privacyPolicy/OrcaFacilPrivacyPolicyPage";
import { OrbitaSucataPrivacyPolicy } from "./components/privacyPolicy/OrbitaSucataPrivacyPolicyPage";

function getHash() {
  return window.location.hash.toLowerCase().replace(/\/$/, "");
}

function App() {
  const [hash, setHash] = useState(getHash);

  useEffect(() => {
    const handleHashChange = () => setHash(getHash());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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