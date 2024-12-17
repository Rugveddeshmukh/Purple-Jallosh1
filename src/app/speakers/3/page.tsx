import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import SpeakersThree from "@/components/Speakers/SpeakersThree";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Speakers"
        shortText="Our Team Members!"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Speakers"
        bgImg="/images/main-bg5.jpg"
      />

      <SpeakersThree />

      <Footer />
    </>
  );
}
