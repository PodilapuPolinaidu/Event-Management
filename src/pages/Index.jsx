import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventCategories from "@/components/EventCategories";
import FeaturedEvents from "@/components/FeaturedEvents";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventCategories />
        <FeaturedEvents />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

