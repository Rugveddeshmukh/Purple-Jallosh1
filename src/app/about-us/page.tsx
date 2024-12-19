import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import AboutUsContentmore from "@/components/AboutUs/AboutUsContentmore";
//import WhyUs from "@/components/Common/WhyUs";
//import Speakers from "@/components/Common/Speakers";
//import Cta from "@/components/Common/Cta";
//import FunFact from "@/components/Common/FunFact";
//import Partner from "@/components/Common/Partner";
//import BuyTicket from "@/components/Common/BuyTicket";
//import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="Know More About Event PURPLE JALLOSH"
        shortText="Are you ready to experience an extraordinary celebration of abilities, innovation, and joy? 
"
        homePageUrl="/"
        homePageText="Home"
        activePageText=" Current Page"
        bgImg="/images/contact.jpg"
      />

      <AboutUsContent />
      <AboutUsContentmore/>


     {/* <WhyUs /> */}

     {/* <Speakers /> */}

      {/* <Cta /> */}

      {/* <FunFact />*/}

      {/* <Partner />*/}

     {/*  <BuyTicket />*/}

      {/* <Subscribe /> */}
 
      <Footer />
    </>
  );
}
