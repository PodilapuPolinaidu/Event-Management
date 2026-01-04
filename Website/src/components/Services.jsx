import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Import images
import weddingEvent from "@/assets/2.webp";
import corporateEvent from "@/assets/1.jpg";
import partyEvent from "@/assets/3.jpg";
import concertEvent from "@/assets/4.jpg";
import heroEvents from "@/assets/5.jpg";

const services = [
  {
    image: weddingEvent,
    title: "Photography & Videography",
    description: "Capturing the magic of your special moments with cinematic excellence.",
  },
  {
    image: partyEvent,
    title: "Catering Services",
    description: "Delight your guests with exquisite flavors and world-class presentation.",
  },
  {
    image: concertEvent,
    title: "Entertainment",
    description: "From live bands to DJs, we ensure your event is vibrant and energetic.",
  },
  {
    image: heroEvents,
    title: "Decoration & Design",
    description: "Transforming venues into breathtaking spaces with our creative decor.",
  },
  {
    image: corporateEvent,
    title: "Event Planning",
    description: "Meticulous planning and execution for a stress-free experience.",
  },
  {
    image: concertEvent,
    title: "Technical Support",
    description: "State-of-the-art sound, lighting, and visual setups for perfection.",
  },
];

const Services = ({ alternate = false }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Section alternate={alternate} className="relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>

      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive event management services to make your event a complete success"
        badge="Our Services"
      />

      <div className="relative px-4 md:px-12">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-[#EA580C] border-[#EA580C] text-white hover:bg-[#c2410c] hover:text-white shadow-lg h-12 w-12"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-[#EA580C] border-[#EA580C] text-white hover:bg-[#c2410c] hover:text-white shadow-lg h-12 w-12"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden py-4" ref={emblaRef}>
          <div className="flex -ml-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
              >
                <Card className="group relative h-[400px] overflow-hidden border-0 shadow-xl rounded-lg cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ease-out"
                  />

                  {/* Default Title Overlay - Slides down on hover */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm py-4 px-6 shadow-md text-center transform transition-all duration-500 ease-out group-hover:translate-y-24 group-hover:opacity-0 rounded-md">
                    <h3 className="font-serif font-bold text-lg text-foreground truncate">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover Content Overlay - Slides up/Fades in on hover */}
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <h3 className="text-2xl font-bold text-white mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
