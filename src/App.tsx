import Header from "components/Header/Header";
import HeroSection from "components/HeroSection/HeroSection";
import AboutMeSection from "components/AboutMeSection/AboutMeSection";
import WorkSection from "components/WorkSection/WorkSection";
import ContactSection from "components/ContactSection/ContactSection";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMeSection />
      <WorkSection />
      <ContactSection />
      <ToastContainer />
    </div>
  );
}

export default App;
