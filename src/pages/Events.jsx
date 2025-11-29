import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Browse All Events</h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our comprehensive collection of event packages
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-20">
                  <h3 className="font-semibold text-lg mb-4">Filter Events</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Event Type</label>
                      <div className="space-y-2">
                        {["All Events", "Corporate", "Wedding", "Party", "Conference", "Concert"].map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Price Range</label>
                      <div className="space-y-2">
                        {["$0 - $5,000", "$5,000 - $15,000", "$15,000 - $30,000", "$30,000+"].map((range) => (
                          <label key={range} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm">{range}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Events Grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all">
                      <div className="h-48 bg-primary/20 relative">
                        <Badge className="absolute top-4 right-4 bg-primary">Featured</Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-3">Event Package {index + 1}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>Premium Venue, City</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>Available Year Round</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>100-300 guests</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">$12,000</span>
                          <Button size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;

