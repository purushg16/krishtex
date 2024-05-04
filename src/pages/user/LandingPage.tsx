import WelcomeBanner from "../../components/user/Landing/WelcomeBanner";
import AboutGrid from "../../components/user/Landing/AboutGrid";
import SectionsGrid from "../../components/user/Landing/SectionsGrid";
import ReviewGrid from "../../components/user/Landing/ReviewGrid";
import Footer from "../../components/user/Footer";

const LandingPage = () => {
  return (
    <>
      <WelcomeBanner />
      <AboutGrid />
      <SectionsGrid />
      <ReviewGrid />
      <Footer />
    </>
  );
};

export default LandingPage;
