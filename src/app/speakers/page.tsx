import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SpeakersOne from "@/components/Speakers/SpeakersOne";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Speakers"
        shortText="Our Team Participant!"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Speakers"
        bgImg="/images/main-bg1.jpg"
      />

      <SpeakersOne />

      <Footer />
    </>
  );
}
