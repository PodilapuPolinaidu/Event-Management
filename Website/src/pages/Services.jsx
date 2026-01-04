import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import PageHeader from "@/components/PageHeader";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          title="Our Services"
          description="Comprehensive event management solutions to bring your vision to life"
        />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

