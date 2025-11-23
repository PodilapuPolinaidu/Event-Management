import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive event management solutions to bring your vision to life
            </p>
          </div>
        </section>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
