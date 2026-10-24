import { OrbitaSucataDeleteAccount } from "./components/privacyPolicy/OrbitaSucataDeleteAccountPage";
import { useEffect, useState } from "react";
import CaelusHome from "./components/CaelusHome";
import { PrivacyPolicy } from "./components/privacyPolicy/OrcaFacilPrivacyPolicyPage";
import { OrbitaSucataPrivacyPolicy } from "./components/privacyPolicy/OrbitaSucataPrivacyPolicyPage";
import { VigiliaDoVazioPrivacyPolicy } from "./components/privacyPolicy/VigiliaDoVazioPrivacyPolicyPage";

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

  if (hash === "#/delete-account/orbitadesucata") return <OrbitaSucataDeleteAccount />;

  if (isPrivacyPage) {
    return <PrivacyPolicy />;
  }

  if (hash === "#/privacy/vigiliadovazio") {
    return <VigiliaDoVazioPrivacyPolicy />;
  }

  if (isOrbitaSucataPrivacyPage) {
    return <OrbitaSucataPrivacyPolicy />;
  }

  return <CaelusHome />;
}

export default App;
