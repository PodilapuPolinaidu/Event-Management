import { Card } from "@/components/ui/card";
import corporateEvent from "@/assets/corporate-event.jpg";
import weddingEvent from "@/assets/wedding-event.jpg";
import concertEvent from "@/assets/concert-event.jpg";
import partyEvent from "@/assets/party-event.jpg";
import heroEvents from "@/assets/hero-events.jpg";

const categories = [
  {
    name: "Corporate Events",
    description: "Professional meetings, conferences & seminars",
    image: corporateEvent,
    hasOverlay: false,
  },
  {
    name: "Weddings",
    description: "Make your special day truly memorable",
    image: weddingEvent,
    hasOverlay: false,
  },
  {
    name: "Outdoor Ceremonies",
    description: "Beautiful outdoor celebrations",
    image: heroEvents,
    hasOverlay: false,
  },
  {
    name: "Beach Events",
    description: "Serene beach celebrations",
    image: heroEvents,
    hasOverlay: false,
  },
  {
    name: "Concerts",
    description: "Music events & entertainment shows",
    image: concertEvent,
    hasOverlay: false,
  },
  {
    name: "Private Parties",
    description: "Melodia Event Management in Kerala holds Private Parties and crafts unforgettable moments that leave lasting memories.",
    image: partyEvent,
    hasOverlay: true,
  },
];

const EventCategories = () => {
  return (
    <section className="py-20 bg-background scroll-smooth">
      <div className="container mx-auto px-12">
        <div className="text-center mb-10">
          <h2 
            className="font-bold mb-2 text-foreground"
            style={{
              fontSize: '36px',
              lineHeight: '48px',
            }}
          >
            Event Categories
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground font-normal max-w-2xl mx-auto">
            Browse through our diverse range of event types and find the perfect match for your occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden h-[400px] cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Dark Overlay - Slides up from bottom on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-black/70 transition-all duration-500 ease-in-out" />

              {/* Text Overlay - Centered, Appears on Hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-center">
                <h3 
                  className="font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                  style={{
                    fontSize: '36px',
                    lineHeight: '48px',
                  }}
                >
                  {category.name}
                </h3>
                <p className="text-base md:text-lg text-white/90 font-normal transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100">
                  {category.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
