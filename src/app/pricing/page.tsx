import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import PricingTable from "@/components/Pricing/PricingTable";
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
        bgImg="/images/main-bg4.jpg"
      /> 

      <PricingTable /> 
 
      <Footer />
    </>
  );
}
