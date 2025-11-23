import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import weddingImage from "@/assets/wedding-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import partyImage from "@/assets/party-event.jpg";
import concertImage from "@/assets/concert-event.jpg";

const events = [
  {
    image: weddingImage,
    title: "Elegant Wedding Package",
    category: "Wedding",
    location: "Grand Ballroom, New York",
    date: "Available Year Round",
    capacity: "200-500 guests",
    price: "$15,000",
  },
  {
    image: corporateImage,
    title: "Corporate Conference",
    category: "Corporate",
    location: "Convention Center, Chicago",
    date: "Flexible Dates",
    capacity: "500-1000 guests",
    price: "$25,000",
  },
  {
    image: partyImage,
    title: "Birthday Celebration",
    category: "Party",
    location: "Rooftop Venue, Miami",
    date: "Weekend Slots",
    capacity: "50-150 guests",
    price: "$5,000",
  },
  {
    image: concertImage,
    title: "Music Concert Event",
    category: "Concert",
    location: "Open Air Stadium, LA",
    date: "Summer Season",
    capacity: "2000+ guests",
    price: "$50,000",
  },
];

const FeaturedEvents = () => {
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
            Featured Event Packages
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground font-normal max-w-2xl mx-auto">
            Discover our most popular event packages designed to make your occasion extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-primary">
                  {event.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-base md:text-lg mb-3 text-foreground">
                  {event.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground font-normal">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground font-normal">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground font-normal">{event.capacity}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-primary">{event.price}</span>
                  <span className="text-muted-foreground text-base md:text-lg font-normal"> /event</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary-dark">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
