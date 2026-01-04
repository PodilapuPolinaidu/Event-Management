import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import EventCategories from "@/components/EventCategories";
import FeaturedEvents from "@/components/FeaturedEvents";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

import AboutUs from "@/components/AboutUs";
import BusinessPlatform from "@/components/BusinessPlatform";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <AboutUs alternate={true} />
        <EventCategories alternate={false} />
        {/* <FeaturedEvents /> */}
        <Services alternate={true} />
        <BusinessPlatform alternate={false} />
        <Testimonials alternate={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

