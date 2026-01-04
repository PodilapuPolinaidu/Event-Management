import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import corporateEvent from "@/assets/corporate-event.jpg";
import weddingEvent from "@/assets/wedding-event.jpg";
import concertEvent from "@/assets/concert-event.jpg";
import partyEvent from "@/assets/party-event.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const categories = [
  {
    name: "Corporate Events",
    slug: "corporate-events",
    description: "Professional meetings, conferences & seminars. Elevate your business gatherings.",
    image: corporateEvent,
    eventCount: "50+ Events",
    location: "Multiple Venues",
    price: "From $2,500",
    date: "Year Round",
    featured: false,
  },
  {
    name: "Weddings",
    slug: "weddings",
    description: "Make your special day truly memorable with our exclusive wedding packages.",
    image: weddingEvent,
    eventCount: "200+ Events",
    location: "Premium Venues",
    price: "From $8,000",
    date: "Year Round",
    featured: true,
  },
  {
    name: "Outdoor Ceremonies",
    slug: "outdoor-ceremonies",
    description: "Beautiful outdoor celebrations in nature's embrace.",
    image: heroEvents,
    eventCount: "80+ Events",
    location: "Garden Venues",
    price: "From $3,500",
    date: "Seasonal",
    featured: false,
  },
  {
    name: "Beach Events",
    slug: "beach-events",
    description: "Serene beach celebrations with stunning ocean views.",
    image: heroEvents,
    eventCount: "60+ Events",
    location: "Beachfront Venues",
    price: "From $4,000",
    date: "Year Round",
    featured: false,
  },
  {
    name: "Concerts",
    slug: "concerts",
    description: "Music events & entertainment shows that rock the world.",
    image: concertEvent,
    eventCount: "120+ Events",
    location: "Concert Halls",
    price: "From $5,000",
    date: "Year Round",
    featured: true,
  },
  {
    name: "Private Parties",
    slug: "private-parties",
    description:
      "Unforgettable private celebrations crafted with attention to detail.",
    image: partyEvent,
    eventCount: "150+ Events",
    location: "Custom Venues",
    price: "From $2,000",
    date: "Year Round",
    featured: false,
  },
];

const EventCategories = ({ alternate = false }) => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            categories.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('event-categories-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Section alternate={alternate} className="scroll-smooth relative overflow-hidden" id="event-categories-section">
      <div className="relative z-10">
        <SectionHeader
          title="Event Categories"
          subtitle="Browse through our diverse range of event types and find the perfect match for your occasion"
          badge="Explore Our Events"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.slice(0, 3).map((category, index) => {
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
              >
                <Link to={`/category/${category.slug}`}>
                  <Card className="group h-full flex flex-col border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-white">

                    {/* Image Section */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4">
                        {category.featured && (
                          <Badge className="bg-accent text-accent-foreground shadow-sm">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                            {category.name}
                          </h3>
                          <div className="flex items-center text-xs text-muted-foreground gap-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {category.location}
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground text-xs">
                          {category.eventCount}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Starting from</p>
                          <p className="text-lg font-bold text-primary">{category.price}</p>
                        </div>
                        <div className="text-sm font-semibold text-primary flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          View Details <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                  </Card>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in-delay">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/events" className="flex items-center gap-2">
              View All Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default EventCategories;
