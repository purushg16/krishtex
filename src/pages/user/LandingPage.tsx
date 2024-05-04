import AboutGrid from "../../components/user/Landing/AboutGrid";
import SectionsGrid from "../../components/user/Landing/SectionsGrid";
import ReviewGrid from "../../components/user/Landing/ReviewGrid";
import FoundationGrid from "../../components/user/Landing/FoundationGrid";
import VideoPlayer from "../../components/user/Landing/VideoPlayer";

const LandingPage = () => {
  return (
    <>
      <VideoPlayer />
      <FoundationGrid />
      <AboutGrid />
      <SectionsGrid />
      <ReviewGrid />
    </>
  );
};

export default LandingPage;
