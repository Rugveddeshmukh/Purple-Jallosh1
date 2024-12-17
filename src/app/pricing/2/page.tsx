import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import PricingTableTwo from "@/components/Pricing/PricingTableTwo";
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
        activePageText="StallBooking"
        bgImg="/images/main-bg4.jpg"
      />

      <PricingTableTwo />
 
      <Footer />
    </>
  );
}
