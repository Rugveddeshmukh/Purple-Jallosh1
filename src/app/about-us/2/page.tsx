import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import AboutUsContent from "@/components/AboutUsTwo/AboutUsContent";
import Cta from "@/components/Common/Cta";
import Partner from "@/components/Common/Partner";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";
import WhyUs from "@/components/AboutUsTwo/WhyUs";


export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="About Us 2"
        shortText="Are you ready to attend?"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us 2"
        bgImg="/images/main-bg2.jpg"
      />

      <AboutUsContent />

      <WhyUs />

      <Cta />

   
 
      <Partner />

      <BuyTicket />

      <Subscribe />
 
      <Footer />
    </>
  );
}
