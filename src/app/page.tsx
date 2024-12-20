import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeDefault/MainBanner";
import AboutUsContent from "@/components/HomeDefault/AboutUsContent";
import WhyUs from "@/components/Common/WhyUs";
import WhyUs1 from "@/components/Common/WhyUs1";
import Speakers from "@/components/HomeDefault/Speakers";
import EventSchedules from "@/components/HomeDefault/EventSchedules";
import FunFact from "@/components/Common/FunFact";
//import Pricing from "@/components/HomeDefault/Pricing";
//import Partner from "@/components/Common/Partner";
import LatestNews from "@/components/HomeDefault/LatestNews";
//import BuyTicket from "@/components/Common/BuyTicket";
//import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";
import StallBooking from "@/components/HomeDefault/StallBooking/StallBook";
import ImageBanner from "@/components/HomeDefault/MainBanner/ImageBanner";





export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <ImageBanner/>

      <StallBooking/>

      <AboutUsContent />

      <WhyUs />

      <WhyUs1/>

      <Speakers />

      <EventSchedules />

      <FunFact />

     {/*<Pricing /> */}

      {/* <Partner /> */}

      <LatestNews />

      {/*<BuyTicket />*/}

      {/*<Subscribe />*/}

      <Footer />
    </>
  );
}
