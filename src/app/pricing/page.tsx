import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import StallA from "@/components/Pricing/StallA";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

     <PageBanner 
        pageTitle="StallBooking"
        shortText="Get Your Stall"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Stallbooking"
        bgImg="/images/contact.jpg"
      /> 

      <StallA /> 
 
      <Footer />
    </>
  );
}
