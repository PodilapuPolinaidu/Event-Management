import { Card } from "@/components/ui/card";
import { Camera, Utensils, Music2, Sparkles, Award, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional photo and video coverage to capture every precious moment of your event",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Exquisite cuisine and customized menus from world-class chefs for your guests",
  },
  {
    icon: Music2,
    title: "Entertainment",
    description: "Live bands, DJs, and performers to keep your guests entertained throughout",
  },
  {
    icon: Sparkles,
    title: "Decoration & Design",
    description: "Stunning event decorations and themes tailored to your vision and preferences",
  },
  {
    icon: Award,
    title: "Event Planning",
    description: "Expert planners to handle every detail and ensure your event runs smoothly",
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description: "State-of-the-art audio-visual equipment and technical support team",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-12">
        <div className="text-center mb-10">
          <h2 
            className="font-bold mb-2 text-foreground"
            style={{
              fontSize: '36px',
              lineHeight: '48px',
            }}
          >
            Our Services
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground font-normal max-w-2xl mx-auto">
            Comprehensive event management services to make your event a complete success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 group border-border hover:border-primary text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary transition-colors mb-4">
                  <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-base md:text-lg mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground font-normal">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
